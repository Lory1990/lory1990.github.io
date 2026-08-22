/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://lorenzodefrancesco.it/",
  generateRobotsTxt: true,
  trailingSlash: false,
  generateIndexSitemap: false
  // ...other options
}
