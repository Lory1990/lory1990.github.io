const { i18n } = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  trailingSlash: false,
  exportPathMap: async function ( 
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/events': { page: '/events' },
      '/events/1': { page: '/events/1' },
    }
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
}

module.exports = nextConfig
