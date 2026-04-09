import type { ITechStack } from "@/types"
import ScrollReveal from "@/components/ui/ScrollReveal"

function TechItem({ item, index }: { item: ITechStack; index: number }) {
  return (
    <ScrollReveal delay={index * 0.05}>
      <div className="group rounded-lg border border-border bg-surface p-6 transition-all hover:border-gold/30">
        <div className="mb-4 flex items-center gap-4">
          {item.image && (
            <span
              className={`${item.image} text-3xl text-gold`}
              aria-hidden="true"
            />
          )}
          <div>
            <h3 className="font-heading text-lg text-text-primary">
              {item.title}
            </h3>
            {item.experience && (
              <p className="text-xs text-text-muted">
                {item.experience}+ years
              </p>
            )}
          </div>
        </div>

        {item.technologies && item.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
              <span
                key={tech.name}
                className="rounded-sm border border-border-subtle px-2 py-0.5 text-xs text-text-secondary"
              >
                {tech.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </ScrollReveal>
  )
}

export default function TechStackGrid({
  items,
  category,
}: {
  items: ITechStack[]
  category?: "FE" | "BE" | "CLOUD"
}) {
  const filtered = category ? items.filter((i) => i.category === category) : items

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {filtered.map((item, i) => (
        <TechItem key={item.title} item={item} index={i} />
      ))}
    </div>
  )
}
