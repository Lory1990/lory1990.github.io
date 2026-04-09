import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, Globe } from "lucide-react"
import { format, parseISO } from "date-fns"
import type { IEvent } from "@/types"

export default function EventCard({ event }: { event: IEvent }) {
  const formattedDate = event.date
    ? format(parseISO(event.date), "MMM d, yyyy")
    : null

  return (
    <Link
      href={`/events/${event.slug}`}
      className="group flex gap-5 border-b border-border py-6 no-underline transition-colors last:border-0 hover:bg-surface/50"
    >
      <div className="relative hidden h-20 w-20 shrink-0 overflow-hidden rounded-lg sm:block">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-heading text-lg text-text-primary transition-colors group-hover:text-gold">
          {event.title}
        </h3>
        <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-text-muted">
          {formattedDate && (
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {formattedDate}
            </span>
          )}
          {event.venue && (
            <span className="flex items-center gap-1.5">
              <MapPin size={14} />
              {event.venue}
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <Globe size={14} />
            {event.isOnline ? "Online" : "In Person"}
          </span>
        </div>
        {(event.shortDescription || event.description) && (
          <p className="mt-2 line-clamp-1 text-sm text-text-secondary">
            {event.shortDescription || event.description}
          </p>
        )}
      </div>
    </Link>
  )
}
