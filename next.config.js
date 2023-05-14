/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  images: {
    unoptimized: true
  },
  redirects: async () => {
    return [
      {
        source: '/portfolio/:slug',
        destination: '/projects/:slug',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
