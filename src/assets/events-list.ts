import IArticleData from "../types/IArticleData"

export interface IEvent{
    slug:string,
    title:string,
    subtitle?: string,
    description?:string,
    link?:string,
    date?:string
    image: string
    cover?: string,
    video?:string
    article?: IArticleData[]
    isOnline?: boolean,
    venue?: string
}

const events : IEvent[] = [
    {
        "title": "TECH ITALIA - Colmare il debito tecnico",
        "slug": "tech-italia-colmare-il-debito-tecnico",
        "date": "2022-06-23",
        "image":"/img/youtube-live.png",
        "venue": "YouTube",
        "isOnline": true,
    },
    {
        "slug": "how-to-handle-a-multicountry-enterprise-platform",
        "title": "How to handle a multicountry enterprise platform",
        "description": "In this presentation I want to tell how I handle day by day the development and the monitoring of an enterprise application. We will go deep in the architecture decision strategy and the tools we are using to ensure safety, reliability and scalability of the platform",
        "subtitle": "The Google Developer Group is a collection of developers and developers who",
        "link": "https://www.devfest-triveneto.it/speakers/lorenzo-francesco/",
        "date": "2022-10-22",
        "image": "/img/events/2022-gdg-triveneto/badge.webp",
        "isOnline": false,
        "venue": "Google DevFest Triveneto 2022"
    },
    {
        "slug": "tutored-il-tuo-primo-giorno-di-lavoro-la-to-do-list-per-lonboarding-in-azienda",
        "title": "Il tuo primo giorno di lavoro: la “to do list” per l’onboarding in azienda",
        "description": "The Google Developer Group is a collection of developers and developers who have been involved in the development of the group.",
        "subtitle": "The Google Developer Group is a collection of developers and developers who",
        "link": "https://www.tutored.me/it/experiences/16361/",
        "date": "2022-09-21",
        "venue": "Tutored",
        "image": "/img/tutored-logo.png",
        "isOnline": true,
    },
    {
        "slug": "guida-pratica-alla-gestione-di-un-prodotto-it",
        "title": "Guida pratica alla gestione di un prodotto IT",
        "venue":"Crafted Software",
        "description": "The Google Developer Group is a collection of developers and developers who have been involved in the development of the group.",
        "subtitle": "The Google Developer Group is a collection of developers and developers who",
        "link": "https://www.meetup.com/it-IT/crafted-software/events/288348561/",
        "date": "2022-09-20",
        "image": "/img/events/2022-guida-pratica-prodotto-it/logo.jpeg",
        "video": "https://developers.google.com/",
        "isOnline": false,
    },
    {
        "slug":"come-creare-un-frontend-scalabile-robusto-e-coerente",
        "title": "Come creare un Frontend scalabile, robusto e coerente",
        "image": "/img/events/2022-frontend-scalabile/logo.png",
        "venue": "React JS Milano",
        "link": "https://www.meetup.com/it-IT/react-js-milano/events/282339759/",
        "date": "2021-12-14",
        "isOnline": false
    },
    {
        "title": "Deploy in ambienti critici",
        "slug": "deploy-in-ambienti-critici-quando-nulla-puo-andare-storto",
        "image": "/img/youtube-live.png",
        "venue": "YouTube",
        "link": "https://youtu.be/loQ54XKbKCw",
        "date": "2021-11-18",
        "isOnline": true
        
    },
    {
        "title": "TeclaSystem dove si creano software per palinsesti TV",
        "slug": "teclasystem-dove-si-creano-software-per-palinsesti-tv",
        "video": "https://youtu.be/n9CfAbduFAk",
        "image": "/img/youtube-live.png",
        "date": "2021-10-28",
        "venue": "YouTube",
        "isOnline": true,
    },
    {
        "title": "Con le architetture disaccoppiate è meglio!",
        "slug": "con-le-architetture-disaccoppiate-e-meglio",
        "image":  "/img/youtube-live.png",
        "venue": "YouTube",
        "video": "https://youtu.be/rZ5TFCeWXXQ",
        "date": "2021-11-24",
        "isOnline": true
    },
    {
        "title": "Chat With UX/UI - Filomena Sepe",
        "slug": "chat-with-uxui-filomena-sepe",
        "image": "/img/youtube-live.png",
        "date": "2021-11-10",
        "venue": "YouTube",
        "video": "https://youtu.be/0nf1SQNDckY",
        "isOnline": true
    },
    {
        "slug": "bastano-200euro-giorno-per-un-freelance",
        "title": "Bastano 200€/giorno per un freelance?",
        "video": "https://www.youtube.com/watch?v=wNi01GiTH50",
        "image": "/img/youtube-live.png",
        "venue": "YouTube",
        "date": "2021-10-13",
        "isOnline": true
    },
    {
        "title": "Chat with UX/UI - Laura - Design System",
        "slug": "chat-with-uxui-laura-brand-identity-e-design-system",
        "video": "https://www.youtube.com/watch?v=04Q-pauK1IU",
        "image": "/img/youtube-live.png",
        "venue": "YouTube",
        "date": "2021-10-06",
        "isOnline": true
    },
    {
        "title": "Lavoro da posti incredibili e sono felice",
        "slug": "lavoro-da-posti-incredibili-e-sono-felice",
        "video": "https://www.youtube.com/watch?v=-Rk9v_hwa8k",
        "image": "/img/youtube-live.png",
        "venue": "YouTube",
        "date": "2021-12-01",
        "isOnline": true
    },
    {
        "title": "Il team leader cosa fa?",
        "slug": "il-team-leader-cosa-fa",
        "video": "https://www.youtube.com/watch?v=esVxIrfWdIY",
        "date": "2021-12-22",
        "image": "/img/youtube-live.png",
        "venue": "YouTube",
        "isOnline": true
    },
    {
        "slug": "simulazione-di-colloquio-per-back-end-developer",
        "date": "2022-05-16",
        "venue": "Tutored",
        "title": "Simulazione di colloquio per Back-end Developer",
        "link": "https://www.tutored.me/it/experiences/15627",
        "image": "/img/tutored-logo.png",
        "isOnline": true
    },
    {
        "slug": "recruiter-and-dev-celebrating-friendship",
        "title": "Recruiter & Dev - Celebrating Friendship!",
        "date": "2022-09-05",
        "image":"/img/youtube-live.png",
        "venue": "YouTube",
        "isOnline": true
    },
    {
        "slug": "come-si-supera-il-colloquio-tecnico-domande-esercizi-e-best-practice",
        "date": "2022-01-31",
        "title": "Come si supera il colloquio tecnico? Domande, esercizi e best practice",
        "link": "https://www.tutored.me/it/experiences/15090",
        "image": "/img/tutored-logo.png",
        "isOnline": true,
        "venue": "Tutored",
    }
]

export default events;