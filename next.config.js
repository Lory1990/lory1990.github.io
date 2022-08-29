const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
}

module.exports = nextConfig
