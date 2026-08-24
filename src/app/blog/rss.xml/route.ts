import { getPosts } from "@/lib/blog"
import { toPostRefs } from "@/lib/blog/seo"
import { siteConfig } from "@/data/site"

/**
 * The blog's RSS feed.
 *
 * A Route Handler, which under `output: "export"` runs at build time and is
 * written to disk as `out/blog/rss.xml`. No server involved. GET only, reading
 * nothing off the request — that is the condition for Next.js to turn it into a
 * static file.
 */

// Without this, `output: "export"` refuses to build the route: Next.js needs to
// be told the response can be computed once and cached as a file.
export const dynamic = "force-static"

const TITLE = `Blog - ${siteConfig.name}`
const DESCRIPTION =
  "Notes on software architecture, engineering leadership, cloud, and running a technology organisation."
const FEED_URL = `${siteConfig.url}/blog/rss.xml`

/**
 * Post text comes from the CMS, so it always goes through here before entering
 * the XML: one stray ampersand in a title produces a feed readers silently
 * discard.
 */
function escape(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

export async function GET() {
  const posts = toPostRefs(await getPosts())
  // RFC 822 is the date format RSS 2.0 requires.
  const lastBuild = posts[0]
    ? new Date(posts[0].publishedAt).toUTCString()
    : new Date(0).toUTCString()

  const items = posts
    .map((post) => {
      const url = `${siteConfig.url}/blog/${post.slug}`
      return `    <item>
      <title>${escape(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <description>${escape(post.excerpt)}</description>
${(post.categories ?? [])
  .map((category) => `      <category>${escape(category)}</category>`)
  .join("\n")}
    </item>`
    })
    .join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(TITLE)}</title>
    <link>${siteConfig.url}/blog</link>
    <description>${escape(DESCRIPTION)}</description>
    <language>en</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${FEED_URL}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  })
}
