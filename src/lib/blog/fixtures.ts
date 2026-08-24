import type { PortableTextBlock } from "@portabletext/types"
import type { Category, Post, PostSummary } from "./types"

/**
 * Placeholder posts for local development, active only with BLOG_FIXTURES=1.
 *
 * They exist so the blog (index, article, category archive, feed) can be worked
 * on before the CMS has content, or with no network at all. They are not
 * publishable copy: the env var is never set in CI, so these never ship.
 */

const CATEGORIES: Category[] = [
  {
    title: "Architecture",
    slug: "architecture",
    description: "Decisions that are expensive to reverse.",
  },
  {
    title: "Engineering leadership",
    slug: "engineering-leadership",
    description: "Teams, hiring, and the work of running engineering.",
  },
]

// Minimal Portable Text builders. The fixtures are content, not a test of the
// serializer, so paragraphs, headings and lists are enough.
let key = 0
const nextKey = () => `fx${(key += 1)}`

function span(text: string) {
  return { _type: "span", _key: nextKey(), text, marks: [] as string[] }
}

function block(
  text: string,
  style: "normal" | "h2" | "h3" | "blockquote" = "normal"
): PortableTextBlock {
  return {
    _type: "block",
    _key: nextKey(),
    style,
    markDefs: [],
    children: [span(text)],
  } as PortableTextBlock
}

function listItem(text: string): PortableTextBlock {
  return {
    _type: "block",
    _key: nextKey(),
    style: "normal",
    listItem: "bullet",
    level: 1,
    markDefs: [],
    children: [span(text)],
  } as PortableTextBlock
}

const POSTS: Post[] = [
  {
    slug: "microfrontends-are-an-org-chart-decision",
    title: "Microfrontends are an org chart decision, not a tech one",
    excerpt:
      "Splitting a frontend into independently deployable pieces solves a coordination problem. If you do not have that problem, you are buying the cost without the benefit.",
    publishedAt: "2026-07-08T08:00:00Z",
    updatedAt: null,
    readingMinutes: 7,
    coverImage: null,
    categories: [CATEGORIES[0]],
    metaTitle: null,
    metaDescription: null,
    noIndex: false,
    body: [
      block(
        "Every microfrontend conversation I have been in started with a framework and ended with a team topology. That order is backwards, and it is why so many of these migrations stall halfway."
      ),
      block("The problem they actually solve", "h2"),
      block(
        "Independent deployability buys you one thing: two teams can ship on different days without asking each other for permission. That is a coordination win, and it is only worth paying for when coordination is what hurts."
      ),
      listItem("one team, one release train: you do not need this"),
      listItem("four teams blocked behind one release: now it pays for itself"),
      listItem("four teams that all touch the same checkout flow: fix the boundary first"),
      block(
        "Pick the seams from the org chart, then choose the runtime. Doing it the other way round gives you distributed complexity with centralised decision-making — the worst of both.",
        "blockquote"
      ),
    ],
  },
  {
    slug: "what-i-look-for-in-a-first-engineering-hire",
    title: "What I look for in a first engineering hire",
    excerpt:
      "The first hire on a new team sets the defaults everyone after them inherits. Here is what I weigh, and what I have learned to stop weighing.",
    publishedAt: "2026-05-21T08:00:00Z",
    updatedAt: "2026-06-11T08:00:00Z",
    readingMinutes: 6,
    coverImage: null,
    categories: [CATEGORIES[1], CATEGORIES[0]],
    metaTitle: null,
    metaDescription: null,
    noIndex: false,
    body: [
      block(
        "When you hire the first engineer onto a new team, you are not filling a seat. You are choosing the person whose habits the next five people will copy, because there is nothing else for them to copy yet."
      ),
      block("Weigh the defaults they set", "h2"),
      block(
        "How they write a pull request description, whether they leave a decision recorded somewhere, what they do when a requirement is ambiguous: these become the team's norms within a quarter."
      ),
      block("What I stopped weighing", "h3"),
      block(
        "Depth in the exact stack. A strong engineer picks up our framework in three weeks; nobody picks up judgement in three weeks."
      ),
    ],
  },
]

/**
 * Index pages get the same summary the CMS would return: no article body and no
 * SEO fields, neither of which a card uses.
 */
export function fixturePosts(): PostSummary[] {
  return POSTS.map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    readingMinutes: post.readingMinutes,
    coverImage: post.coverImage,
    categories: post.categories,
  }))
}

export function fixtureSlugs(): string[] {
  return POSTS.map((post) => post.slug)
}

export function fixturePost(slug: string): Post | null {
  return POSTS.find((post) => post.slug === slug) ?? null
}

export function fixtureCategories(): Category[] {
  return CATEGORIES
}
