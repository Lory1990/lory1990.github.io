import type { TimelineEvent } from "@/types"
import ScrollReveal from "@/components/ui/ScrollReveal"

export default function ExperienceTimeline({
  events,
}: {
  events: TimelineEvent[]
}) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border md:left-1/2" />

      <div className="space-y-12">
        {events.map((event, i) => {
          const isLeft = i % 2 === 0
          return (
            <ScrollReveal key={`${event.company}-${event.from}`} delay={i * 0.05}>
              <div className="relative pl-8 md:pl-0">
                {/* Dot */}
                <div
                  className={`absolute left-0 top-1 h-2.5 w-2.5 -translate-x-1 rounded-full border-2 border-gold md:left-1/2 md:-translate-x-1/2 ${
                    event.highlight ? "bg-gold" : "bg-background"
                  }`}
                />

                <div
                  className={`md:w-[calc(50%-2rem)] ${
                    isLeft ? "md:mr-auto md:pr-0" : "md:ml-auto md:pl-0"
                  }`}
                >
                  <div
                    className={`rounded-lg border bg-surface p-6 transition-colors ${
                      event.highlight
                        ? "border-gold/40 shadow-[0_0_0_1px_rgba(212,88,15,0.08)]"
                        : "border-border"
                    }`}
                  >
                    <div className="mb-1 flex items-center gap-3">
                      <span className="text-xs font-medium uppercase tracking-wider text-gold">
                        {event.from} &mdash; {event.to}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg text-text-primary">
                      {event.position}
                    </h3>
                    <p className="text-sm text-text-muted">
                      {event.company} &middot; {event.location}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                      {event.description}
                    </p>
                    {event.tags && event.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {event.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border-subtle bg-background px-2.5 py-0.5 text-xs font-medium text-text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )
        })}
      </div>
    </div>
  )
}
