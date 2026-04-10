import { cn } from "@/lib/cn"

export default function PageWrapper({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("mx-auto max-w-[1200px] px-6", className)}>
      {children}
    </div>
  )
}
