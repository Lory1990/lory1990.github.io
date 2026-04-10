import Link from "next/link"
import PageWrapper from "@/components/layout/PageWrapper"

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
