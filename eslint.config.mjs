import nextConfig from "eslint-config-next"

export default [
  ...nextConfig,
  {
    // The CMS Studio is a separate project with its own dependencies and
    // tsconfig; it must not be linted with the site's Next.js rules.
    ignores: ["studio/**", "out/**"],
  },
]
