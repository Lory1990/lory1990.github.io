import Link from "next/link"
import { Calendar, Clock } from "lucide-react"
import BlogImage from "./BlogImage"
import { dateAttribute, formatDate, readingLabel } from "@/lib/blog"
import type { PostSummary } from "@/lib/blog/types"
import { cn } from "@/lib/cn"

/**
 * A post preview on index pages.
 *
 * The link wraps the whole row: a large hit area beats a clickable title on
 * touch. Categories are plain labels here rather than links — an <a> nested in
 * an <a> is invalid HTML — and the archives are reachable from the filter row
 * at the top of the index instead.
 */
export default function PostCard({
  post,
  className,
}: {
  post: PostSummary
  className?: string
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group flex gap-5 border-b border-border py-6 no-underline transition-colors last:border-0 hover:bg-surface/50",
        className
      )}
    >
      {post.coverImage && (
        <div className="relative hidden h-20 w-20 shrink-0 overflow-hidden rounded-lg sm:block">
          <BlogImage
            image={post.coverImage}
            ratio={1}
            sizes="80px"
            widths={[160, 240]}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <div className="flex-1">
        <h3 className="font-heading text-lg text-text-primary transition-colors group-hover:text-gold">
          {post.title}
        </h3>
        <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-text-muted">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} />
            <time dateTime={dateAttribute(post.publishedAt)}>
              {formatDate(post.publishedAt)}
            </time>
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            {readingLabel(post.readingMinutes)}
          </span>
          {post.categories.slice(0, 2).map((category) => (
            <span key={category.slug} className="text-text-secondary">
              {category.title}
            </span>
          ))}
        </div>
        {post.excerpt && (
          <p className="mt-2 line-clamp-2 text-sm text-text-secondary">
            {post.excerpt}
          </p>
        )}
      </div>
    </Link>
  )
}
