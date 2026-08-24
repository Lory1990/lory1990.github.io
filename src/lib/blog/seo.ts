import type { BlogPostRef } from "@/data/blog"
import { siteConfig } from "@/data/site"
import { imageUrl } from "./image"
import type { PostSummary } from "./types"

/**
 * The bridge between CMS content and page metadata.
 *
 * It sits apart because three consumers need it — Next metadata, JSON-LD and
 * the RSS feed — and all three have to derive the same URL and the same social
 * image. Doing it once here keeps them from drifting.
 */

/** Open Graph wants 1200x630. Posts without a cover fall back to the site image. */
export const OG_WIDTH = 1200
export const OG_HEIGHT = 630

export function postUrl(slug: string): string {
  return `${siteConfig.url}/blog/${slug}`
}

export function ogImage(post: PostSummary): { url: string; alt: string } {
  const cover = post.coverImage
  const url =
    (cover &&
      imageUrl(cover, { width: OG_WIDTH, height: OG_HEIGHT, crop: true })) ||
    `${siteConfig.url}${siteConfig.image}`

  return { url, alt: cover?.alt || post.title }
}

/**
 * The article image for structured data. Unlike ogImage this does not fall back
 * to the site portrait: the same generic picture repeated on every BlogPosting
 * tells search engines nothing.
 */
export function articleImage(post: PostSummary): string | null {
  return post.coverImage ? imageUrl(post.coverImage, { width: OG_WIDTH }) : null
}

/** CMS summary -> the minimal shape structured data and the feed consume. */
export function toPostRef(post: PostSummary): BlogPostRef {
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    imageUrl: articleImage(post),
    categories: post.categories.map((category) => category.title),
  }
}

export function toPostRefs(posts: readonly PostSummary[]): BlogPostRef[] {
  return posts.map(toPostRef)
}
