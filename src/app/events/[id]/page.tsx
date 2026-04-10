import type { Metadata } from "next"
import Image from "next/image"
import { Calendar, MapPin, Globe, ExternalLink } from "lucide-react"
import { format, parseISO } from "date-fns"
import PageWrapper from "@/components/layout/PageWrapper"
import Badge from "@/components/ui/Badge"
import ArticleRenderer from "@/components/content/ArticleRenderer"
import ContactSection from "@/components/sections/ContactSection"
import ScrollReveal from "@/components/ui/ScrollReveal"
import JsonLd from "@/components/seo/JsonLd"
import { siteConfig } from "@/data/site"
import events from "@/data/events"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return events.map((e) => ({ id: e.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const event = events.find((e) => e.slug === id)
  if (!event) return {}
  return {
    title: event.title,
    description:
      event.shortDescription || event.description?.slice(0, 160),
    alternates: {
      canonical: `${siteConfig.url}/events/${id}`,
    },
    openGraph: {
      title: `${event.title} | ${siteConfig.name}`,
      description: event.shortDescription || event.description?.slice(0, 160),
      url: `${siteConfig.url}/events/${id}`,
      images: [event.image],
    },
  }
}

function VideoEmbed({ url }: { url: string }) {
  let embedUrl = url
  if (url.includes("youtube.com/watch")) {
    const id = new URL(url).searchParams.get("v")
    embedUrl = `https://www.youtube.com/embed/${id}`
  } else if (url.includes("youtu.be/")) {
    const id = url.split("youtu.be/")[1]?.split("?")[0]
    embedUrl = `https://www.youtube.com/embed/${id}`
  } else if (url.includes("youtube.com/live/")) {
    const parts = url.split("youtube.com/live/")[1]
    const id = parts?.split("?")[0]
    const tParam = url.match(/[?&]t=(\d+)/)?.[1]
    embedUrl = `https://www.youtube.com/embed/${id}${tParam ? `?start=${tParam}` : ""}`
  }

  return (
    <div className="relative aspect-video overflow-hidden rounded-lg">
      <iframe
        src={embedUrl}
        title="Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  )
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const event = events.find((e) => e.slug === id)
  if (!event) notFound()

  const formattedDate = event.date
    ? format(parseISO(event.date), "MMMM d, yyyy")
    : null

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Event",
          name: event.title,
          description:
            event.shortDescription || event.description?.slice(0, 160) || event.title,
          ...(event.date && { startDate: event.date }),
          eventAttendanceMode: event.isOnline
            ? "https://schema.org/OnlineEventAttendanceMode"
            : "https://schema.org/OfflineEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          image: `${siteConfig.url}${event.image}`,
          url: `${siteConfig.url}/events/${event.slug}`,
          ...(event.venue && {
            location: event.isOnline
              ? {
                  "@type": "VirtualLocation",
                  name: event.venue,
                  ...(event.link && { url: event.link }),
                }
              : {
                  "@type": "Place",
                  name: event.venue,
                },
          }),
          performer: {
            "@type": "Person",
            name: siteConfig.name,
            url: siteConfig.url,
          },
          organizer: event.venue
            ? {
                "@type": "Organization",
                name: event.venue,
              }
            : undefined,
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
            {
              "@type": "ListItem",
              position: 3,
              name: event.title,
              item: `${siteConfig.url}/events/${event.slug}`,
            },
          ],
        }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-32">
        {event.cover && (
          <>
            <Image
              src={event.cover}
              alt={event.title}
              fill
              className="object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-background" />
          </>
        )}
        {!event.cover && (
          <div className="absolute inset-0 bg-gradient-to-b from-navy-light to-background" />
        )}

        <PageWrapper className="relative z-10">
          <ScrollReveal>
            <div className="mb-4 flex flex-wrap gap-2">
              <Badge>{event.isOnline ? "Online" : "In Person"}</Badge>
            </div>
            <h1 className="font-heading text-3xl text-text-primary md:text-5xl">
              {event.title}
            </h1>
            {event.subtitle && (
              <p className="mt-3 text-lg text-text-secondary">
                {event.subtitle}
              </p>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-6 text-text-muted">
              {formattedDate && (
                <span className="flex items-center gap-2">
                  <Calendar size={16} className="text-gold" />
                  {formattedDate}
                </span>
              )}
              {event.venue && (
                <span className="flex items-center gap-2">
                  <MapPin size={16} className="text-gold" />
                  {event.venue}
                </span>
              )}
              <span className="flex items-center gap-2">
                <Globe size={16} className="text-gold" />
                {event.isOnline ? "Online" : "In Person"}
              </span>
            </div>
          </ScrollReveal>
        </PageWrapper>
      </section>

      <PageWrapper className="pb-24">
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="flex-1 space-y-8">
            {/* Video */}
            {event.video && (
              <ScrollReveal>
                <VideoEmbed url={event.video} />
              </ScrollReveal>
            )}

            {/* Description */}
            {event.description && (
              <ScrollReveal>
                <p className="text-lg leading-relaxed text-text-secondary">
                  {event.description}
                </p>
              </ScrollReveal>
            )}

            {/* External link */}
            {event.link && (
              <ScrollReveal>
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-gold px-5 py-2.5 text-sm font-medium text-gold no-underline transition-all hover:bg-gold hover:text-navy"
                >
                  <ExternalLink size={16} />
                  Visit Event Page
                </a>
              </ScrollReveal>
            )}
          </div>

          {/* Sidebar with event image */}
          <ScrollReveal delay={0.1}>
            <div className="relative h-64 w-full shrink-0 overflow-hidden rounded-lg border border-border md:h-auto md:w-72">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </PageWrapper>

      {/* Article blocks */}
      {event.article && event.article.length > 0 && (
        <div className="pb-24">
          <ArticleRenderer articles={event.article} />
        </div>
      )}

      <ContactSection />
    </>
  )
}
