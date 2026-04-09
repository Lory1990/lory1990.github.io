"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { siteConfig } from "@/data/site"
import { cn } from "@/lib/cn"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-navy/95 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="font-heading text-lg tracking-wide text-text-primary no-underline hover:text-gold transition-colors"
          >
            {siteConfig.name}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium uppercase tracking-widest no-underline transition-colors",
                  pathname.startsWith(item.href)
                    ? "text-gold"
                    : "text-text-secondary hover:text-text-primary"
                )}
              >
                {item.label}
                {pathname.startsWith(item.href) && (
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-gold" />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-text-primary md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-navy/98 backdrop-blur-lg md:hidden">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "font-heading text-2xl no-underline transition-colors",
                pathname.startsWith(item.href)
                  ? "text-gold"
                  : "text-text-secondary hover:text-text-primary"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
