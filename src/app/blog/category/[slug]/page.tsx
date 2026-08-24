import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import PageWrapper from "@/components/layout/PageWrapper"
import ScrollReveal from "@/components/ui/ScrollReveal"
import JsonLd from "@/components/seo/JsonLd"
import ContactSection from "@/components/sections/ContactSection"
import PostCard from "@/components/blog/PostCard"
import NoPosts from "@/components/blog/NoPosts"
import {
  getCategories,
  getCategory,
  getPostsByCategory,
  PLACEHOLDER_SLUG,
  withPlaceholder,
} from "@/lib/blog"
import { toPostRefs } from "@/lib/blog/seo"
import { blogIndexGraph } from "@/data/blog"
import { siteConfig } from "@/data/site"

interface Params {
  slug: string
}

// Only categories with at least one published post, see CATEGORIES_IN_USE in
// src/lib/blog/queries.ts. A category that loses its last post loses its page
// on the next build, and the sitemap follows. While no category is in use, only
// the reserved page is generated, which keeps the route alive.
export async function generateStaticParams(): Promise<Params[]> {
  const categories = await getCategories()
  return withPlaceholder(categories.map((category) => category.slug)).map(
    (slug) => ({ slug })
  )
}

function describe(title: string, custom: string | null): string {
  return custom || `Posts on ${title.toLowerCase()} by ${siteConfig.name}.`
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const category = await getCategory(slug)
  if (!category) {
    return {
      title: "Posts coming soon",
      robots: { index: false, follow: false },
    }
  }

  const description = describe(category.title, category.description)
  const url = `${siteConfig.url}/blog/category/${category.slug}`

  return {
    title: `${category.title} - Blog`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${category.title} | Blog | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: siteConfig.image,
          width: 800,
          height: 800,
          alt: `${category.title} - Blog`,
        },
      ],
    },
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const [category, posts, categories] = await Promise.all([
    getCategory(slug),
    getPostsByCategory(slug),
    getCategories(),
  ])

  if (!category) {
    // Reserved page: exists only while no category has posts.
    if (slug !== PLACEHOLDER_SLUG) notFound()
    return (
      <div className="py-32">
        <NoPosts title="The first post is on its way" />
      </div>
    )
  }

  const path = `/blog/category/${category.slug}`
  const description = describe(category.title, category.description)

  return (
    <>
      <JsonLd
        data={blogIndexGraph({
          path,
          name: `${category.title} - Blog`,
          description,
          crumbs: [
            { name: "Blog", path: "/blog" },
            { name: category.title, path },
          ],
          posts: toPostRefs(posts),
        })}
      />

      <section className="relative overflow-hidden pb-12 pt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light/40 to-background" />
        <PageWrapper className="relative z-10">
          <ScrollReveal>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold">
              Topic
            </p>
            <h1 className="mt-2 font-heading text-4xl text-text-primary md:text-5xl">
              {category.title}
            </h1>
            {category.description && (
              <p className="mt-4 max-w-xl text-text-secondary">
                {category.description}
              </p>
            )}
          </ScrollReveal>
        </PageWrapper>
      </section>

      <div className="border-t border-border bg-surface/50 py-8">
        <PageWrapper>
          <nav
            aria-label="Categories"
            className="flex flex-wrap items-center gap-3"
          >
            <Link
              href="/blog"
              className="rounded-sm border border-border-subtle px-3 py-1.5 text-sm text-text-secondary no-underline transition-colors hover:border-gold hover:text-gold"
            >
              All posts
            </Link>
            {categories.map((item) => {
              const current = item.slug === category.slug
              return (
                <Link
                  key={item.slug}
                  href={`/blog/category/${item.slug}`}
                  aria-current={current ? "page" : undefined}
                  className={
                    current
                      ? "rounded-sm border border-gold bg-gold/10 px-3 py-1.5 text-sm text-gold no-underline"
                      : "rounded-sm border border-border-subtle px-3 py-1.5 text-sm text-text-secondary no-underline transition-colors hover:border-gold hover:text-gold"
                  }
                >
                  {item.title}
                </Link>
              )
            })}
          </nav>
        </PageWrapper>
      </div>

      <PageWrapper className="py-24">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </PageWrapper>

      <ContactSection />
    </>
  )
}
