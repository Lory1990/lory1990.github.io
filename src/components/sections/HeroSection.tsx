import { siteConfig } from "@/data/site"
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons"
import ScrollReveal from "@/components/ui/ScrollReveal"

const socialLinks = [
  { icon: GithubIcon, href: siteConfig.social.github, label: "GitHub" },
  { icon: LinkedinIcon, href: siteConfig.social.linkedin, label: "LinkedIn" },
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
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            Chief Technology Officer
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="font-heading text-5xl font-normal leading-tight text-text-primary md:text-7xl lg:text-8xl">
            Lorenzo
            <br />
            De Francesco
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-text-secondary">
            Leading technology at Azimut Marketplace. 10+ years building
            enterprise platforms in fintech, cloud architecture, and
            microservices.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 flex items-center justify-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-text-muted transition-all hover:border-gold hover:text-gold"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </ScrollReveal>

        {/* Scroll indicator */}
        <ScrollReveal delay={0.5}>
          <div className="mt-20 flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-text-muted">
              Scroll
            </span>
            <div className="h-8 w-px animate-pulse bg-gradient-to-b from-gold/50 to-transparent" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
