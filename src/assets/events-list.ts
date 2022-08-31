
export interface IEvent{
    slug:string,
    title:string,
    description:string,
    link:string,
    date:string
    image: string
    video:string
}

const events : IEvent[] = [
    {
        "slug": "google-developer-group-milano-2022",
        "title": "Google Developer Group",
        "description": "The Google Developer Group is a collection of developers and developers who have been involved in the development of the group.",
        "link": "https://developers.google.com/",
        "date": "2022-01-01",
        "image": "https://developers.google.com/images/branding/google_developer_group.png",
        "video": "https://developers.google.com/"
    }
]

export default events;