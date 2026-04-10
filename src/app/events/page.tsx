import type { Metadata } from "next"
import { Calendar, Mic, MapPin, Globe } from "lucide-react"
import PageWrapper from "@/components/layout/PageWrapper"
import SectionTitle from "@/components/ui/SectionTitle"
import EventCard from "@/components/ui/EventCard"
import ContactSection from "@/components/sections/ContactSection"
import ScrollReveal from "@/components/ui/ScrollReveal"
import JsonLd from "@/components/seo/JsonLd"
import { siteConfig } from "@/data/site"
import events from "@/data/events"

export const metadata: Metadata = {
  title: "Events",
  description:
    "Speaking engagements, conference talks, panels, and webinars on fintech, cloud, and IT management.",
  alternates: {
    canonical: `${siteConfig.url}/events`,
  },
}

// Group events by year
function groupByYear(
  items: typeof events
): { year: string; events: typeof events }[] {
  const groups: Record<string, typeof events> = {}

  for (const event of items) {
    const year = event.date ? new Date(event.date).getFullYear().toString() : "Other"
    if (!groups[year]) groups[year] = []
    groups[year].push(event)
  }

  return Object.entries(groups)
    .sort(([a], [b]) => (b === "Other" ? -1 : Number(b) - Number(a)))
    .map(([year, events]) => ({ year, events }))
}

// Compute stats
const totalEvents = events.length
const inPersonEvents = events.filter((e) => !e.isOnline).length
const onlineEvents = events.filter((e) => e.isOnline).length
const uniqueVenues = new Set(
  events.filter((e) => e.venue && e.venue !== "YouTube").map((e) => e.venue)
).size
const eventsWithVideo = events.filter((e) => e.video).length
const years = new Set(
  events.filter((e) => e.date).map((e) => new Date(e.date!).getFullYear())
)
const activeYears = years.size

const now = new Date()
const futureEvents = events.filter((e) => e.date && new Date(e.date) >= now)
const pastEvents = events.filter((e) => !e.date || new Date(e.date) < now)
const groupedPast = groupByYear(pastEvents)

const stats = [
  { icon: Mic, value: totalEvents.toString(), label: "Total Events" },
  { icon: MapPin, value: inPersonEvents.toString(), label: "In Person" },
  { icon: Globe, value: onlineEvents.toString(), label: "Online" },
  { icon: Calendar, value: activeYears.toString(), label: "Active Years" },
]

export default function EventsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Events & Talks",
          description:
            "Speaking engagements, conference talks, panels, and webinars on fintech, cloud, and IT management.",
          url: `${siteConfig.url}/events`,
          mainEntity: {
            "@type": "ItemList",
            itemListElement: events.map((event, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: event.title,
              url: `${siteConfig.url}/events/${event.slug}`,
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
              name: "Events",
              item: `${siteConfig.url}/events`,
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
              Speaking
            </p>
            <h1 className="mt-2 font-heading text-4xl text-hero-text md:text-5xl">
              Events &amp; Talks
            </h1>
            <p className="mt-4 max-w-xl text-hero-muted">
              Conference talks, panels, webinars, and podcasts on fintech,
              cloud architecture, IT management, and software engineering.
            </p>
          </ScrollReveal>
        </PageWrapper>
      </section>

      {/* Stats */}
      <div className="border-t border-border bg-surface/50 py-12">
        <PageWrapper>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.05}>
                <div className="flex flex-col items-center gap-2 text-center">
                  <stat.icon size={20} className="text-gold" />
                  <p className="font-heading text-3xl text-text-primary">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-text-muted">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Extra stats row */}
          <ScrollReveal>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-text-muted">
              <span>
                <strong className="text-text-secondary">{uniqueVenues}</strong>{" "}
                unique venues
              </span>
              <span className="text-border-subtle">|</span>
              <span>
                <strong className="text-text-secondary">{eventsWithVideo}</strong>{" "}
                with video recording
              </span>
              <span className="text-border-subtle">|</span>
              <span>
                <strong className="text-text-secondary">
                  {events.filter((e) => e.podcast).length}
                </strong>{" "}
                podcast episodes
              </span>
            </div>
          </ScrollReveal>
        </PageWrapper>
      </div>

      <PageWrapper className="py-24">
        {/* Upcoming events */}
        {futureEvents.length > 0 && (
          <>
            <ScrollReveal>
              <SectionTitle>Upcoming</SectionTitle>
            </ScrollReveal>
            <div className="mb-20 rounded-lg border border-gold/20 bg-surface p-2">
              {futureEvents.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          </>
        )}

        {/* Past events grouped by year */}
        {groupedPast.map((group) => (
          <div key={group.year} className="mb-16 last:mb-0">
            <ScrollReveal>
              <div className="mb-6 flex items-center gap-4">
                <h2 className="font-heading text-2xl text-text-primary">
                  {group.year}
                </h2>
                <span className="rounded-sm bg-surface-elevated px-2.5 py-1 text-xs font-medium text-text-muted">
                  {group.events.length} event{group.events.length !== 1 ? "s" : ""}
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>
            </ScrollReveal>
            <div>
              {group.events.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          </div>
        ))}
      </PageWrapper>

      <ContactSection />
    </>
  )
}
