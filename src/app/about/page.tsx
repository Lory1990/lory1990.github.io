import type { Metadata } from "next"
import Image from "next/image"
import { Github, Linkedin, Facebook } from "lucide-react"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionTitle from "@/components/ui/SectionTitle"
import TechStackGrid from "@/components/sections/TechStackGrid"
import ExperienceTimeline from "@/components/sections/ExperienceTimeline"
import ContactSection from "@/components/sections/ContactSection"
import ScrollReveal from "@/components/ui/ScrollReveal"
import { siteConfig } from "@/data/site"
import techStack from "@/data/tech-stack"
import career from "@/data/career"

export const metadata: Metadata = {
  title: "About",
  description:
    "CTO with 10+ years of experience in fintech, cloud architecture, and enterprise software development.",
}

const socialLinks = [
  { icon: Github, href: siteConfig.social.github, label: "GitHub" },
  { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
]

export default function AboutPage() {
  return (
    <>
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

                <div className="mt-8 space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    I am a highly skilled and passionate CTO with more than 10
                    years of experience in fintech software development. I am
                    currently working at Azimut Marketplace to create the best
                    marketplace for entrepreneurs 2.0.
                  </p>
                  <p>
                    I have developed a broad knowledge of cloud technologies and
                    know how to successfully implement them in enterprise
                    applications made of microservices. In addition to my work
                    commitment, I am also an active member of the IT community,
                    constantly participating in events and conferences to stay
                    up-to-date and share my knowledge with others.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </PageWrapper>
      </section>

      {/* Tech Stack by Category */}
      <div className="border-t border-border bg-surface/50 py-24">
        <PageWrapper>
          <ScrollReveal>
            <SectionTitle>Frontend</SectionTitle>
          </ScrollReveal>
          <TechStackGrid items={techStack} category="FE" />

          <ScrollReveal>
            <SectionTitle className="mt-20">Backend</SectionTitle>
          </ScrollReveal>
          <TechStackGrid items={techStack} category="BE" />

          <ScrollReveal>
            <SectionTitle className="mt-20">Cloud</SectionTitle>
          </ScrollReveal>
          <TechStackGrid items={techStack} category="CLOUD" />
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
