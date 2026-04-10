import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionTitle from "@/components/ui/SectionTitle"
import TechStackGrid from "@/components/sections/TechStackGrid"
import ContactSection from "@/components/sections/ContactSection"
import ScrollReveal from "@/components/ui/ScrollReveal"
import JsonLd from "@/components/seo/JsonLd"
import { siteConfig } from "@/data/site"
import techStack from "@/data/tech-stack"

export const metadata: Metadata = {
  title: "Tech Skills",
  description:
    "Full stack expertise: React, Java, Node.js, Kubernetes, AWS, Azure, and more. 10+ years of hands-on development experience.",
  alternates: {
    canonical: `${siteConfig.url}/about/tech`,
  },
}

export default function TechSkillsPage() {
  return (
    <>
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
              name: "About",
              item: `${siteConfig.url}/about`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Tech Skills",
              item: `${siteConfig.url}/about/tech`,
            },
          ],
        }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light/40 to-background" />
        <PageWrapper className="relative z-10">
          <ScrollReveal>
            <Link
              href="/about"
              className="mb-6 inline-flex items-center gap-2 text-sm text-text-muted no-underline transition-colors hover:text-gold"
            >
              <ArrowLeft size={16} />
              Back to About
            </Link>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold">
              Technical Profile
            </p>
            <h1 className="mt-2 font-heading text-4xl text-text-primary md:text-5xl">
              Tech Skills
            </h1>
            <p className="mt-4 max-w-xl text-text-secondary">
              While my day-to-day is focused on leadership and strategy, I
              maintain deep technical skills across the full stack. Here&apos;s
              what I work with.
            </p>
          </ScrollReveal>
        </PageWrapper>
      </section>

      {/* Frontend */}
      <div className="border-t border-border bg-surface/50 py-24">
        <PageWrapper>
          <ScrollReveal>
            <SectionTitle>Frontend</SectionTitle>
            <p className="mb-8 max-w-xl text-text-secondary">
              I started my career as a frontend developer and led frontend
              architecture at Fabrik, overseeing a team of 5 and defining
              component libraries used across the organization.
            </p>
          </ScrollReveal>
          <TechStackGrid items={techStack} category="FE" />
        </PageWrapper>
      </div>

      {/* Backend */}
      <PageWrapper className="py-24">
        <ScrollReveal>
          <SectionTitle>Backend</SectionTitle>
          <p className="mb-8 max-w-xl text-text-secondary">
            From Java Spring Boot microservices to Node.js APIs, I design and
            build backend systems that handle enterprise-scale traffic with
            reliability and performance.
          </p>
        </ScrollReveal>
        <TechStackGrid items={techStack} category="BE" />
      </PageWrapper>

      {/* Cloud */}
      <div className="border-t border-border bg-surface/50 py-24">
        <PageWrapper>
          <ScrollReveal>
            <SectionTitle>Cloud &amp; Infrastructure</SectionTitle>
            <p className="mb-8 max-w-xl text-text-secondary">
              I architect cloud infrastructure on Azure and AWS, leveraging
              Kubernetes, Terraform, and containerization to build
              cost-effective, scalable platforms.
            </p>
          </ScrollReveal>
          <TechStackGrid items={techStack} category="CLOUD" />
        </PageWrapper>
      </div>

      <ContactSection />
    </>
  )
}
