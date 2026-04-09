export enum ArticleDataType {
  TITLE,
  TEXT,
  TEXT_IMAGE,
  IMAGE_TEXT,
  COUNTERS,
  CTA,
  NOTICE_BOX,
  CAROUSEL,
  TEXT_VIDEO,
  VIDEO_TEXT,
  IMAGE,
}

export interface ArticleData {
  type: ArticleDataType
  videoUrl?: string
  text?: string
  image?: string | string[]
  imageAlt?: string
  imageWidth?: number
  imageHeight?: number
}
