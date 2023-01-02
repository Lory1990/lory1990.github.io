import IArticleData from "../types/IArticleData"

export interface IEvent {
    slug: string
    title: string
    subtitle?: string
    description?: string
    link?: string
    date?: string
    image: string
    cover?: string
    video?: string
    article?: IArticleData[]
    isOnline?: boolean
    venue?: string
    hideTitleOnCover?: boolean
}

const events: IEvent[] = [
    {
        title: "Colloquio tecnico per neolaureati, tips&tricks",
        slug: "colloquio-tecnico-per-neolaureati-tipsandtricks",
        date: "2022-06-21",
        isOnline: true,
        image: "/img/opinno.jpeg"
    },
    {
        title: "TECH ITALIA - Colmare il debito tecnico",
        slug: "tech-italia-colmare-il-debito-tecnico",
        date: "2022-06-23",
        image: "/img/youtube-live.png",
        venue: "YouTube",
        isOnline: true
    },
    {
        slug: "creare-una-test-factory-aziendale",
        title: "Creare una Test Factory Aziendale",
        description:
            "In this presentation I want to tell how I handle day by day the development and the monitoring of an enterprise application. We will go deep in the architecture decision strategy and the tools we are using to ensure safety, reliability and scalability of the platform",
        link: "https://gdg.community.dev/events/details/google-gdg-valle-daosta-presents-devfest-alps-2022/",
        date: "2023-01-13",
        image: "/img/events/2022-gdg-triveneto/badge.webp",
        isOnline: false,
        venue: "Google DevFest Alps 2023"
    },
    {
        slug: "how-to-handle-a-multicountry-enterprise-platform",
        title: "How to handle a multicountry enterprise platform",
        description:
            "In this presentation I want to tell how I handle day by day the development and the monitoring of an enterprise application. We will go deep in the architecture decision strategy and the tools we are using to ensure safety, reliability and scalability of the platform",
        link: "https://www.devfest-triveneto.it/speakers/lorenzo-francesco/",
        date: "2022-10-22",
        image: "/img/events/2022-gdg-triveneto/badge.webp",
        isOnline: false,
        venue: "Google DevFest Triveneto 2022"
    },
    {
        slug: "tutored-il-tuo-primo-giorno-di-lavoro-la-to-do-list-per-lonboarding-in-azienda",
        title: "Il tuo primo giorno di lavoro",
        subtitle: "la “to do list” per l’onboarding in azienda",
        link: "https://www.tutored.me/it/experiences/16361/",
        date: "2022-09-21",
        venue: "Tutored",
        image: "/img/tutored-logo.png",
        cover: "/img/events/tutored-background.svg",
        isOnline: true
    },
    {
        slug: "guida-pratica-alla-gestione-di-un-prodotto-it",
        title: "Guida pratica alla gestione di un prodotto IT",
        description:
            "Cosa deve fare un IT manager per gestire efficacemente un prodotto IT e il team di sviluppo? Ci sono tantissimi aspetti di cui tenere conto e tanti interlocutori non tecnici. In questo talk condivido una guida pratica per non sbagliare!",
        venue: "Crafted Software",
        link: "https://www.meetup.com/it-IT/crafted-software/events/288348561/",
        date: "2022-09-20",
        image: "/img/events/2022-guida-pratica-prodotto-it/logo.jpeg",
        video: "https://www.youtube.com/watch?v=fQKdGDU5bf8",
        isOnline: false
    },
    {
        slug: "come-creare-un-frontend-scalabile-robusto-e-coerente",
        title: "Come creare un Frontend scalabile, robusto e coerente",
        subtitle: "Con l'atiuto di storybook e del sedign system",
        image: "/img/events/2022-frontend-scalabile/logo.png",
        venue: "React JS Milano",
        link: "https://www.meetup.com/it-IT/react-js-milano/events/282339759/",
        date: "2021-12-14",
        isOnline: false
    },
    {
        title: "Deploy in ambienti critici",
        subtitle: "Quando nulla può andare storto",
        slug: "deploy-in-ambienti-critici-quando-nulla-puo-andare-storto",
        image: "/img/youtube-live.png",
        venue: "YouTube",
        link: "https://www.youtube.com/watch?v=loQ54XKbKCw",
        date: "2021-11-18",
        isOnline: true
    },
    {
        title: "TeclaSystem dove si creano software per palinsesti TV",
        slug: "teclasystem-dove-si-creano-software-per-palinsesti-tv",
        video: "https://www.youtube.com/watch?v=n9CfAbduFAk",
        cover: "/img/events/meet-the-company-tecla-system.png",
        image: "/img/youtube-live.png",
        date: "2021-10-28",
        venue: "YouTube",
        isOnline: true,
        hideTitleOnCover: true
    },
    {
        title: "Con le architetture disaccoppiate è meglio!",
        slug: "con-le-architetture-disaccoppiate-e-meglio",
        cover: "/img/con-le-architetture-disaccoppiate-e-meglio.png",
        image: "/img/youtube-live.png",
        venue: "YouTube",
        hideTitleOnCover: true,
        video: "https://www.youtube.com/watch?v=rZ5TFCeWXXQ",
        date: "2021-11-24",
        isOnline: true
    },
    {
        title: "Chat With UX/UI - Filomena Sepe",
        slug: "chat-with-uxui-filomena-sepe",
        image: "/img/youtube-live.png",
        date: "2021-11-10",
        venue: "YouTube",
        video: "https://youtu.be/0nf1SQNDckY",
        isOnline: true
    },
    {
        slug: "bastano-200euro-giorno-per-un-freelance",
        title: "Bastano 200€/giorno per un freelance?",
        video: "https://www.youtube.com/watch?v=wNi01GiTH50",
        image: "/img/youtube-live.png",
        cover: "/img/events/200euro-giorno-sono-abbastanza-per-un-freelance.png",
        venue: "YouTube",
        date: "2021-10-13",
        isOnline: true
    },
    {
        title: "Chat with UX/UI - Laura - Design System",
        slug: "chat-with-uxui-laura-brand-identity-e-design-system",
        video: "https://www.youtube.com/watch?v=04Q-pauK1IU",
        image: "/img/youtube-live.png",
        venue: "YouTube",
        date: "2021-10-06",
        isOnline: true
    },
    {
        title: "Lavoro da posti incredibili e sono felice",
        slug: "lavoro-da-posti-incredibili-e-sono-felice",
        video: "https://www.youtube.com/watch?v=-Rk9v_hwa8k",
        image: "/img/youtube-live.png",
        cover: "/img/events/lavoro-da-posto-incredibili-e-sono-felice.png",
        venue: "YouTube",
        date: "2021-12-01",
        isOnline: true,
        hideTitleOnCover: true
    },
    {
        title: "Il team leader cosa fa?",
        slug: "il-team-leader-cosa-fa",
        video: "https://www.youtube.com/watch?v=esVxIrfWdIY",
        cover: "/img/il-team-leader-cosa-fa.png",
        hideTitleOnCover: true,
        date: "2021-12-22",
        image: "/img/youtube-live.png",
        venue: "YouTube",
        isOnline: true
    },
    {
        slug: "simulazione-di-colloquio-per-back-end-developer",
        date: "2022-05-16",
        venue: "Tutored",
        title: "Simulazione di colloquio per Back-end Developer",
        link: "https://www.tutored.me/it/experiences/15627",
        image: "/img/tutored-logo.png",
        cover: "/img/events/tutored-background.svg",
        isOnline: true
    },
    {
        slug: "recruiter-and-dev-celebrating-friendship",
        title: "Recruiter & Dev",
        subtitle: "Celebrating Friendship!",
        date: "2022-09-05",
        image: "/img/youtube-live.png",
        venue: "YouTube",
        isOnline: true
    },
    {
        slug: "come-si-supera-il-colloquio-tecnico-domande-esercizi-e-best-practice",
        date: "2022-01-31",
        title: "Come si supera il colloquio tecnico?",
        subtitle: "Domande, esercizi e best practice",
        link: "https://www.tutored.me/it/experiences/15090",
        image: "/img/tutored-logo.png",
        cover: "/img/events/tutored-background.svg",
        isOnline: true,
        venue: "Tutored"
    }
]

export default events
