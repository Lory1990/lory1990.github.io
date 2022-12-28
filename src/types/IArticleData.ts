export enum IArticleDataType {
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
}

export default interface IArticleData {
    type: IArticleDataType
    videoUrl?: string
    text?: string | React.ReactNode
    image?: string | string[]
    imageAlt?: string
}
