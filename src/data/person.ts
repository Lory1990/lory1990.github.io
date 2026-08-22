import type { Person, WebSite } from "schema-dts"
import { siteConfig } from "./site"

/**
 * Stable @id anchors for the site's linked-data graph.
 *
 * Every page emits the same identifiers, so search engines and LLMs merge the
 * per-page nodes into a single entity instead of treating each page as a
 * separate, unrelated Person.
 */
export const PERSON_ID = `${siteConfig.url}/#person`
export const WEBSITE_ID = `${siteConfig.url}/#website`
export const IMAGE_ID = `${siteConfig.url}/#primaryimage`

/**
 * The canonical description of Lorenzo as a natural person / independent
 * professional. This is the single source of truth: other pages reference it
 * with { "@id": PERSON_ID } rather than repeating (and drifting from) it.
 */
export const personSchema: Person = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: siteConfig.name,
  givenName: "Lorenzo",
  familyName: "De Francesco",
  url: siteConfig.url,
  mainEntityOfPage: `${siteConfig.url}/about`,
  image: {
    "@type": "ImageObject",
    "@id": IMAGE_ID,
    url: `${siteConfig.url}${siteConfig.image}`,
    contentUrl: `${siteConfig.url}${siteConfig.image}`,
    width: "800",
    height: "800",
    caption: `${siteConfig.name} — ${siteConfig.title}`,
  },
  description: siteConfig.description,
  disambiguatingDescription:
    "Chief Technology Officer based in Milan, Italy, working in fintech and digital banking; tech speaker and organizer of Google Developer Group Milano.",
  jobTitle: siteConfig.title,
  gender: "https://schema.org/Male",
  nationality: { "@type": "Country", name: "Italy" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Milan",
    addressRegion: "Lombardy",
    addressCountry: "IT",
  },
  homeLocation: { "@type": "Place", name: "Milan, Italy" },
  workLocation: { "@type": "Place", name: "Milan, Italy" },
  knowsLanguage: [
    { "@type": "Language", name: "Italian", alternateName: "it" },
    { "@type": "Language", name: "English", alternateName: "en" },
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Chief Technology Officer",
    occupationalCategory: {
      "@type": "CategoryCode",
      codeValue: "11-3021.00",
      name: "Computer and Information Systems Managers",
      inCodeSet: {
        "@type": "CategoryCodeSet",
        name: "O*NET-SOC",
        url: "https://www.onetonline.org/link/summary/11-3021.00",
      },
    },
    occupationLocation: {
      "@type": "City",
      name: "Milan",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Milan",
        addressCountry: "IT",
      },
    },
    skills: [
      "IT governance",
      "Cloud architecture",
      "Cyber security",
      "Data governance",
      "Team building and mentoring",
      "IT cost optimization",
      "Software architecture",
    ],
    responsibilities: [
      "Defining technology strategy and architecture for digital banking platforms",
      "Building and leading engineering teams",
      "Establishing IT governance, security policies, and GDPR compliance",
    ],
  },
  worksFor: [
    {
      "@type": "Organization",
      name: "TNB Project",
      parentOrganization: { "@type": "Organization", name: "Gruppo Azimut" },
      description:
        "A new digital bank built from scratch, where the financial advisor comes first.",
    },
    {
      "@type": "Organization",
      name: siteConfig.company,
      url: "https://azimutmarketplace.it",
    },
  ],
  alumniOf: [
    { "@type": "Organization", name: "Banca Sella" },
    { "@type": "Organization", name: "Fabrick" },
    { "@type": "Organization", name: "Costa Crociere" },
    { "@type": "Organization", name: "Delfi (Fincantieri)" },
    { "@type": "Organization", name: "Navium" },
  ],
  memberOf: [
    {
      "@type": "Organization",
      name: "Google Developer Group Milano",
      url: "https://gdg.community.dev/gdg-milano/",
    },
    {
      "@type": "EducationalOrganization",
      name: "start2impact",
      url: "https://www.start2impact.it/",
    },
  ],
  knowsAbout: [
    "Fintech",
    "Digital Banking",
    "Cyber Security",
    "Data Governance",
    "Cloud Architecture",
    "IT Governance",
    "Software Development",
    "Microfrontends",
    "Team Leadership",
    "React",
    "Java",
    "Node.js",
    "Kubernetes",
    "Azure",
    "AWS",
  ],
  // Lorenzo works as an independent professional alongside his executive roles:
  // he is open to advisory work and speaking, but not to employee positions.
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "CTO-level consulting and fractional engagements",
        serviceType: "Technology leadership consulting",
        description:
          "Technology strategy, cloud architecture, IT governance, and engineering team building for fintech and enterprise organisations.",
        provider: { "@id": PERSON_ID },
        areaServed: { "@type": "Country", name: "Italy" },
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Conference talks, workshops, and podcasts",
        serviceType: "Public speaking",
        description:
          "Talks on IT governance, cloud architecture, cyber security, microfrontends, AI agents, and the developer-to-CTO career path. 45+ talks delivered, in Italian and English.",
        provider: { "@id": PERSON_ID },
      },
    },
  ],
  sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
}

export const websiteSchema: WebSite = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  inLanguage: "en",
  author: { "@id": PERSON_ID },
  creator: { "@id": PERSON_ID },
  publisher: { "@id": PERSON_ID },
  copyrightHolder: { "@id": PERSON_ID },
  about: { "@id": PERSON_ID },
}
