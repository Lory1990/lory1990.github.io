/**
 * The blog's GROQ queries.
 *
 * They live together, away from the pages, because they are the only place
 * where the shape of the documents in the CMS leaks into the app. Change the
 * Studio schema (studio/schemaTypes) and this is the file that follows.
 */

// An image projection returns the asset reference, not a URL: imageUrl() turns
// it into the crops the page asks for. `lqip` is the blur placeholder Sanity
// computes on upload, used as a background while the real file downloads.
const IMAGE = `{
  "ref": asset._ref,
  "alt": coalesce(alt, ""),
  caption,
  "lqip": asset->metadata.lqip,
  "width": asset->metadata.dimensions.width,
  "height": asset->metadata.dimensions.height
}`

const CATEGORIES = `categories[]->{ title, "slug": slug.current, description }`

// Fields for index pages: everything except `body`. From the body we only take
// the length of its plain text, enough to estimate reading time without
// shipping the whole article to a card.
const SUMMARY = `{
  "slug": slug.current,
  title,
  excerpt,
  publishedAt,
  updatedAt,
  "characters": length(pt::text(body)),
  "coverImage": coverImage ${IMAGE},
  "categories": ${CATEGORIES}
}`

// A post counts as published when it exists as a non-draft document with a slug
// and a date — hitting Publish in the Studio is what puts it online. There is
// deliberately no `publishedAt <= now()` filter: on a static site a future-dated
// post would stay invisible until the next build, which may never come, and the
// author would have no way to tell why.
const PUBLISHED = `_type == "post" && defined(slug.current) && defined(publishedAt)`

export const POSTS = `*[${PUBLISHED}] | order(publishedAt desc) ${SUMMARY}`

export const POST_SLUGS = `*[${PUBLISHED}].slug.current`

export const POST_BY_SLUG = `*[${PUBLISHED} && slug.current == $slug][0] {
  "slug": slug.current,
  title,
  excerpt,
  publishedAt,
  updatedAt,
  "characters": length(pt::text(body)),
  "coverImage": coverImage ${IMAGE},
  "categories": ${CATEGORIES},
  body[] {
    ...,
    _type == "image" => ${IMAGE},
    markDefs[] {
      ...,
      _type == "internalLink" => { "href": @.reference->slug.current }
    }
  },
  "metaTitle": seo.metaTitle,
  "metaDescription": seo.metaDescription,
  "noIndex": coalesce(seo.noIndex, false)
}`

// Only categories with at least one published post. An empty category would
// produce an archive page with nothing on it, which Google reads as thin content.
export const CATEGORIES_IN_USE = `*[
  _type == "category" && defined(slug.current)
  && count(*[${PUBLISHED} && references(^._id)]) > 0
] | order(title asc) {
  title,
  "slug": slug.current,
  description
}`

export const CATEGORY_BY_SLUG = `*[_type == "category" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  description
}`

export const POSTS_BY_CATEGORY = `*[
  ${PUBLISHED} && $slug in categories[]->slug.current
] | order(publishedAt desc) ${SUMMARY}`

// Related posts: those sharing a category, newest first, current post excluded.
export const RELATED_POSTS = `*[
  ${PUBLISHED} && slug.current != $slug
  && count((categories[]->slug.current)[@ in $categories]) > 0
] | order(publishedAt desc) [0...$limit] ${SUMMARY}`
