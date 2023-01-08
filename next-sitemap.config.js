/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || "https://lory1990.github.io/",
    generateRobotsTxt: true,
    trailingSlash: false
    // ...other options
}
