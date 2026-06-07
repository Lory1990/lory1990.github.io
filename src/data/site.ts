export const siteConfig = {
  name: "Lorenzo De Francesco",
  title: "Chief Technology Officer",
  company: "Azimut Marketplace",
  description:
    "Technology leader with 10+ years in fintech, cloud architecture, and enterprise software. Leading the technology development at TNB Project (Gruppo Azimut) — building the bank of the future from scratch — and CTO at Azimut Marketplace, with a focus on cyber security and data governance.",
  url: "https://lorenzodefrancesco.it",
  image: "/img/lorenzo-de-francesco.jpeg",
  social: {
    github: "https://github.com/Lory1990",
    linkedin: "https://www.linkedin.com/in/lorenzodefrancesco",
  },
  nav: [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Events", href: "/events" },
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
      route: "/about",
      title: "Need a CTO or technical advisor?",
      subtitle: "Let's start a conversation about working together.",
    },
  ],
} as const
