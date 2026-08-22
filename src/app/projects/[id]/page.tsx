import type { Metadata } from "next"
import Image from "next/image"
import { ExternalLink, Users, Calendar, Briefcase, Layers } from "lucide-react"
import PageWrapper from "@/components/layout/PageWrapper"
import Badge from "@/components/ui/Badge"
import ArticleRenderer from "@/components/content/ArticleRenderer"
import ScrollReveal from "@/components/ui/ScrollReveal"
import ContactSection from "@/components/sections/ContactSection"
import JsonLd from "@/components/seo/JsonLd"
import { siteConfig } from "@/data/site"
import { PERSON_ID } from "@/data/person"
import projects from "@/data/projects"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const project = projects.find((p) => p.slug === id)
  if (!project) return {}
  const description =
    project.boxDescription || project.description?.slice(0, 160)
  const keywords = [
    project.title,
    ...(project.category ?? []),
    ...(project.stack ?? []),
    "Lorenzo De Francesco",
    "project",
    "portfolio",
    "case study",
  ]
  const image = project.image ?? siteConfig.image
  return {
    title: project.title,
    description,
    keywords,
    alternates: {
      canonical: `${siteConfig.url}/projects/${id}`,
    },
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description,
      url: `${siteConfig.url}/projects/${id}`,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "article",
      images: [
        {
          url: image,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${siteConfig.name}`,
      description,
      images: [image],
    },
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const project = projects.find((p) => p.slug === id)
  if (!project) notFound()

  const metaItems = [
    { icon: Briefcase, label: "Role", value: project.role },
    { icon: Users, label: "Team", value: project.team },
    { icon: Calendar, label: "Date", value: project.date },
    {
      icon: Layers,
      label: "Stack",
      value: project.stack?.join(", "),
    },
  ].filter((m) => m.value)

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          description:
            project.boxDescription || project.description?.slice(0, 160),
          url: `${siteConfig.url}/projects/${project.slug}`,
          ...(project.image && {
            image: `${siteConfig.url}${project.image}`,
          }),
          author: { "@id": PERSON_ID },
          creator: { "@id": PERSON_ID },
          ...(project.date && { dateCreated: project.date }),
          ...(project.category && { keywords: project.category.join(", ") }),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: siteConfig.url,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Projects",
              item: `${siteConfig.url}/projects`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: project.title,
              item: `${siteConfig.url}/projects/${project.slug}`,
            },
          ],
        }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-32">
        {project.background && (
          <>
            <Image
              src={project.background}
              alt={project.title}
              fill
              className="object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy-light/30 via-navy-light/20 to-background" />
          </>
        )}
        {!project.background && (
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light/40 to-background" />
        )}

        <PageWrapper className="relative z-10">
          <ScrollReveal>
            {project.category && (
              <div className="mb-4 flex flex-wrap gap-2">
                {project.category.map((cat) => (
                  <Badge key={cat}>{cat}</Badge>
                ))}
              </div>
            )}
            <h1 className="font-heading text-4xl text-text-primary md:text-5xl">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="mt-3 text-lg text-text-secondary">
                {project.subtitle}
              </p>
            )}
          </ScrollReveal>
        </PageWrapper>
      </section>

      <PageWrapper className="pb-24">
        <div className="flex flex-col gap-12 md:flex-row">
          {/* Main content */}
          <div className="flex-1">
            {project.description && (
              <ScrollReveal>
                <p className="text-lg leading-relaxed text-text-secondary">
                  {project.description}
                </p>
              </ScrollReveal>
            )}
          </div>

          {/* Sidebar meta */}
          {metaItems.length > 0 && (
            <ScrollReveal delay={0.1}>
              <div className="w-full shrink-0 rounded-lg border border-border bg-surface p-6 md:w-72">
                <div className="space-y-5">
                  {metaItems.map(({ icon: Icon, label, value }) => (
                    <div key={label}>
                      <div className="mb-1 flex items-center gap-2 text-xs uppercase tracking-wider text-text-muted">
                        <Icon size={14} />
                        {label}
                      </div>
                      <p className="text-sm text-text-primary">{value}</p>
                    </div>
                  ))}
                </div>

                {project.link?.web && (
                  <a
                    href={project.link.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex items-center justify-center gap-2 rounded-lg border border-gold px-4 py-2.5 text-sm font-medium text-gold no-underline transition-all hover:bg-gold hover:text-navy"
                  >
                    <ExternalLink size={16} />
                    Visit Website
                  </a>
                )}
              </div>
            </ScrollReveal>
          )}
        </div>
      </PageWrapper>

      {/* Screenshots */}
      {project.desktopScreenshots && project.desktopScreenshots.length > 0 && (
        <PageWrapper className="pb-16">
          <ScrollReveal>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {project.desktopScreenshots.map((src, i) => (
                <div
                  key={i}
                  className="relative h-64 w-96 shrink-0 overflow-hidden rounded-lg border border-border"
                >
                  <Image
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </PageWrapper>
      )}

      {/* Article blocks */}
      {project.article && project.article.length > 0 && (
        <div className="pb-24">
          <ArticleRenderer articles={project.article} />
        </div>
      )}

      <ContactSection />
    </>
  )
}
