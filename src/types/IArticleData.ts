export enum IArticleDataType{
    TITLE,
    TEXT,
    TEXT_IMAGE,
    IMAGE_TEXT,
    COUNTERS, 
    CTA,
    NOTICE_BOX,
    CAROUSEL
}

export default interface IArticleData{
    type: IArticleDataType,
    text: string,
    image?: string | string[],


}