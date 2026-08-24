import type { Graph } from "schema-dts"
import { siteConfig } from "./site"
import { PERSON_ID, WEBSITE_ID } from "./person"

/**
 * Structured data for the blog.
 *
 * Three kinds of page, three graphs:
 * - /blog is an index: CollectionPage plus an ItemList pointing at the
 *   articles. Index pages are exactly the case Google wants ItemList for.
 * - /blog/[slug] is the article: BlogPosting, the only node Google uses for
 *   article rich results.
 * - /blog/category/[slug] is an archive, so a CollectionPage like the index.
 *
 * Every node references the canonical Person and WebSite by @id (see
 * ./person.ts) instead of restating them, so the whole site stays one entity.
 */

/** Only the post fields structured data needs, so this file stays CMS-agnostic. */
export interface BlogPostRef {
  slug: string
  title: string
  excerpt: string
  publishedAt: string
  updatedAt: string | null
  imageUrl?: string | null
  categories?: readonly string[]
}

export interface Crumb {
  name: string
  path: string
}

function breadcrumb(crumbs: Crumb[], id: string) {
  return {
    "@type": "BreadcrumbList" as const,
    "@id": id,
    itemListElement: [{ name: "Home", path: "/" }, ...crumbs].map(
      (crumb, index) => ({
        "@type": "ListItem" as const,
        position: index + 1,
        name: crumb.name,
        item: `${siteConfig.url}${crumb.path === "/" ? "" : crumb.path}`,
      })
    ),
  }
}

export function blogIndexGraph(options: {
  path: string
  name: string
  description: string
  crumbs: Crumb[]
  posts: readonly BlogPostRef[]
}): Graph {
  const url = `${siteConfig.url}${options.path}`

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: options.name,
        description: options.description,
        inLanguage: "en",
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": PERSON_ID },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: {
          // The list carries positions and URLs, not content: the article page
          // is the only one that emits a BlogPosting, so there is exactly one
          // node per post across the site.
          "@type": "ItemList",
          numberOfItems: options.posts.length,
          itemListElement: options.posts.map((post, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: post.title,
            url: `${siteConfig.url}/blog/${post.slug}`,
          })),
        },
      },
      breadcrumb(options.crumbs, `${url}#breadcrumb`),
    ],
  }
}

export function blogPostingGraph(post: BlogPostRef): Graph {
  const url = `${siteConfig.url}/blog/${post.slug}`

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.excerpt,
        url,
        datePublished: post.publishedAt,
        // Google expects dateModified even on a post that was never revised;
        // there it simply equals the publication date.
        dateModified: post.updatedAt ?? post.publishedAt,
        inLanguage: "en",
        author: { "@id": PERSON_ID },
        publisher: { "@id": PERSON_ID },
        isPartOf: { "@id": WEBSITE_ID },
        mainEntityOfPage: { "@id": `${url}#webpage` },
        ...(post.imageUrl ? { image: post.imageUrl } : {}),
        ...(post.categories?.length
          ? { articleSection: [...post.categories] }
          : {}),
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: post.title,
        description: post.excerpt,
        inLanguage: "en",
        isPartOf: { "@id": WEBSITE_ID },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        // primaryImageOfPage wants an ImageObject, not a bare URL.
        ...(post.imageUrl
          ? {
              primaryImageOfPage: {
                "@type": "ImageObject" as const,
                url: post.imageUrl,
              },
            }
          : {}),
      },
      breadcrumb(
        [
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ],
        `${url}#breadcrumb`
      ),
    ],
  }
}
