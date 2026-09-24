import type { FAQPage } from "schema-dts"
import { siteConfig } from "./site"
import { WEBSITE_ID } from "./person"

/**
 * The questions a prospective client, recruiter or conference organiser
 * actually types — answered in one self-contained paragraph each.
 *
 * Two constraints shape this file. Every answer stays in the 40–60 word range
 * that featured snippets and voice assistants extract, and every entry is
 * rendered visibly on the home page: Google drops FAQ markup whose answers are
 * not on the page, so the schema below is generated from the same array rather
 * than maintained beside it.
 */
export interface FaqEntry {
  question: string
  answer: string
}

export const faq: FaqEntry[] = [
  {
    question: "Who is Lorenzo De Francesco?",
    answer:
      "Lorenzo De Francesco is a Chief Technology Officer based in Milan, Italy. He leads the technology development of TNB Project, a digital bank built from scratch inside Gruppo Azimut, and is CTO at Azimut Marketplace. His work covers technology strategy, cloud architecture, IT governance and cyber security.",
  },
  {
    question: "What does a CTO actually do?",
    answer:
      "A CTO owns the technology strategy behind the business goals: choosing the architecture, building and leading the engineering team, setting security and governance policy, and controlling infrastructure spend. In practice it is less about writing code than about deciding what gets built, by whom, and at what cost.",
  },
  {
    question: "How do you reduce IT infrastructure costs?",
    answer:
      "By attacking three things in order: vendor contracts, cloud waste, and work paid for externally that belongs in-house. At Azimut Marketplace that combination removed over €700k of recurring annual cost — roughly 70% — through renegotiation, right-sizing cloud resources, and insourcing development.",
  },
  {
    question: "What is microfrontend orchestration?",
    answer:
      "It is managing many independently deployed frontend applications as a single product: routing users to the right version, handling environments and rollbacks, and keeping deployments consistent across teams. MFE Orchestrator, an open source project, does for microfrontends roughly what Kubernetes does for containers.",
  },
  {
    question: "Is Lorenzo available for consulting or fractional CTO work?",
    answer:
      "Yes. Alongside his executive roles he takes advisory and fractional engagements: technology strategy, cloud architecture reviews, IT governance, and helping organisations build or restructure an engineering team. Engagements are typically with fintech and enterprise companies in Italy. The contact form on this site reaches him directly.",
  },
  {
    question: "Can Lorenzo speak at my conference or podcast?",
    answer:
      "Yes — he has delivered more than 45 talks, in Italian and English, at events including Codemotion, DevFest and Winter Tech. Recurring topics are IT governance, cloud architecture, cyber security, microfrontends, AI agents, and the path from developer to CTO. Past talks are listed under Events.",
  },
]

export const faqSchema: FAQPage = {
  "@type": "FAQPage",
  "@id": `${siteConfig.url}/#faq`,
  isPartOf: { "@id": WEBSITE_ID },
  inLanguage: "en",
  mainEntity: faq.map(({ question, answer }) => ({
    "@type": "Question" as const,
    name: question,
    acceptedAnswer: { "@type": "Answer" as const, text: answer },
  })),
}
