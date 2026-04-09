import type { Metadata } from "next"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionTitle from "@/components/ui/SectionTitle"
import EventCard from "@/components/ui/EventCard"
import ContactSection from "@/components/sections/ContactSection"
import ScrollReveal from "@/components/ui/ScrollReveal"
import events from "@/data/events"

export const metadata: Metadata = {
  title: "Events",
  description:
    "Speaking engagements, conference talks, panels, and webinars on fintech, cloud, and IT management.",
}

const now = new Date()
const futureEvents = events.filter(
  (e) => e.date && new Date(e.date) >= now
)
const pastEvents = events.filter(
  (e) => !e.date || new Date(e.date) < now
)

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-light to-background" />
        <PageWrapper className="relative z-10">
          <ScrollReveal>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold">
              Speaking
            </p>
            <h1 className="mt-2 font-heading text-4xl text-text-primary md:text-5xl">
              Events &amp; Talks
            </h1>
            <p className="mt-4 max-w-xl text-text-secondary">
              Conference talks, panels, webinars, and podcasts on fintech,
              cloud architecture, IT management, and software engineering.
            </p>
          </ScrollReveal>
        </PageWrapper>
      </section>

      <PageWrapper className="pb-24">
        {/* Upcoming events */}
        {futureEvents.length > 0 && (
          <>
            <ScrollReveal>
              <SectionTitle>Upcoming</SectionTitle>
            </ScrollReveal>
            <div className="mb-16 rounded-lg border border-gold/20 bg-surface p-2">
              {futureEvents.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          </>
        )}

        {/* Past events */}
        <ScrollReveal>
          <SectionTitle>Past Events</SectionTitle>
        </ScrollReveal>
        <div>
          {pastEvents.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </PageWrapper>

      <ContactSection />
    </>
  )
}
