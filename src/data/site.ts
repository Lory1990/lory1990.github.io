export const siteConfig = {
  name: "Lorenzo De Francesco",
  title: "Chief Technology Officer",
  company: "Azimut Marketplace",
  description:
    "CTO with 10+ years of experience in fintech, cloud architecture, and enterprise software development. Currently leading technology at Azimut Marketplace.",
  url: "https://lory1990.github.io",
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
      title: "Do you need a CTO?",
      subtitle: "Contact me to start a new collaboration.",
    },
    {
      route: "/projects/",
      title: "Did you like this project?",
      subtitle: "Contact me if you want to create a similar one with me.",
    },
    {
      route: "/projects",
      exact: true,
      title: "Do you like these projects?",
      subtitle: "Contact me, I am here to develop your best project ever!",
    },
    {
      route: "/events/",
      title: "Shall we do a webinar together?",
      subtitle: "Drop me a message, I love participating in events!",
    },
    {
      route: "/events",
      exact: true,
      title: "I am available for talks",
      subtitle: "Do you need a technical speaker? Drop a message below.",
    },
    {
      route: "/about",
      title: "Do you need a CTO?",
      subtitle: "Contact me to start a new collaboration.",
    },
  ],
} as const
