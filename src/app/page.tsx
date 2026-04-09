import Image from "next/image"
import Link from "next/link"
import HeroSection from "@/components/sections/HeroSection"
import ContactSection from "@/components/sections/ContactSection"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionTitle from "@/components/ui/SectionTitle"
import ProjectCard from "@/components/ui/ProjectCard"
import TechStackGrid from "@/components/sections/TechStackGrid"
import ScrollReveal from "@/components/ui/ScrollReveal"
import projects from "@/data/projects"
import techStack from "@/data/tech-stack"

const highlightedProjects = projects.filter((p) => p.highlight)
const highlightedStack = techStack.filter((t) => t.highlight)

export default function HomePage() {
  return (
    <>
      <HeroSection />

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
                I am Lorenzo, a highly skilled and passionate CTO with more than
                10 years of experience in fintech software development. I am
                currently working at{" "}
                <a
                  href="https://azimutmarketplace.it"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gold hover:text-gold-light"
                >
                  Azimut Marketplace
                </a>{" "}
                to create the best marketplace for entrepreneurs 2.0.
              </p>
              <p className="mt-4 max-w-xl leading-relaxed text-text-secondary">
                I have developed a broad knowledge of cloud technologies and
                know how to successfully implement them in enterprise
                applications made of microservices. I am also an active member
                of the IT community, constantly participating in events and
                conferences.
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

      {/* Selected Projects */}
      <div className="border-t border-border bg-surface/50 py-24">
        <PageWrapper>
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
      </div>

      {/* Tech Stack */}
      <PageWrapper className="py-24">
        <ScrollReveal>
          <SectionTitle>Technology Expertise</SectionTitle>
        </ScrollReveal>
        <TechStackGrid items={highlightedStack} />
        <ScrollReveal>
          <div className="mt-12 text-center">
            <Link
              href="/about"
              className="inline-block rounded-lg border border-border px-8 py-3 text-sm font-medium uppercase tracking-wider text-text-secondary no-underline transition-all hover:border-gold hover:text-gold"
            >
              Full Tech Profile
            </Link>
          </div>
        </ScrollReveal>
      </PageWrapper>

      <ContactSection />
    </>
  )
}
