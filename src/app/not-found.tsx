import type { Metadata } from "next"
import Link from "next/link"
import PageWrapper from "@/components/layout/PageWrapper"
import { siteConfig } from "@/data/site"

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you are looking for does not exist. Head back to the home page to keep exploring.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: `Page Not Found | ${siteConfig.name}`,
    description:
      "The page you are looking for does not exist. Head back to the home page to keep exploring.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `Page Not Found | ${siteConfig.name}`,
    description:
      "The page you are looking for does not exist. Head back to the home page to keep exploring.",
  },
}

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center">
      <PageWrapper className="text-center">
        <h1 className="font-heading text-6xl text-gold">404</h1>
        <p className="mt-4 text-lg text-text-secondary">Page not found</p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-lg border border-gold px-8 py-3 text-sm font-medium uppercase tracking-wider text-gold no-underline transition-all hover:bg-gold hover:text-navy"
        >
          Back to Home
        </Link>
      </PageWrapper>
    </section>
  )
}
