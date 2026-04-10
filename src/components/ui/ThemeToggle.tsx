"use client"

import { useSyncExternalStore, useCallback } from "react"
import { Sun, Moon } from "lucide-react"

function getSnapshot(): boolean {
  return document.documentElement.classList.contains("dark")
}

function getServerSnapshot(): boolean {
  return false
}

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback)
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  })
  return () => observer.disconnect()
}

function initTheme() {
  if (typeof window === "undefined") return
  const stored = localStorage.getItem("theme")
  if (stored === "dark") {
    document.documentElement.classList.add("dark")
    document.documentElement.classList.remove("light")
  } else if (stored === "light") {
    document.documentElement.classList.add("light")
    document.documentElement.classList.remove("dark")
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.classList.add("dark")
  }
}

// Run once on load
if (typeof window !== "undefined") {
  initTheme()
}

export default function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const toggle = useCallback(() => {
    const next = !dark
    localStorage.setItem("theme", next ? "dark" : "light")
    document.documentElement.classList.toggle("dark", next)
    document.documentElement.classList.toggle("light", !next)
  }, [dark])

  return (
    <button
      onClick={toggle}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-hero-border text-hero-muted transition-all hover:border-gold hover:text-gold"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
