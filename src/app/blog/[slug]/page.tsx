import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, Clock, RefreshCw } from "lucide-react"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionTitle from "@/components/ui/SectionTitle"
import ScrollReveal from "@/components/ui/ScrollReveal"
import JsonLd from "@/components/seo/JsonLd"
import ContactSection from "@/components/sections/ContactSection"
import ArticleBody from "@/components/blog/ArticleBody"
import BlogImage from "@/components/blog/BlogImage"
import PostCard from "@/components/blog/PostCard"
import NoPosts from "@/components/blog/NoPosts"
import {
  dateAttribute,
  formatDate,
  getPost,
  getPostSlugs,
  getRelatedPosts,
  PLACEHOLDER_SLUG,
  readingLabel,
  withPlaceholder,
} from "@/lib/blog"
import { OG_HEIGHT, OG_WIDTH, ogImage, toPostRef } from "@/lib/blog/seo"
import { blogPostingGraph } from "@/data/blog"
import { siteConfig } from "@/data/site"

interface Params {
  slug: string
}

// Static export: every article page is created here, at build time. While the
// CMS has no posts only the reserved page is generated, which is what keeps the
// route alive (see PLACEHOLDER_SLUG).
export async function generateStaticParams(): Promise<Params[]> {
  const slugs = await getPostSlugs()
  return withPlaceholder(slugs).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) {
    return {
      title: "Posts coming soon",
      robots: { index: false, follow: false },
    }
  }

  const title = post.metaTitle || post.title
  const description = post.metaDescription || post.excerpt
  const image = ogImage(post)
  const url = `${siteConfig.url}/blog/${post.slug}`

  return {
    title,
    description,
    keywords: [
      ...post.categories.map((category) => category.title),
      siteConfig.name,
      "blog",
    ],
    alternates: { canonical: url },
    // `noIndex` is a checkbox in the Studio, for posts that need to exist
    // without showing up in search results.
    ...(post.noIndex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [siteConfig.url],
      images: [
        { url: image.url, width: OG_WIDTH, height: OG_HEIGHT, alt: image.alt },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [image.url],
    },
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    // The reserved page exists only while the CMS is empty. Any other unknown
    // slug is a real 404.
    if (slug !== PLACEHOLDER_SLUG) notFound()
    return (
      <div className="py-32">
        <NoPosts title="The first post is on its way" />
      </div>
    )
  }

  const related = await getRelatedPosts(post)

  return (
    <>
      <JsonLd data={blogPostingGraph(toPostRef(post))} />

      <article>
        {/* Hero — a dark band in both themes, like the home page and the
            header sitting on top of it: the text uses the hero-* tokens, never
            the page ones (in light mode text-primary is the same colour as
            navy, so the title would disappear). The band stays dark for its
            whole height and only the strip below the content fades into the
            page background. */}
        <section className="relative overflow-hidden pb-20 pt-32">
          <div className="absolute inset-0 bg-gradient-to-b from-navy to-navy-light" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-background" />
          <PageWrapper className="relative z-10">
            <ScrollReveal>
              {post.categories.length > 0 && (
                <div className="mb-4 flex flex-wrap gap-2">
                  {post.categories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/blog/category/${category.slug}`}
                      className="rounded-sm border border-hero-border px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-hero-muted no-underline transition-colors hover:border-gold-light hover:text-gold-light"
                    >
                      {category.title}
                    </Link>
                  ))}
                </div>
              )}

              <h1 className="max-w-3xl font-heading text-3xl text-hero-text md:text-5xl">
                {post.title}
              </h1>

              {post.excerpt && (
                <p className="mt-4 max-w-2xl text-lg text-hero-muted">
                  {post.excerpt}
                </p>
              )}

              <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-hero-muted">
                <span className="flex items-center gap-2">
                  <Calendar size={16} className="text-gold-light" />
                  <time dateTime={dateAttribute(post.publishedAt)}>
                    {formatDate(post.publishedAt)}
                  </time>
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} className="text-gold-light" />
                  {readingLabel(post.readingMinutes)}
                </span>
                {post.updatedAt && (
                  <span className="flex items-center gap-2">
                    <RefreshCw size={16} className="text-gold-light" />
                    Updated{" "}
                    <time dateTime={dateAttribute(post.updatedAt)}>
                      {formatDate(post.updatedAt)}
                    </time>
                  </span>
                )}
              </div>
            </ScrollReveal>
          </PageWrapper>
        </section>

        {/* Cover */}
        {post.coverImage && (
          <PageWrapper>
            <figure>
              <BlogImage
                image={post.coverImage}
                ratio={16 / 9}
                priority
                sizes="(min-width: 1200px) 1152px, 100vw"
                className="w-full rounded-lg border border-border object-cover"
              />
              {post.coverImage.caption && (
                <figcaption className="mt-3 text-center text-sm text-text-muted">
                  {post.coverImage.caption}
                </figcaption>
              )}
            </figure>
          </PageWrapper>
        )}

        {/* Body: narrower than the page grid, because prose reads badly wide. */}
        <div className="mx-auto max-w-[720px] px-6 py-16">
          <ArticleBody value={post.body} />
        </div>
      </article>

      {related.length > 0 && (
        <div className="border-t border-border bg-surface/50 py-20">
          <PageWrapper>
            <ScrollReveal>
              <SectionTitle>Keep reading</SectionTitle>
            </ScrollReveal>
            <div>
              {related.map((item) => (
                <PostCard key={item.slug} post={item} />
              ))}
            </div>
          </PageWrapper>
        </div>
      )}

      <ContactSection />
    </>
  )
}
