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
}
