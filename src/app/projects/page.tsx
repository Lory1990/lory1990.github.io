import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Github, ExternalLink, Zap } from "lucide-react"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionTitle from "@/components/ui/SectionTitle"
import ContactSection from "@/components/sections/ContactSection"
import ScrollReveal from "@/components/ui/ScrollReveal"
import JsonLd from "@/components/seo/JsonLd"
import { siteConfig } from "@/data/site"
import projects from "@/data/projects"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Open source tools and a selection of fintech, insurtech, and enterprise projects built over 10+ years of software development.",
  alternates: {
    canonical: `${siteConfig.url}/projects`,
  },
}

const openSourceProjects = [
  {
    name: "MFE Orchestrator",
    tagline: "Like Kubernetes... but for frontend",
    description:
      "A centralized multi-cloud platform for managing and orchestrating microfrontends across multiple environments. Ship and manage microfrontends in minutes, not hours.",
    features: [
      "Multi-environment (DEV, UAT, PROD)",
      "Multi-cloud (AWS, Azure, GCP)",
      "Canary deployments",
      "CI/CD integration",
      "Version management & rollback",
      "Drag-and-drop configuration",
    ],
    website: "https://mfe-orchestrator.dev/",
    github: "https://github.com/mfe-orchestrator",
    version: "v0.8.5",
  },
  {
    name: "Swagger Aggregator",
    tagline: "Auto-discover and merge all your Swagger docs in Kubernetes",
    description:
      "A Kubernetes-native service that automatically discovers Ingress resources, retrieves associated services and pods, and aggregates their Swagger API definitions into a unified interface. Deploy with Helm and let it do the rest.",
    features: [
      "Auto-discovery of Ingress resources",
      "Active pod validation",
      "Swagger definition merging",
      "Redis caching support",
      "Helm chart deployment",
      "Namespace filtering",
    ],
    github: "https://github.com/Lory1990/swagger-aggregator",
    version: "v13",
  },
]

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Projects",
          description:
            "Open source tools and a selection of fintech, insurtech, and enterprise projects built over 10+ years of software development.",
          url: `${siteConfig.url}/projects`,
          mainEntity: {
            "@type": "ItemList",
            itemListElement: projects.map((project, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: project.title,
              url: `${siteConfig.url}/projects/${project.slug}`,
            })),
          },
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
          ],
        }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-light to-background" />
        <PageWrapper className="relative z-10">
          <ScrollReveal>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold">
              Portfolio
            </p>
            <h1 className="mt-2 font-heading text-4xl text-text-primary md:text-5xl">
              Projects
            </h1>
            <p className="mt-4 max-w-xl text-text-secondary">
              Open source tools and a selection of projects I have led across
              fintech, insurtech, crypto, and enterprise software.
            </p>
          </ScrollReveal>
        </PageWrapper>
      </section>

      {/* Open Source */}
      <div className="border-t border-border bg-surface/50 py-24">
        <PageWrapper>
          <ScrollReveal>
            <SectionTitle>Open Source</SectionTitle>
          </ScrollReveal>

          <div className="space-y-6">
          {openSourceProjects.map((project) => (
            <ScrollReveal key={project.name}>
              <div className="rounded-xl border border-border bg-surface p-8 md:p-10">
                <div className="flex flex-col gap-8 md:flex-row md:items-start">
                  {/* Icon */}
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold/5">
                    <Zap size={32} className="text-gold" />
                  </div>

                  <div className="flex-1">
                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-heading text-2xl text-text-primary md:text-3xl">
                        {project.name}
                      </h3>
                      <span className="rounded-sm bg-gold/10 px-2 py-0.5 text-xs font-semibold text-gold">
                        {project.version}
                      </span>
                    </div>
                    <p className="mt-1 font-heading text-lg italic text-text-muted">
                      {project.tagline}
                    </p>
                    <p className="mt-4 max-w-2xl leading-relaxed text-text-secondary">
                      {project.description}
                    </p>

                    {/* Features grid */}
                    <div className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-3">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-sm text-text-secondary"
                        >
                          <span className="h-1 w-1 shrink-0 rounded-full bg-gold" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="mt-8 flex flex-wrap gap-3">
                      {"website" in project && project.website && (
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-navy no-underline transition-colors hover:bg-gold-light"
                        >
                          <ExternalLink size={16} />
                          Visit Website
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-text-secondary no-underline transition-all hover:border-gold hover:text-gold"
                      >
                        <Github size={16} />
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
          </div>
        </PageWrapper>
      </div>

      {/* All Projects */}
      <PageWrapper className="py-24">
        <ScrollReveal>
          <SectionTitle>Client &amp; Side Projects</SectionTitle>
        </ScrollReveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ScrollReveal key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="group flex items-center gap-4 rounded-lg border border-border bg-surface p-4 no-underline transition-all hover:border-gold/30"
              >
                {project.image && (
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md border border-border-subtle">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="min-w-0">
                  <h3 className="truncate font-heading text-sm text-text-primary">
                    {project.title}
                  </h3>
                  <p className="mt-0.5 truncate text-xs text-text-muted">
                    {project.boxDescription}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </PageWrapper>

      <ContactSection />
    </>
  )
}
