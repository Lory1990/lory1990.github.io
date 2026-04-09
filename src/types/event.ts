import { ArticleData } from "./article"

export interface PodcastLinks {
  apple?: string
  google?: string
  spotify?: string
}

export interface IEvent {
  slug: string
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
