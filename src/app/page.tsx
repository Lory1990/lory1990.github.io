import Image from "next/image"
import Link from "next/link"
import {
  TrendingDown,
  Users,
  Shield,
  Mic,
  Code,
  ExternalLink,
  Zap,
  Building2,
  Landmark,
  ArrowRight,
  Layers,
  ShieldCheck,
} from "lucide-react"
import HeroSection from "@/components/sections/HeroSection"
import ContactSection from "@/components/sections/ContactSection"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionTitle from "@/components/ui/SectionTitle"
import ScrollReveal from "@/components/ui/ScrollReveal"
import JsonLd from "@/components/seo/JsonLd"
import { GithubIcon } from "@/components/icons/SocialIcons"
import { siteConfig } from "@/data/site"
import { IMAGE_ID, PERSON_ID, WEBSITE_ID } from "@/data/person"
import events from "@/data/events"

const recentTalks = events
  .filter((e) => e.venue && e.date)
  .slice(0, 6)

const openSourceProjects = [
  {
    name: "MFE Orchestrator",
    tagline: "Like Kubernetes... but for frontend",
    description:
      "A centralized multi-cloud platform for managing and orchestrating microfrontends across multiple environments.",
    website: "https://mfe-orchestrator.dev/",
    github: "https://github.com/mfe-orchestrator",
  },
  {
    name: "Swagger Aggregator",
    tagline: "Auto-discover and merge all your Swagger docs in Kubernetes",
    description:
      "A Kubernetes-native service that auto-discovers Ingress resources and aggregates their Swagger API definitions into a unified interface.",
    github: "https://github.com/Lory1990/swagger-aggregator",
  },
]

const managerialQualities = [
  {
    icon: TrendingDown,
    title: "Cost Optimization",
    value: "-700k",
    description:
      "Reduced recurring IT infrastructure costs by over €700k through vendor renegotiations, cloud optimization, and strategic insourcing.",
  },
  {
    icon: Users,
    title: "Team Building",
    description:
      "Built an IT department from scratch and mentored two developers into technology leaders, creating a self-sustaining engineering culture.",
  },
  {
    icon: Shield,
    title: "IT Governance",
    value: "100%",
    description:
      "Established complete IT governance with security policies, GDPR compliance, SSO integration, and automated monitoring across all services.",
  },
  {
    icon: Layers,
    title: "Platform Transformation",
    value: "Excel → SaaS",
    description:
      "Turned a spreadsheet-driven operation into a robust, scalable SaaS platform — with proper cloud architecture, CI/CD, and observability across all services.",
  },
]

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "70%", label: "IT Costs Reduced" },
  { value: "40+", label: "Talks & Events" },
  { value: "15+", label: "Projects Delivered" },
]

export default function HomePage() {
  return (
    <>
      {/*
        The Person node itself lives in the root layout graph; the home page
        only declares that this page is *about* that person.
      */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${siteConfig.url}/#webpage`,
          url: siteConfig.url,
          name: `${siteConfig.name} | ${siteConfig.title}`,
          description: siteConfig.description,
          inLanguage: "en",
          isPartOf: { "@id": WEBSITE_ID },
          primaryImageOfPage: { "@id": IMAGE_ID },
          about: { "@id": PERSON_ID },
          mainEntity: { "@id": PERSON_ID },
        }}
      />
      <HeroSection />

      {/* Stats bar */}
      <div className="border-y border-border bg-surface/50 py-12">
        <PageWrapper>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.05}>
                <div className="text-center">
                  <p className="font-heading text-3xl text-gold md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm uppercase tracking-wider text-text-muted">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </PageWrapper>
      </div>

      {/* About snippet */}
      <PageWrapper className="py-24">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="relative h-72 w-72 shrink-0 overflow-hidden rounded-full border-2 border-border">
              <Image
                src="/img/lorenzo-de-francesco.jpeg"
                alt="Lorenzo De Francesco"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <SectionTitle>About Me</SectionTitle>
              <p className="max-w-xl text-lg leading-relaxed text-text-secondary">
                I am Lorenzo, a CTO who transforms IT from a cost center into a
                strategic asset. With more than 10 years in fintech, I combine
                deep technical expertise with business acumen to build teams,
                optimize costs, and deliver enterprise platforms at scale.
              </p>
              <p className="mt-4 max-w-xl leading-relaxed text-text-secondary">
                Today I lead the technology development of the bank of the
                future at TNB Project (Gruppo Azimut), and I&apos;m CTO at{" "}
                <a
                  href="https://azimutmarketplace.it"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gold hover:text-gold-light"
                >
                  Azimut Marketplace
                </a>
                , where I rebuilt the entire IT department, reduced costs by
                over €700k, and turned a spreadsheet-driven operation into a
                scalable, cloud-native platform.
                Earlier, within the Sella banking group I coordinated the
                development of SME Banking, and at Costa Crociere I built
                mission-critical software deployed directly on board cruise
                ships — experience that shapes how I lead engineering today.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-block border-b border-gold pb-0.5 text-sm font-medium uppercase tracking-wider text-gold no-underline transition-colors hover:text-gold-light"
              >
                Learn More
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </PageWrapper>

      {/* Signature Roles */}
      <div className="border-t border-border bg-surface/50 py-24">
        <PageWrapper>
          <ScrollReveal>
            <SectionTitle>Where I&apos;ve Made an Impact</SectionTitle>
          </ScrollReveal>

          {/* Featured current role — TNB Project */}
          <ScrollReveal>
            <div className="mb-6 overflow-hidden rounded-lg border border-gold/50 bg-gradient-to-br from-surface to-surface-elevated p-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-heading text-xl text-text-primary">
                        TNB Project
                      </h3>
                      <span className="rounded-full bg-gold px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-navy">
                        Current
                      </span>
                    </div>
                    <p className="text-sm text-text-muted">
                      Gruppo Azimut · 2025 — Today
                    </p>
                    <p className="mt-4 max-w-2xl text-lg font-heading leading-snug text-text-primary">
                      Building the bank of the future from scratch — where the
                      financial advisor comes first.
                    </p>
                    <p className="mt-3 max-w-2xl leading-relaxed text-text-secondary">
                      I lead the technology and architecture end to end, with a
                      relentless focus on cyber security, data governance, and
                      the integrity of data.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Digital Banking", "Cyber Security", "Data Governance", "Data Integrity"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2">
            <ScrollReveal>
              <div className="flex h-full flex-col rounded-lg border border-gold/40 bg-surface p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                    <Building2 size={22} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-text-primary">
                      Azimut Marketplace
                    </h3>
                    <p className="text-sm text-text-muted">
                      Chief Technology Officer · 2022 — Today
                    </p>
                  </div>
                </div>
                <p className="mt-5 leading-relaxed text-text-secondary">
                  I built the IT department from scratch, cut over €700k of
                  recurring infrastructure costs, and turned a spreadsheet-driven
                  operation into a scalable fintech platform — establishing
                  governance, security, and an engineering culture that runs
                  autonomously.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["−700k Costs", "Cloud Architecture", "IT Governance", "Team Building"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="flex h-full flex-col rounded-lg border border-gold/40 bg-surface p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                    <Landmark size={22} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-text-primary">
                      Fabrick · Banca Sella
                    </h3>
                    <p className="text-sm text-text-muted">
                      Architect &amp; Team Leader · Sella Group
                    </p>
                  </div>
                </div>
                <p className="mt-5 leading-relaxed text-text-secondary">
                  Within the Sella banking group, I coordinated the development
                  of SME Banking — leading a team of engineers, defining the
                  React architecture, and building the shared component
                  libraries behind the group&apos;s banking products.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["SME Banking", "React Architecture", "Design System", "Mentoring"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <div className="mt-10 text-center">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border-b border-gold pb-0.5 text-sm font-medium uppercase tracking-wider text-gold no-underline transition-colors hover:text-gold-light"
              >
                Full career timeline
                <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </PageWrapper>
      </div>

      {/* Managerial Qualities */}
      <PageWrapper className="py-24">
          <ScrollReveal>
            <SectionTitle>What I Bring to the Table</SectionTitle>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2">
            {managerialQualities.map((quality, i) => (
              <ScrollReveal key={quality.title} delay={i * 0.08}>
                <div className="group rounded-lg border border-border bg-surface p-8 transition-all hover:border-gold/30">
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-background text-gold transition-colors group-hover:border-gold/30">
                      <quality.icon size={22} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="font-heading text-lg text-text-primary">
                          {quality.title}
                        </h3>
                        {"value" in quality && quality.value && (
                          <span className="rounded-sm bg-gold/10 px-2 py-0.5 text-xs font-semibold text-gold">
                            {quality.value}
                          </span>
                        )}
                      </div>
                      <p className="mt-3 leading-relaxed text-text-secondary">
                        {quality.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Tech CTA */}
          <ScrollReveal>
            <Link
              href="/about/tech"
              className="group mt-12 flex flex-col items-start gap-4 rounded-lg border border-border bg-surface p-6 no-underline transition-all hover:border-gold/30 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <Code size={22} />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-text-primary">
                    Full Stack Expertise
                  </h3>
                  <p className="mt-1 text-sm text-text-muted">
                    React, Java, Node.js, Kubernetes, AWS, Azure &mdash; I never
                    stopped being hands-on.
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-gold">
                Tech skills
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </ScrollReveal>
      </PageWrapper>

      {/* Speaking & Thought Leadership */}
      <div className="border-t border-border bg-surface/50 py-24">
        <PageWrapper>
        <ScrollReveal>
          <SectionTitle>Speaking &amp; Thought Leadership</SectionTitle>
        </ScrollReveal>
        <ScrollReveal>
          <p className="mb-10 max-w-2xl leading-relaxed text-text-secondary">
            I am a regular speaker at conferences, meetups, panels, and
            podcasts across Italy — with 40+ talks on IT governance, cloud
            architecture, cybersecurity, microfrontends, and the journey from
            developer to technology leader.
          </p>
        </ScrollReveal>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {recentTalks.map((talk, i) => (
            <ScrollReveal key={talk.slug} delay={i * 0.05}>
              <Link
                href={`/events/${talk.slug}`}
                className="group flex h-full flex-col rounded-lg border border-border bg-surface p-6 no-underline transition-all hover:border-gold/30"
              >
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-gold">
                  <Mic size={13} />
                  {talk.venue}
                </div>
                <h3 className="mt-3 font-heading text-base leading-snug text-text-primary">
                  {talk.title}
                </h3>
                {talk.date && (
                  <p className="mt-auto pt-4 text-xs text-text-muted">
                    {new Date(talk.date).getFullYear()}
                  </p>
                )}
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <div className="mt-10 text-center">
            <Link
              href="/events"
              className="inline-block rounded-lg border border-gold px-8 py-3 text-sm font-medium uppercase tracking-wider text-gold no-underline transition-all hover:bg-gold hover:text-navy"
            >
              View All Talks &amp; Events
            </Link>
          </div>
        </ScrollReveal>
        </PageWrapper>
      </div>

      {/* Open Source */}
      <PageWrapper className="py-24">
        <ScrollReveal>
          <SectionTitle>Open Source</SectionTitle>
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-2">
          {openSourceProjects.map((project) => (
            <ScrollReveal key={project.name}>
              <div className="group rounded-lg border border-border bg-surface p-8 transition-all hover:border-gold/30">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-background text-gold transition-colors group-hover:border-gold/30">
                    <Zap size={22} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-text-primary">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-sm italic text-text-muted">
                      {project.tagline}
                    </p>
                  </div>
                </div>
                <p className="mt-4 leading-relaxed text-text-secondary">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {"website" in project && project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-navy no-underline transition-colors hover:bg-gold-light"
                    >
                      <ExternalLink size={14} />
                      Website
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-text-secondary no-underline transition-all hover:border-gold hover:text-gold"
                  >
                    <GithubIcon size={14} />
                    GitHub
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-block rounded-lg border border-gold px-8 py-3 text-sm font-medium uppercase tracking-wider text-gold no-underline transition-all hover:bg-gold hover:text-navy"
            >
              View All Projects
            </Link>
          </div>
        </ScrollReveal>
      </PageWrapper>

      {/* Community */}
      <div className="border-t border-border bg-surface/50 py-24">
        <PageWrapper>
          <ScrollReveal>
            <SectionTitle>Community &amp; Education</SectionTitle>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2">
            <ScrollReveal>
              <a
                href="https://gdg.community.dev/gdg-milano/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-lg border border-border bg-surface no-underline transition-all hover:border-gold/30"
              >
                <div className="flex items-center justify-center rounded-t-lg bg-white px-8 py-6">
                  <Image
                    src="/img/gdg-logo.svg"
                    alt="Google Developer Group"
                    width={220}
                    height={48}
                    className="h-12 w-auto"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="flex items-center gap-3">
                    <h3 className="font-heading text-xl text-text-primary">
                      GDG Milano Organizer
                    </h3>
                    <span className="rounded-sm bg-gold/10 px-2 py-0.5 text-xs font-semibold text-gold">
                      Organizer
                    </span>
                  </div>
                  <p className="mt-4 leading-relaxed text-text-secondary">
                    I help organize events, meetups, and workshops for the
                    Milano developer community, connecting engineers and
                    fostering knowledge sharing across the Google ecosystem.
                  </p>
                </div>
              </a>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <a
                href="https://www.start2impact.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-lg border border-border bg-surface no-underline transition-all hover:border-gold/30"
              >
                <div className="flex items-center justify-center rounded-t-lg bg-white px-8 py-6">
                  <Image
                    src="/img/start2impact-logo.png"
                    alt="start2impact"
                    width={200}
                    height={48}
                    className="h-12 w-auto"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="flex items-center gap-3">
                    <h3 className="font-heading text-xl text-text-primary">
                      Scientific Coordinator
                    </h3>
                    <span className="rounded-sm bg-gold/10 px-2 py-0.5 text-xs font-semibold text-gold">
                      Education
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-text-muted">
                    Master in Full Stack Development &amp; AI
                  </p>
                  <p className="mt-4 leading-relaxed text-text-secondary">
                    I design the curriculum and oversee the academic quality
                    of the Master program, shaping the next generation of
                    full stack developers with a focus on AI integration and
                    real-world project experience.
                  </p>
                </div>
              </a>
            </ScrollReveal>
          </div>
        </PageWrapper>
      </div>

      <ContactSection />
    </>
  )
}
