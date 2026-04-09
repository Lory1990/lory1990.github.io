import { cn } from "@/lib/cn"

export default function Badge({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-block rounded-sm border border-border-subtle px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-text-secondary",
        className
      )}
    >
      {children}
    </span>
  )
}
