import { cn } from "@/lib/cn"

export default function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("mb-12", className)}>
      <h2 className="font-heading text-3xl font-normal text-text-primary md:text-4xl">
        {children}
      </h2>
      <div className="mt-4 h-px w-16 bg-gold" />
    </div>
  )
}
