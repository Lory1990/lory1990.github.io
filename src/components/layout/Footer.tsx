import { Github, Linkedin, Facebook } from "lucide-react"
import { siteConfig } from "@/data/site"

const socialLinks = [
  { icon: Github, href: siteConfig.social.github, label: "GitHub" },
  { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-6 py-12 md:flex-row md:justify-between">
        <div>
          <p className="font-heading text-lg text-text-primary">
            {siteConfig.name}
          </p>
          <p className="text-sm text-text-muted">
            {siteConfig.title} &mdash; Milan, Italy
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition-all hover:border-gold hover:text-gold"
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <p className="text-xs text-text-muted">
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  )
}
