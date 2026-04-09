import type { Metadata } from "next"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionTitle from "@/components/ui/SectionTitle"
import ProjectCard from "@/components/ui/ProjectCard"
import ContactSection from "@/components/sections/ContactSection"
import ScrollReveal from "@/components/ui/ScrollReveal"
import projects from "@/data/projects"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of fintech, insurtech, and enterprise projects built over 10+ years of software development.",
}

export default function ProjectsPage() {
  return (
    <>
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
              A selection of projects I have led and developed across fintech,
              insurtech, crypto, and enterprise software.
            </p>
          </ScrollReveal>
        </PageWrapper>
      </section>

      {/* Project Grid */}
      <PageWrapper className="pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ScrollReveal key={project.slug}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </PageWrapper>

      <ContactSection />
    </>
  )
}
