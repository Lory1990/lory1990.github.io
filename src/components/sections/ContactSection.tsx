"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Send, Loader2, CheckCircle } from "lucide-react"
import emailjs from "@emailjs/browser"
import { siteConfig } from "@/data/site"

export default function ContactSection() {
  const pathname = usePathname()
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")

  const rule = siteConfig.contactFormRules.find((r) => {
    const ruleAny = r as { route: string; exact?: boolean; title?: string; subtitle?: string }
    return ruleAny.exact ? ruleAny.route === pathname : pathname.startsWith(ruleAny.route)
  })

  if (!rule) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !message) return

    setLoading(true)
    setError("")

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICEID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE!,
        { email, text: message, path: pathname },
        process.env.NEXT_PUBLIC_EMAILJS_APIKEY!
      )
      setSent(true)
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="border-t border-border bg-surface py-24">
      <div className="mx-auto max-w-lg px-6 text-center">
        <h2 className="font-heading text-2xl text-text-primary md:text-3xl">
          {rule.title}
        </h2>
        {rule.subtitle && (
          <p className="mt-3 text-text-secondary">{rule.subtitle}</p>
        )}

        {sent ? (
          <div className="mt-8 flex flex-col items-center gap-3">
            <CheckCircle size={40} className="text-gold" />
            <p className="text-text-secondary">
              Thank you! I will get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
            <input
              type="email"
              required
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-lg border border-border bg-background px-4 py-3 text-text-primary placeholder:text-text-muted outline-none transition-colors focus:border-gold/50"
            />
            <textarea
              required
              rows={4}
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="rounded-lg border border-border bg-background px-4 py-3 text-text-primary placeholder:text-text-muted outline-none transition-colors focus:border-gold/50 resize-none"
            />
            {error && <p className="text-sm text-red-400">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 font-medium text-navy transition-colors hover:bg-gold-light disabled:opacity-50"
            >
              {loading ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <Send size={18} />
              )}
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
