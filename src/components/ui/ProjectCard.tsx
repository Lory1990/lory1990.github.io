import Link from "next/link"
import Image from "next/image"
import type { IProject } from "@/types"

export default function ProjectCard({ project }: { project: IProject }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block overflow-hidden rounded-lg border border-border bg-surface no-underline transition-all hover:border-gold/30"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />
      </div>
      <div className="relative p-6">
        <h3 className="font-heading text-xl text-text-primary">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-text-secondary">
          {project.boxDescription}
        </p>
        {project.category && project.category.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.category.map((cat) => (
              <span
                key={cat}
                className="text-xs uppercase tracking-wider text-gold/70"
              >
                {cat}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}
