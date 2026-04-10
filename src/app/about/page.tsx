import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Facebook, Code } from "lucide-react"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionTitle from "@/components/ui/SectionTitle"
import ExperienceTimeline from "@/components/sections/ExperienceTimeline"
import ContactSection from "@/components/sections/ContactSection"
import ScrollReveal from "@/components/ui/ScrollReveal"
import JsonLd from "@/components/seo/JsonLd"
import { siteConfig } from "@/data/site"
import career from "@/data/career"

export const metadata: Metadata = {
  title: "About",
  description:
    "CTO with 10+ years of experience leading technology teams, reducing IT costs, and building scalable fintech platforms.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: `About | ${siteConfig.name}`,
    description:
      "CTO with 10+ years of experience leading technology teams, reducing IT costs, and building scalable fintech platforms.",
    url: `${siteConfig.url}/about`,
    type: "profile",
  },
}

const socialLinks = [
  { icon: Github, href: siteConfig.social.github, label: "GitHub" },
  { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
]

const highlights = [
  { value: "10+", label: "Years of Experience" },
  { value: "700k", label: "IT Costs Reduced" },
  { value: "40+", label: "Talks & Events" },
  { value: "5+", label: "Countries Served" },
]

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          mainEntity: {
            "@type": "Person",
            name: siteConfig.name,
            url: siteConfig.url,
            image: `${siteConfig.url}${siteConfig.image}`,
            jobTitle: siteConfig.title,
            worksFor: {
              "@type": "Organization",
              name: siteConfig.company,
            },
            alumniOf: [
              { "@type": "Organization", name: "Fabrik" },
              { "@type": "Organization", name: "Costa Crociere" },
              { "@type": "Organization", name: "Fincantieri" },
              { "@type": "Organization", name: "Navium" },
            ],
            knowsAbout: [
              "Fintech",
              "Cloud Architecture",
              "IT Governance",
              "Team Leadership",
              "Cost Optimization",
            ],
            memberOf: [
              {
                "@type": "Organization",
                name: "Google Developer Group Milano",
                url: "https://gdg.community.dev/gdg-milano/",
              },
              {
                "@type": "EducationalOrganization",
                name: "start2impact",
                url: "https://www.start2impact.it/",
              },
            ],
            sameAs: [
              siteConfig.social.github,
              siteConfig.social.linkedin,
              siteConfig.social.facebook,
            ],
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
              name: "About",
              item: `${siteConfig.url}/about`,
            },
          ],
        }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden pb-24 pt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-light to-background" />
        <PageWrapper className="relative z-10">
          <div className="flex flex-col items-center gap-12 md:flex-row md:items-start">
            <ScrollReveal>
              <div className="relative h-80 w-80 shrink-0 overflow-hidden rounded-2xl border border-border">
                <Image
                  src="/img/lorenzo-de-francesco.jpeg"
                  alt="Lorenzo De Francesco"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-6 flex justify-center gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition-all hover:border-gold hover:text-gold"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold">
                  About
                </p>
                <h1 className="mt-2 font-heading text-4xl text-text-primary md:text-5xl">
                  Lorenzo De Francesco
                </h1>
                <p className="mt-2 text-lg text-text-muted">
                  Chief Technology Officer at Azimut Marketplace
                </p>

                <div className="mt-8 space-y-4 leading-relaxed text-text-secondary">
                  <p>
                    I am a CTO with a clear mission: transform IT from a cost
                    center into a strategic asset. At Azimut Marketplace, I
                    reduced infrastructure costs by over 70% while building a
                    robust, scalable architecture that serves multiple countries.
                  </p>
                  <p>
                    My approach combines technical depth with business acumen. I
                    don&apos;t just write code &mdash; I build teams, define
                    processes, and create a culture where engineering excellence
                    drives business results.
                  </p>
                  <p>
                    Before stepping into management, I spent years as a hands-on
                    developer and architect, giving me the foundation to make
                    informed decisions and mentor the next generation of tech
                    leaders.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </PageWrapper>
      </section>

      {/* Key Numbers */}
      <div className="border-t border-border bg-surface/50 py-16">
        <PageWrapper>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {highlights.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.05}>
                <div className="text-center">
                  <p className="font-heading text-3xl text-gold md:text-4xl">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-wider text-text-muted">
                    {item.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </PageWrapper>
      </div>

      {/* Leadership Philosophy */}
      <PageWrapper className="py-24">
        <ScrollReveal>
          <SectionTitle>Leadership Approach</SectionTitle>
        </ScrollReveal>
        <div className="grid gap-8 md:grid-cols-2">
          <ScrollReveal>
            <div className="rounded-lg border border-border bg-surface p-8">
              <h3 className="font-heading text-xl text-text-primary">
                Building IT Culture
              </h3>
              <p className="mt-4 leading-relaxed text-text-secondary">
                When I joined Azimut Marketplace, there was no established IT
                culture. I built it from scratch &mdash; introducing agile
                methodologies, code reviews, automated testing, and CI/CD
                pipelines. Today, the team operates autonomously with two
                technology leaders I personally mentored.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="rounded-lg border border-border bg-surface p-8">
              <h3 className="font-heading text-xl text-text-primary">
                Cost Optimization
              </h3>
              <p className="mt-4 leading-relaxed text-text-secondary">
                I reduced recurring IT costs by over &euro;700k through vendor
                renegotiations, cloud architecture optimization, and strategic
                insourcing. Every technical decision I make weighs both
                engineering quality and business impact.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="rounded-lg border border-border bg-surface p-8">
              <h3 className="font-heading text-xl text-text-primary">
                Community & Speaking
              </h3>
              <p className="mt-4 leading-relaxed text-text-secondary">
                I actively share my experience through 40+ conference talks,
                panels, and podcasts. Topics range from IT governance and
                cybersecurity to cloud architecture and team leadership. I am
                also one of the organizers of the Google Developer Group
                Milano and Scientific Coordinator of the Master in Full Stack
                Development &amp; AI at{" "}
                <a
                  href="https://www.start2impact.it/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light"
                >
                  start2impact
                </a>
                . I believe in giving back to the community that shaped my
                career.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="rounded-lg border border-border bg-surface p-8">
              <h3 className="font-heading text-xl text-text-primary">
                Platform Thinking
              </h3>
              <p className="mt-4 leading-relaxed text-text-secondary">
                I led the transformation of Azimut Marketplace from a
                spreadsheet-driven operation to a multi-country platform company.
                My focus is always on governance, reusability, and building
                systems that scale across teams and geographies.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </PageWrapper>

      {/* CTA to Tech Skills */}
      <div className="border-t border-border bg-surface/50 py-20">
        <PageWrapper>
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-heading text-3xl text-text-primary md:text-4xl">
                Want to see the technical side?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-text-secondary">
                Beyond management, I have deep hands-on experience across the
                full stack &mdash; from React frontends to Java microservices
                and cloud infrastructure.
              </p>
              <Link
                href="/about/tech"
                className="mt-8 inline-flex items-center gap-3 rounded-lg bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-wider text-navy no-underline transition-colors hover:bg-gold-light"
              >
                <Code size={20} />
                Scopri le mie skills tech
              </Link>
            </div>
          </ScrollReveal>
        </PageWrapper>
      </div>

      {/* Career Timeline */}
      <PageWrapper className="py-24">
        <ScrollReveal>
          <SectionTitle>Experience</SectionTitle>
        </ScrollReveal>
        <ExperienceTimeline events={career} />
      </PageWrapper>

      <ContactSection />
    </>
  )
}
