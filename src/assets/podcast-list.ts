import IArticleData from "../types/IArticleData";

export interface IPodcast{
    slug:string,
    title:string,
    link?: string,
    subtitle?: string,
    description?:string,
    date:string
    image: string,
    article?: IArticleData[],
    audioUrl?: string,
    url?:{
        spotify?:string,
        anchor?:string,
        applePodcast?:string,
        googlePodcast?:string,
    }
}

const podcastList : IPodcast[] = [
    {
        "slug": "google-developer-group-milano-2022",
        "title": "Google Developer Group",
        "description": "The Google Developer Group is a collection of developers and developers who have been involved in the development of the group.",
        "date": "2022-01-01",
        "image": "https://developers.google.com/images/branding/google_developer_group.png",
    }
]

export default podcastList;