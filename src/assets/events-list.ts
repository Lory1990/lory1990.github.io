import { Description } from "@mui/icons-material"
import { IHeroProps } from "../components/Hero"
import IArticleData from "../types/IArticleData"

export interface IEvent {
    slug: string
    title: string
    subtitle?: string
    shortDescription?: string
    description?: string
    link?: string
    date?: string
    image: string
    cover?: string
    video?: string
    article?: IArticleData[]
    isOnline: boolean
    venue?: string
    hideTitleOnCover?: boolean
    hero?: IHeroProps
}

const events: IEvent[] = [
    {
        title: "Colloquio tecnico per neolaureati, tips&tricks",
        slug: "colloquio-tecnico-per-neolaureati-tips-and-tricks",
        description: "In this webinar with TUTORED i will give some Tips and tricks to Junior developers to have a great performance at job interview",
        date: "2022-06-21",
        venue: "YouTube",
        isOnline: true,
        image: "/img/opinno.jpeg"
    },
    {
        title: "Colmare il debito tecnico",
        subtitle: "TECH ITALIA",
        description: "In this round table we will discuss together on how to delete the tecnicval debit in large enterprise applications",
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
            'We all know that testing is essential, but there is never time to do it and very few people can answer the question "which tests should be done? How much do they cost?" In this talk, we will see together how to create a corporate testing strategy, what the costs are, the tools and the people to involve. And at the end I will show you, costs and bugs in hand, that writing automated tests is much cheaper than doing them manually.',
        link: "https://gdg.community.dev/events/details/google-gdg-valle-daosta-presents-devfest-alps-2022/",
        date: "2023-01-13",
        image: "/img/events/2022-gdg-triveneto/badge.webp",
        video: "https://www.youtube.com/watch?v=fLaKcao4mnk",
        isOnline: false,
        venue: "Google DevFest Alps 2023",
        hero: {
            background: "linear-gradient(145deg, rgba(5,51,113,1) 0%, rgba(45,116,205,1) 100%);"
        }
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
        venue: "Google DevFest Triveneto 2022",
        hero: {
            background: "linear-gradient(145deg, rgba(5,51,113,1) 0%, rgba(45,116,205,1) 100%);"
        }
    },
    {
        slug: "tutored-il-tuo-primo-giorno-di-lavoro-la-to-do-list-per-lonboarding-in-azienda",
        title: "Il tuo primo giorno di lavoro",
        subtitle: "the “to do list” for your onboarding in a company",
        description:
            "In this webonar we will see together what are the first steps as a new employee in a company. I will share the ToDo List of all stuff to do in order to start the right way your new Job!",
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
        shortDescription: "The practical guide to handle a IT SaaS",
        description:
            "What should an IT manager do to effectively manage an IT product and the development team? There are many aspects to consider and many non-technical stakeholders. In this talk, I share a practical guide to not make mistakes!",
        venue: "Crafted Software",
        link: "https://www.meetup.com/it-IT/crafted-software/events/288348561/",
        date: "2022-09-20",
        image: "/img/events/2022-guida-pratica-prodotto-it/logo.jpeg",
        video: "https://www.youtube.com/watch?v=fQKdGDU5bf8",
        isOnline: false,
        hero: {
            background: "linear-gradient(145deg, rgba(239,93,94,1) 0%, rgba(125,36,36,1) 100%)"
        }
    },
    {
        slug: "come-creare-un-frontend-scalabile-robusto-e-coerente",
        title: "Come creare un Frontend scalabile, robusto e coerente",
        subtitle: "Con l'aiuto di Storybook e del Design System",
        shortDescription: "Sotrybook is your bvest friend if you need a scalable frontend",
        description: "In this webinar we will see how to use Stroybook to creare a coherent frontend with reusable components.",
        image: "/img/events/2022-frontend-scalabile/logo.png",
        venue: "React JS Milano",
        link: "https://www.meetup.com/it-IT/react-js-milano/events/282339759/",
        date: "2021-12-14",
        isOnline: false
    },
    {
        title: "Deploy in ambienti critici",
        subtitle: "Feat Vincenzo Raimondi",
        slug: "deploy-in-ambienti-critici-quando-nulla-puo-andare-storto",
        shortDescription: "When nothing can go wrong",
        description:
            "Sometimes deployments should not go wrong, especially when it comes to systems with millions of users. That's why maximum coordination and well-defined procedures are necessary. Join Vincenzo and I on this webinar dedicated to deploying giant software systems.",
        image: "/img/youtube-live.png",
        venue: "YouTube",
        video: "https://www.youtube.com/watch?v=loQ54XKbKCw",
        date: "2021-11-18",
        isOnline: true
    },
    {
        title: "TeclaSystem dove si creano software per palinsesti TV",
        shortDescription: "Interview with a developer of tv shows editor",
        description: "Interview with a developer of tw shows editor",
        slug: "teclasystem-dove-si-creano-software-per-palinsesti-tv",
        subtitle: "Feat Emanuiele Gurini",
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
        subtitle: "Feat Simone Checcoli",
        shortDescription: "A practical demonstration of how microservices should interact",
        description: "A practical demonstration of how microservices should interact using PubSub events to share data",
        image: "/img/youtube-live.png",
        venue: "YouTube",
        hideTitleOnCover: true,
        video: "https://www.youtube.com/watch?v=rZ5TFCeWXXQ",
        date: "2021-11-24",
        isOnline: true
    },
    {
        title: "Chat With UX/UI",
        slug: "chat-with-uxui-filomena-sepe",
        subtitle: "Feat Filomena Sepe",
        description: "Carrer path of a UX/UI designer and how to interact with developers.",
        image: "/img/youtube-live.png",
        date: "2021-11-10",
        venue: "YouTube",
        video: "https://youtu.be/0nf1SQNDckY",
        isOnline: true
    },
    {
        slug: "bastano-200-euro-giorno-per-un-freelance",
        subtitle: "Feat Marco Rapaccini",
        shortDescription: "Is it better 200€/day as a freelance or 50€/day as a employee?",
        description:
            "On this live stream, myself and Marco Rapaccini will be doing a cost-benefit analysis for freelancers and trying to determine whether it is ultimately more beneficial to be an employee.",
        title: "Bastano 200€/giorno per un freelance?",
        video: "https://www.youtube.com/watch?v=wNi01GiTH50",
        image: "/img/youtube-live.png",
        cover: "/img/events/200euro-giorno-sono-abbastanza-per-un-freelance.png",
        venue: "YouTube",
        date: "2021-10-13",
        hideTitleOnCover: true,
        isOnline: true
    },
    {
        slug: "chat-with-uxui-laura-brand-identity-e-design-system",
        title: "Chat with UX/UI - Design System",
        subtitle: "Feat Laura Paveglio",
        shortDescription: "What are the advantages of a design system?",
        description:
            "What are the advantages of a design system? How does it interact with the brands strategy? Who must create the design system? In this webinar we will answer these and other questions",
        video: "https://www.youtube.com/watch?v=04Q-pauK1IU",
        image: "/img/youtube-live.png",
        venue: "YouTube",
        date: "2021-10-06",
        isOnline: true,
        hideTitleOnCover: true
    },
    {
        slug: "lavoro-da-posti-incredibili-e-sono-felice",
        title: "Lavoro da posti incredibili e sono felice",
        subtitle: "Feat Christian Cannata",
        shortDescription: "In this webinar me and Christian will talk about the being a Digital Nomad and work from where you want and when you want.",
        description:
            "On this webinar, we will be discussing the concept of digital nomadism and the freedom it offers to work whenever and wherever you want. In addition we will give some advices on how to start your own journey as a digital nomad.",
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
        subtitle: "Feat Vincenzo Raimondo",
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
        shortDescription: "In a technical interview what is the best way to answer the interviewer? how can I be the best? I will answer to all questions in this webinar",
        description:
            "The selection process includes a moment in which the candidate's technical skills are assessed. The technical interview, therefore, is a crucial moment because it offers the possibility to put into practice the skills learned during the course of study or in previous work experiences in front of a company manager.<br />  This webinar is focused on the analysis of some real cases, starting from the exercises and questions submitted to a candidate to continue on what are the best ways to respond. <br /> Furthermore, there will be a focus on what a recruiter looks at before the interview (github, social contributions, etc.) and the importance of tech communities.",
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
