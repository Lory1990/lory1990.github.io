import type { Metadata } from "next"
import Link from "next/link"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionTitle from "@/components/ui/SectionTitle"
import ScrollReveal from "@/components/ui/ScrollReveal"
import JsonLd from "@/components/seo/JsonLd"
import ContactSection from "@/components/sections/ContactSection"
import PostCard from "@/components/blog/PostCard"
import NoPosts from "@/components/blog/NoPosts"
import { getCategories, getPosts } from "@/lib/blog"
import { toPostRefs } from "@/lib/blog/seo"
import { blogIndexGraph } from "@/data/blog"
import { siteConfig } from "@/data/site"

const blogDescription =
  "Notes on software architecture, engineering leadership, cloud, and the work of running a technology organisation."

export const metadata: Metadata = {
  title: "Blog",
  description: blogDescription,
  keywords: [
    "Lorenzo De Francesco",
    "CTO blog",
    "software architecture",
    "engineering leadership",
    "cloud architecture",
    "fintech engineering",
    "IT governance",
    "microfrontends",
    "technical writing",
  ],
  alternates: {
    canonical: `${siteConfig.url}/blog`,
    // Declared in the head so feed readers can discover it from the blog URL.
    types: { "application/rss+xml": `${siteConfig.url}/blog/rss.xml` },
  },
  openGraph: {
    title: `Blog | ${siteConfig.name}`,
    description: blogDescription,
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: siteConfig.image,
        width: 800,
        height: 800,
        alt: `${siteConfig.name} - Blog`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog | ${siteConfig.name}`,
    description: blogDescription,
    images: [siteConfig.image],
  },
}

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([getPosts(), getCategories()])

  return (
    <>
      <JsonLd
        data={blogIndexGraph({
          path: "/blog",
          name: "Blog",
          description: blogDescription,
          crumbs: [{ name: "Blog", path: "/blog" }],
          posts: toPostRefs(posts),
        })}
      />

      {/* Hero — dark band in both themes, hero-* tokens for the text
          (see the article page for why). */}
      <section className="relative overflow-hidden pb-20 pt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-navy to-navy-light" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-background" />
        <PageWrapper className="relative z-10">
          <ScrollReveal>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold-light">
              Writing
            </p>
            <h1 className="mt-2 font-heading text-4xl text-hero-text md:text-5xl">
              Blog
            </h1>
            <p className="mt-4 max-w-xl text-hero-muted">
              Architecture decisions, engineering leadership, and what actually
              happens when you build and run software organisations. Written
              from the inside, not from a framework diagram.
            </p>
          </ScrollReveal>
        </PageWrapper>
      </section>

      {categories.length > 0 && (
        <div className="border-t border-border bg-surface/50 py-8">
          <PageWrapper>
            <nav
              aria-label="Categories"
              className="flex flex-wrap items-center gap-3"
            >
              <span className="text-xs uppercase tracking-wider text-text-muted">
                Topics
              </span>
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/blog/category/${category.slug}`}
                  className="rounded-sm border border-border-subtle px-3 py-1.5 text-sm text-text-secondary no-underline transition-colors hover:border-gold hover:text-gold"
                >
                  {category.title}
                </Link>
              ))}
            </nav>
          </PageWrapper>
        </div>
      )}

      <PageWrapper className="py-24">
        {posts.length === 0 ? (
          // The section exists before the first post: a page saying what is
          // coming beats a 404.
          <NoPosts title="The first post is on its way" />
        ) : (
          <>
            <ScrollReveal>
              <SectionTitle>Latest</SectionTitle>
            </ScrollReveal>
            <div>
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
            <p className="mt-10 text-sm text-text-muted">
              Also available as an{" "}
              <a href="/blog/rss.xml" className="text-gold hover:text-gold-light">
                RSS feed
              </a>
              .
            </p>
          </>
        )}
      </PageWrapper>

      <ContactSection />
    </>
  )
}
