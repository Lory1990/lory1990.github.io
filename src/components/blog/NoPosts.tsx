import Link from "next/link"
import PageWrapper from "@/components/layout/PageWrapper"

/**
 * Shown when there is nothing to list: on /blog before the first post, and on
 * the reserved page that keeps the dynamic routes alive while the CMS is empty
 * (see PLACEHOLDER_SLUG in @/lib/blog).
 */
export default function NoPosts({ title }: { title: string }) {
  return (
    <PageWrapper>
      <div className="rounded-lg border border-border bg-surface p-10 text-center">
        <h2 className="font-heading text-2xl text-text-primary">{title}</h2>
        <p className="mx-auto mt-3 max-w-lg text-text-secondary">
          I am writing the first pieces on architecture, engineering leadership
          and the work of running a technology organisation. In the meantime,
          the{" "}
          <Link href="/events" className="text-gold hover:text-gold-light">
            talks
          </Link>{" "}
          cover a lot of the same ground.
        </p>
      </div>
    </PageWrapper>
  )
}
