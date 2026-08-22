import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Code } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionTitle from "@/components/ui/SectionTitle"
import ExperienceTimeline from "@/components/sections/ExperienceTimeline"
import ContactSection from "@/components/sections/ContactSection"
import ScrollReveal from "@/components/ui/ScrollReveal"
import JsonLd from "@/components/seo/JsonLd"
import { siteConfig } from "@/data/site"
import { IMAGE_ID, PERSON_ID, WEBSITE_ID } from "@/data/person"
import career from "@/data/career"

const aboutDescription =
  "CTO with 10+ years of experience leading technology teams, reducing IT costs, and building scalable fintech platforms."

export const metadata: Metadata = {
  title: "About",
  description: aboutDescription,
  keywords: [
    "Lorenzo De Francesco",
    "CTO",
    "Chief Technology Officer",
    "About Lorenzo De Francesco",
    "fintech leader",
    "tech leadership",
    "IT governance",
    "cloud architecture",
    "team building",
    "Azimut Marketplace CTO",
    "engineering manager",
    "IT cost optimization",
  ],
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: `About | ${siteConfig.name}`,
    description: aboutDescription,
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: siteConfig.image,
        width: 800,
        height: 800,
        alt: `${siteConfig.name} - ${siteConfig.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `About | ${siteConfig.name}`,
    description: aboutDescription,
    images: [siteConfig.image],
  },
}

const socialLinks = [
  { icon: GithubIcon, href: siteConfig.social.github, label: "GitHub" },
  { icon: LinkedinIcon, href: siteConfig.social.linkedin, label: "LinkedIn" },
]

const highlights = [
  { value: "10+", label: "Years of Experience" },
  { value: "700k", label: "IT Costs Reduced" },
  { value: "40+", label: "Talks & Events" },
  { value: "2", label: "Tech Leaders Mentored" },
]

export default function AboutPage() {
  return (
    <>
      {/*
        /about is the canonical profile page for the Person node declared in
        the root layout graph; it references it by @id instead of restating it.
      */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "@id": `${siteConfig.url}/about#webpage`,
          url: `${siteConfig.url}/about`,
          name: `About | ${siteConfig.name}`,
          description: aboutDescription,
          inLanguage: "en",
          isPartOf: { "@id": WEBSITE_ID },
          primaryImageOfPage: { "@id": IMAGE_ID },
          about: { "@id": PERSON_ID },
          mainEntity: { "@id": PERSON_ID },
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
      {/* Hero — photo + name */}
      <section className="relative overflow-hidden pb-10 pt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light/40 to-background" />
        <PageWrapper className="relative z-10">
          <ScrollReveal>
            <div className="flex flex-col items-center gap-8 md:flex-row md:items-center">
              <div className="relative h-40 w-40 shrink-0 overflow-hidden">
                <Image
                  src="/img/lorenzo-de-francesco.jpeg"
                  alt="Lorenzo De Francesco"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold">
                  About
                </p>
                <h1 className="mt-2 font-heading text-4xl text-text-primary md:text-5xl">
                  Lorenzo De Francesco
                </h1>
                <p className="mt-2 text-lg text-text-secondary">
                  Leading the technology development at TNB Project (Gruppo
                  Azimut) &amp; CTO at Azimut Marketplace &mdash; 10+ years in
                  Fintech
                </p>
                <div className="mt-4 flex gap-3">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary transition-all hover:border-gold hover:text-gold"
                      aria-label={label}
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </PageWrapper>
      </section>

      {/* Bio */}
      <PageWrapper className="py-8">
        <ScrollReveal>
          <div className="max-w-3xl space-y-4 leading-relaxed text-text-secondary">
            <p>
              I am a technology leader with a clear mission: transform IT from
              a cost center into a strategic asset. At TNB Project (Gruppo
              Azimut), I lead the technology development of the bank of the
              future, built from scratch &mdash; a model where the financial
              advisor comes first &mdash; with a relentless focus on cyber
              security, data governance, and data integrity.
            </p>
            <p>
              In parallel, as CTO at Azimut Marketplace, I reduced
              infrastructure costs by over 70% while building a robust,
              scalable, cloud-native architecture.
            </p>
            <p>
              My approach combines technical depth with business acumen. I
              don&apos;t just write code &mdash; I build teams, define
              processes, and create a culture where engineering excellence
              drives business results.
            </p>
            <p>
              Before stepping into the C-suite, I spent years as a hands-on
              developer and architect. Within the Sella banking group I
              coordinated the development of SME Banking, leading the team and
              the React architecture behind the group&apos;s banking products.
              Earlier, at Costa Crociere, I built mission-critical, real-time
              software and the CI/CD pipelines to deploy it directly on board
              cruise ships &mdash; where downtime simply isn&apos;t an option.
            </p>
            <p>
              That foundation in high-stakes engineering is exactly what lets
              me make informed technical decisions today and mentor the next
              generation of tech leaders.
            </p>
          </div>
        </ScrollReveal>
      </PageWrapper>

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
                Security &amp; Data Governance
              </h3>
              <p className="mt-4 leading-relaxed text-text-secondary">
                When you build a bank, trust is the product. I design systems
                with security and data governance at the core &mdash; protecting
                customers, guaranteeing the integrity of data, and making sure
                every architectural decision holds up to the scrutiny a
                financial institution demands.
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
                Discover my tech skills
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
