import { ArticleData } from "./article"

export interface PodcastLinks {
  apple?: string
  google?: string
  spotify?: string
}

export interface IEvent {
  slug: string
  /**
   * Language of what the page actually shows — its title and description.
   * The site is English, so this is only set on the talks that are not:
   * they keep their original Italian title, which is what people search for
   * after seeing the talk. Absent means English.
   */
  lang?: "it" | "en"
  highlight?: boolean
  title: string
  subtitle?: string
  shortDescription?: string
  description?: string
  link?: string
  date?: string
  image: string
  cover?: string
  video?: string
  article?: ArticleData[]
  isOnline: boolean
  venue?: string
  hideTitleOnCover?: boolean
  hero?: {
    background?: string
    color?: string
  }
  podcast?: PodcastLinks
}
