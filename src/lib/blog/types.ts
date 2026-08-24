import type { PortableTextBlock } from "@portabletext/types"

/**
 * The shape blog content takes once it has left the CMS.
 *
 * This is the only contract between Sanity and the rest of the app: pages know
 * these types, not GROQ and not Sanity. Swapping CMS means rewriting
 * src/lib/blog/client.ts and the queries, and nothing under src/app.
 */

/**
 * A reference to a Sanity image asset. The query does not return a URL — it
 * returns the asset reference, and imageUrl() derives the crops from it.
 */
export interface CmsImage {
  ref: string
  alt: string | null
  caption: string | null
  /** Base64 blur placeholder Sanity computes on upload. */
  lqip: string | null
  width: number | null
  height: number | null
}

export interface Category {
  title: string
  slug: string
  description: string | null
}

/** Everything a card needs: no body, which is by far the heaviest field. */
export interface PostSummary {
  slug: string
  title: string
  excerpt: string
  publishedAt: string
  updatedAt: string | null
  readingMinutes: number
  coverImage: CmsImage | null
  categories: Category[]
}

export interface Post extends PostSummary {
  body: PortableTextBlock[]
  /** SEO overrides. When empty, title and excerpt are used instead. */
  metaTitle: string | null
  metaDescription: string | null
  noIndex: boolean
}
