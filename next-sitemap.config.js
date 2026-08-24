const fs = require("node:fs")
const path = require("node:path")

// Whether the build produced any real article.
//
// A post is written to out/blog/<slug>.html, so the directory listing is the
// most direct signal available at postbuild time. `no-posts-yet` is the
// reserved page that keeps the dynamic route alive while the CMS is empty
// (PLACEHOLDER_SLUG in src/lib/blog), so it does not count as content.
let emptyBlog
function blogIsEmpty() {
  if (emptyBlog !== undefined) return emptyBlog
  try {
    const pages = fs
      .readdirSync(path.join(__dirname, "out", "blog"))
      .filter((file) => file.endsWith(".html") && file !== "no-posts-yet.html")
    emptyBlog = pages.length === 0
  } catch {
    // No out/blog at all: nothing to advertise either.
    emptyBlog = true
  }
  return emptyBlog
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://lorenzodefrancesco.it",
  // robots.txt is hand-written at public/robots.txt so we can declare
  // Content-Signal directives and Host headers that next-sitemap doesn't
  // support. Don't let next-sitemap overwrite it.
  generateRobotsTxt: false,
  trailingSlash: false,
  generateIndexSitemap: false,
  // The site is statically exported to ./out, so write the sitemap there.
  // Without this, next-sitemap writes to ./public/ in CI (after `next build`
  // has already finished copying public/ → out/), and the sitemap never makes
  // it into the deployed artifact.
  outDir: "./out",
  exclude: [
    // The RSS feed is a file, not a page.
    "/blog/rss.xml",
    // Reserved pages that keep the blog's dynamic routes alive while the CMS is
    // empty. They are already noindex — see PLACEHOLDER_SLUG in src/lib/blog.
    "/blog/no-posts-yet",
    "/blog/category/no-posts-yet",
  ],
  // While the blog has no posts, keep every /blog URL out of the sitemap: the
  // index is noindex in that state (see generateMetadata in src/app/blog) and
  // submitting a noindex page is what trips "Submitted URL marked noindex" in
  // Search Console. Returning null drops the entry; everything else keeps
  // next-sitemap's default fields.
  transform: async (config, url) => {
    if (blogIsEmpty() && (url === "/blog" || url.startsWith("/blog/"))) {
      return null
    }
    return {
      loc: url,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
}
