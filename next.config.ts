import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  output: "export",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
