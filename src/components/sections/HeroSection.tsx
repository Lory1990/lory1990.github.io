import Link from "next/link"
import { siteConfig } from "@/data/site"
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons"
import ScrollReveal from "@/components/ui/ScrollReveal"

const socialLinks = [
  { icon: GithubIcon, href: siteConfig.social.github, label: "GitHub" },
  { icon: LinkedinIcon, href: siteConfig.social.linkedin, label: "LinkedIn" },
]

const credentials = [
  "ex-Costa Crociere",
  "ex-Banca Sella",
  "Azimut Marketplace",
  "40+ Talks",
]

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light to-background" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(212,88,15,0.10),transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 text-center">
        <ScrollReveal>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-hero-border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Chief Technology Officer
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="font-heading text-5xl font-semibold leading-tight text-hero-text md:text-7xl lg:text-8xl">
            Lorenzo
            <br />
            De Francesco
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-2xl font-heading text-xl leading-snug text-hero-text md:text-2xl">
            Building the bank of the future from scratch — where the financial
            advisor comes first.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-hero-muted">
            Leading the technology development at TNB Project (Gruppo Azimut),
            and CTO at Azimut Marketplace. 10+ years in fintech, turning IT into
            a strategic asset — with a relentless focus on cyber security, data
            governance, and data integrity.
          </p>
        </ScrollReveal>

        {/* <ScrollReveal delay={0.3}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {credentials.map((item) => (
              <span
                key={item}
                className="rounded-full border border-hero-border px-3 py-1 text-xs font-medium text-hero-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </ScrollReveal> */}

        <ScrollReveal delay={0.4}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/about"
              className="rounded-lg bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-wider text-navy no-underline transition-colors hover:bg-gold-light"
            >
              About me
            </Link>
            <Link
              href="/events"
              className="rounded-lg border border-hero-border px-6 py-3 text-sm font-medium uppercase tracking-wider text-hero-text no-underline transition-colors hover:border-gold hover:text-gold"
            >
              Speaking &amp; Talks
            </Link>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-hero-border text-hero-muted transition-all hover:border-gold hover:text-gold"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Scroll indicator */}
        <ScrollReveal delay={0.5}>
          <div className="mt-16 flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-hero-muted">
              Scroll
            </span>
            <div className="h-8 w-px animate-pulse bg-gradient-to-b from-gold/50 to-transparent" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
