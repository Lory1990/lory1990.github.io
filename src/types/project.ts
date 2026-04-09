import { ArticleData } from "./article"

export interface IProject {
  slug: string
  title: string
  highlight?: boolean
  subtitle?: string
  boxDescription?: string
  description?: string
  date?: string
  team?: string
  role?: string
  desktopScreenshots?: string[]
  mobileScreenshots?: string[]
  link?: {
    web?: string
    instagram?: string
    linkedin?: string
    facebook?: string
    youtube?: string
    github?: string
    twitter?: string
    tikTok?: string
    playStore?: string
  }
  githubLink?: string
  image?: string
  background?: string
  hideTitleOnCover?: boolean
  article?: ArticleData[]
  tile?: {
    color?: string
  }
  hero?: {
    background?: string
    color?: string
  }
  stack?: string[]
  category?: string[]
  development?: string
}
