export const siteConfig = {
  name: "Lorenzo De Francesco",
  title: "Chief Technology Officer",
  company: "Azimut Marketplace",
  // Kept under ~160 characters on purpose: this string is the meta description
  // on every page that does not override it, and Google truncates the tag
  // around there. The longer form of the same facts lives in
  // `disambiguatingDescription` on the Person schema and in llms.txt, which
  // have no length budget.
  description:
    "Technology leader with 10+ years in fintech and cloud architecture. Leads the tech at TNB Project (Gruppo Azimut), CTO at Azimut Marketplace.",
  url: "https://lorenzodefrancesco.it",
  image: "/img/lorenzo-de-francesco.jpeg",
  social: {
    github: "https://github.com/Lory1990",
    linkedin: "https://www.linkedin.com/in/lorenzodefrancesco",
  },
  // `requiresPosts` marks an entry that stays hidden until the CMS has
  // something to show. The flag is on every entry, not only the ones that use
  // it, because `as const` would otherwise make it absent from the other
  // members of the union and unreadable in a filter. See visibleNav below.
  nav: [
    { label: "About", href: "/about", requiresPosts: false },
    { label: "Projects", href: "/projects", requiresPosts: false },
    { label: "Events", href: "/events", requiresPosts: false },
    { label: "Blog", href: "/blog", requiresPosts: true },
  ],
  contactFormRules: [
    {
      route: "/",
      exact: true,
      title: "Looking for a technology leader?",
      subtitle:
        "Whether it's strategy, architecture, or a talk for your event — let's have a chat.",
    },
    {
      route: "/projects/",
      title: "Interested in building something like this?",
      subtitle: "Let's talk about how I can help bring it to life.",
    },
    {
      route: "/projects",
      exact: true,
      title: "Like what you see?",
      subtitle:
        "From architecture to delivery, let's talk about your next platform.",
    },
    {
      route: "/events/",
      title: "Want me to speak at your event?",
      subtitle: "Drop me a message — I love sharing what I've learned.",
    },
    {
      route: "/events",
      exact: true,
      title: "Looking for a speaker?",
      subtitle:
        "Tech leadership, cloud, architecture, microfrontends — let's talk.",
    },
    {
      route: "/blog/",
      title: "Want to dig into this?",
      subtitle:
        "If any of this is a problem you're facing right now, I'm happy to talk it through.",
    },
    {
      route: "/blog",
      exact: true,
      title: "Reading something you recognise?",
      subtitle:
        "Architecture, teams, governance — let's talk about yours.",
    },
    {
      route: "/about",
      title: "Need a CTO or technical advisor?",
      subtitle: "Let's start a conversation about working together.",
    },
  ],
} as const

export type NavItem = (typeof siteConfig.nav)[number]

// The navigation a visitor should actually see.
//
// While the blog has no posts the entry disappears: sending someone to an
// empty section is worse than not offering the link at all. The route keeps
// working — direct URL, RSS, sitemap — nothing advertises it. `hasPosts` is
// resolved once at build time in the root layout.
export function visibleNav(hasPosts: boolean): readonly NavItem[] {
  return siteConfig.nav.filter((item) => hasPosts || !item.requiresPosts)
}

// Next appends the `%s | Lorenzo De Francesco` template to every page title,
// which costs 24 characters. Past ~36 characters of its own a title would be
// pushed over the ~60 Google renders and cut off mid-suffix, so a long title
// ships on its own instead.
export function pageTitle(title: string) {
  return title.length > 36 ? { absolute: title } : title
}
