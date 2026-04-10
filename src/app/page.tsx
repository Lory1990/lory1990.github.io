import Image from "next/image"
import Link from "next/link"
import {
  TrendingDown,
  Users,
  Shield,
  Globe,
  Mic,
  Code,
} from "lucide-react"
import HeroSection from "@/components/sections/HeroSection"
import ContactSection from "@/components/sections/ContactSection"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionTitle from "@/components/ui/SectionTitle"
import ProjectCard from "@/components/ui/ProjectCard"
import ScrollReveal from "@/components/ui/ScrollReveal"
import JsonLd from "@/components/seo/JsonLd"
import { siteConfig } from "@/data/site"
import projects from "@/data/projects"

const highlightedProjects = projects.filter((p) => p.highlight)

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
    value: "2 Leaders",
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
    icon: Globe,
    title: "Multi-Country Platform",
    value: "5+ Countries",
    description:
      "Architected and scaled a fintech platform serving multiple countries, transforming a spreadsheet-driven operation into an enterprise ecosystem.",
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
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: siteConfig.name,
          url: siteConfig.url,
          image: `${siteConfig.url}${siteConfig.image}`,
          jobTitle: siteConfig.title,
          worksFor: {
            "@type": "Organization",
            name: siteConfig.company,
          },
          description: siteConfig.description,
          knowsAbout: [
            "Fintech",
            "Cloud Architecture",
            "IT Governance",
            "Software Development",
            "React",
            "Java",
            "Node.js",
            "Kubernetes",
            "Azure",
            "AWS",
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
          ],
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
                Currently leading technology at{" "}
                <a
                  href="https://azimutmarketplace.it"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gold hover:text-gold-light"
                >
                  Azimut Marketplace
                </a>
                , where I rebuilt the entire IT department, reduced costs by
                over €700k, and scaled the platform across multiple countries.
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

      {/* Managerial Qualities */}
      <div className="border-t border-border bg-surface/50 py-24">
        <PageWrapper>
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
                        <span className="rounded-sm bg-gold/10 px-2 py-0.5 text-xs font-semibold text-gold">
                          {quality.value}
                        </span>
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

          {/* Speaking & Tech CTAs */}
          <ScrollReveal>
            <div className="mt-16 grid gap-6 md:grid-cols-2">
              <Link
                href="/events"
                className="flex items-center gap-4 rounded-lg border border-border bg-surface p-6 no-underline transition-all hover:border-gold/30"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <Mic size={22} />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-text-primary">
                    40+ Speaking Events
                  </h3>
                  <p className="mt-1 text-sm text-text-muted">
                    Conferences, panels, podcasts on IT leadership &amp; tech
                  </p>
                </div>
              </Link>
              <Link
                href="/about/tech"
                className="flex items-center gap-4 rounded-lg border border-border bg-surface p-6 no-underline transition-all hover:border-gold/30"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <Code size={22} />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-text-primary">
                    Full Stack Expertise
                  </h3>
                  <p className="mt-1 text-sm text-text-muted">
                    React, Java, Node.js, Kubernetes, AWS, Azure
                  </p>
                </div>
              </Link>
            </div>
          </ScrollReveal>
        </PageWrapper>
      </div>

      {/* Selected Projects */}
      <PageWrapper className="py-24">
        <ScrollReveal>
          <SectionTitle>Selected Work</SectionTitle>
        </ScrollReveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlightedProjects.map((project) => (
            <ScrollReveal key={project.slug}>
              <ProjectCard project={project} />
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
                    height={42}
                    className="h-10 w-auto"
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
