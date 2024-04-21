import { IHeroProps } from "../components/Hero"
import { IPodcastList } from "../components/PodcastList"
import IArticleData, { IArticleDataType } from "../types/IArticleData"

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
  article?: IArticleData[]
  isOnline: boolean
  venue?: string
  hideTitleOnCover?: boolean
  hero?: IHeroProps
  podcast?: IPodcastList
}

const events: IEvent[] = [
  {
    title: "Come hostare la tua startup 100% su Azure, non solo l'app!",
    slug: "come-hostare-la-tua-startup-100-su-azure-non-solo-lapp",
    isOnline: false,
    venue: "Microsoft House Milano",
    date: "2024-04-18",
    link: "https://www.azuremeetupmilano.it/e/sessione/3444/Come-hostare-la-tua-startup-100-su-Azure-non-solo-l-app",
    description:
      "Pensiamo sempre al cloud per creare piattaforme web ma Azure ci offre molto di più e legarci a questo ambiente ha molti vantaggi. Su Azure è possibile creare un azienda full remote, collegare tutte persone, le risorse e gli applicativi web insieme, per essere sempre connessi, sicuri e autenticati in SSO. Sarà un talk che ripercorre un anno di lavoro in azienda: partiremo dall'identificazione dei dipendenti e dei loro PC con Azure Entra ID per arrivare allo sviluppo delle piattaforme web distribuite su cloud Azure passando per tutti gli strumenti no-code che velocizzano tutto il processo."
  },
  {
    title: "Come parlano i software?",
    slug: "come-parlano-i-software",
    isOnline: false,
    venue: "Milano Luiss Hub",
    date: "2024-04-16",
    video: "https://www.youtube.com/watch?v=-aVbE0pEkIo",
    description:
      "Ti sei mai chiesto come i software possano 'parlare' tra loro? Bene, preparati a immergerti nel mondo affascinante delle comunicazioni tra software. In questo Talk ti guiderò attraverso un viaggio nel modo in cui i software comunicano, esplorando le molteplici strade che essi percorrono per scambiarsi informazioni e dati. Pronti a scoprire come REST API, Websockets, Server Sent Events, codice e TCP si intrecciano per creare una rete di connessioni che sostiene il tessuto digitale del nostro mondo moderno?"
  },
  {
    title: "Prendere in gestione un software scritto da altri",
    slug: "prendere-in-gestione-un-software-scritto-da-altri",
    isOnline: false,
    venue: "Dev Fest Alps 2023",
    date: "2023-12-02",
    image: "/img/events/2022-gdg-triveneto/badge.webp",
    link: "https://gdg.community.dev/events/details/google-gdg-torino-presents-devfest-alps-2023/"
  },
  {
    title: "I passi giusti per creare una piattaforma solida e scalabile",
    slug: "i-passi-giusti-per-creare-una-piattaforma-solida-e-scalabile",
    isOnline: false,
    venue: "Dev Fest Trento 2023",
    date: "2023-11-11",
    image: "/img/events/2022-gdg-triveneto/badge.webp",
    link: "https://gdg.community.dev/events/details/google-gdg-trento-presents-devfest-trento-2023/"
  },
  {
    title: "Come fare il grande passo: da sviluppatore a manager",
    slug: "come-fare-il-grande-passo-da-sviluppatore-a-manager",
    isOnline: false,
    venue: "GDG Cloud",
    date: "2023-10-31",
    image: "/img/gdg-cloud-milano.webp",
    description:
      "If you want to transform your career from a developer to a manager, increase your salary, and lead teams of people collaborating to create a product, this talk is for you! Becoming a technical manager is a job that no one teaches you. At some point, you just dive in and hope for the best... soon you'll encounter issues like overly technical language, financial matters, limited resources, and the challenge of balancing numerous requests. Wouldn't it be better to have a guide? A concise summary to start off on the right foot? Well, this session is a complete tutorial on how to be the best IT manager ever!",
    shortDescription:
      "Transform your career from developer to manager, increase salary, and lead collaborative teams. This session offers essential guidance on becoming the best IT manager, addressing technical challenges and resource constraints.",
    link: "https://gdg.community.dev/gdg-cloud-milano/",
    hero: {
      background: "linear-gradient(145deg, rgba(5,51,113,1) 0%, rgba(45,116,205,1) 100%);"
    }
  },
  {
    title: "Sviluppiamo una web app in TDD con Cypress",
    slug: "sviluppiamo-una-web-app-in-tdd-con-cypress",
    image: "/img/events/working-software.png",
    isOnline: false,
    venue: "MotorK",
    date: "2023-06-30",
    shortDescription:
      "All talk about and would like to do TDD, but how do we do it? In this workshop, we will develop a web app in React together, starting from the definition of E2E tests written with Cypress.",
    description:
      "All talk about and would like to do TDD, but how do we do it? In this workshop, we will develop a web app in React together, starting from the definition of E2E tests written with Cypress.",
    link: "https://www.agilemovement.it/workingsoftware/",
    hero: {
      background: "linear-gradient(145deg, rgba(46,47,54,1) 6%, rgba(106,107,116,1) 64%, rgba(92,177,104,1) 85%, rgba(77,247,91,1) 100%)"
    }
  },
  {
    title: "Data protection e Cyber Security: la tutela della privacy nella filiera del credito",
    slug: "data-protection-e-cyber-security-la-tutela-della-privacy-nella-filiera-del-credito",
    image: "/img/events/fiera-del-credito.png",
    isOnline: false,
    venue: "Fiera del Credito",
    date: "2023-05-23",
    description:
      "Le istituzioni finanziari e gli operatori del credito sono tenuti a trattare i dati personali dei clienti in linea con i dettami della normativa sulla privacy. Con i relatori del panel indagheremo quali sono gli obblighi, le opportunità e le criticità del GDPR per chi lavora nel settore del credito, anche alla luce del rapido sviluppo digitale e dei rischi informatici connessi.",
    hero: {
      background: "linear-gradient(145deg, rgba(37,55,71,1) 6%, rgba(52,142,184,1) 42%, rgba(187,176,58,1) 80%, rgba(149,86,59,1) 100%)"
    },
    article: [
      {
        type: IArticleDataType.TEXT_IMAGE,
        imageAlt: "Data protection e Cyber Security: la tutela della privacy nella filiera del credito",
        imageWidth: 800,
        imageHeight: 450,
        image: "/img/events/2023-credit-week-cyber-security.jpeg",
        text: "Panel dedicated to data protection and cybersecurity, to investigate the obligations, opportunities, and challenges of GDPR for professionals working in the credit sector, also in light of rapid digital development and associated cyber risks."
      }
    ]
  },
  {
    title: "Resilienza e proattività per la sicurezza dell’ecosistema aziendale",
    slug: "resilienza-e-proattivita-per-la-sicurezza-dell-ecosistema-aziendale",
    subtitle: "I più efficaci strumenti di difesa e sicurezza digitale",
    link: "https://video.milanofinanza.it/video/evoluzione-delle-strategie-di-protezione-dal-cybercrime-nei-mercati-finanziari-IrYPAMXyFIoY",
    isOnline: true,
    venue: "ClassCnbc (Sky 507)",
    image: "/img/events/italia-fintech.png",
    date: "2023-05-22",
    hero: {
      background: "linear-gradient(157deg, rgba(87,160,237,1) 30%, rgba(124,29,230,1) 100%)"
    },
    article: [
      {
        type: IArticleDataType.TEXT_IMAGE,
        imageAlt: "Resilienza e proattività per la sicurezza dell’ecosistema aziendale",
        imageWidth: 500,
        imageHeight: 500,
        image: "/img/events/2023-italia-fintech-cyber-security/cover.jpeg",
        text: "During the meeting, the best strategies and most effective digital defense and security tools for companies and public administration will be discussed, aiming to transition from outdated defense strategies to a proactive approach towards threats within a digital ecosystem."
      }
    ]
  },
  {
    title: "Come sviluppare un reparto IT performante",
    slug: "come-sviluppare-un-reparto-it-performante",
    subtitle: "La mia esperienza dopo un anno di management",
    date: "2023-05-17",
    image: "/img/events/cto_mastermind.png",
    description:
      "Come può un IT Manager costruire e poi sviluppare un reparto IT performante? E come fare a costruire da zero il miglior marketplace per gli imprenditori 2.0 creando al contempo il miglior ambiente di lavoro per tutti gli sviluppatori?",
    isOnline: true,
    video: "https://www.youtube.com/watch?v=9zg1QeWjfUQ",
    venue: "CTO Mastermind",
    podcast: {
      apple: "https://podcasts.apple.com/it/podcast/come-sviluppare-un-reparto-it-performante-cto-show/id1241632035?i=1000613325812",
      google:
        "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5jYXB0aXZhdGUuZm0vdGhlLWN0by1wb2RjYXN0Lw/episode/NmZmZjNlNTktMDUxMi00MWFkLWFlOGQtNmQ4ZDQ1Y2RlMmIx?sa=X&ved=0CAUQkfYCahcKEwiwxrmEmf7-AhUAAAAAHQAAAAAQAQ",
      spotify: "https://open.spotify.com/episode/4aQwGIaz8kERMiPZTtloMe"
    },
    hero: {
      background: "linear-gradient(157deg, rgba(87,160,237,1) 30%, rgba(124,29,230,1) 100%)"
    }
  },
  {
    title: "Un Tool zero-config per monitorare le attività degli utenti",
    shortDescription: "No more fires in production with DataDog",
    description:
      "Are you still using Google Analytics to monitor your site? Did you know that there is a zero-config tool that allows you to incorporate Hotjar, Analytics and many other monitoring tools? <br /> What if I told you that this tool is also able to monitor frontend and backend errors in order to make it easier for those who support production users? <br /> In this talk we will talk about DataDog, the ultimate tool for monitoring your application and obtaining metrics that allow you to create a data-based development and maintenance process for your application.",
    slug: "un-tool-zero-config-per-monitorare-le-attivita-degli-utenti",
    video: "https://www.youtube.com/watch?v=9m0VBf1swsk",
    venue: "React JS Milano",
    link: "https://www.meetup.com/it-IT/react-js-milano/events/292297518/",
    date: "2023-03-31",
    image: "/img/events/2022-frontend-scalabile/logo.png",
    isOnline: false,
    hero: {
      background: "linear-gradient(135deg, hsla(267, 58%, 41%, 1) 0%, hsla(266, 58%, 72%, 1) 100%)"
    }
  },
  {
    slug: "come-creare-un-frontend-scalabile-robusto-e-coerente",
    title: "Come creare un Frontend scalabile, robusto e coerente",
    subtitle: "Con l'aiuto di Storybook e del Design System",
    shortDescription: "Sotrybook is your best friend if you need a scalable frontend",
    description: "In this webinar we will see how to use Stroybook to creare a coherent frontend with reusable components.",
    image: "/img/events/2022-frontend-scalabile/logo.png",
    venue: "React JS Milano",
    link: "https://www.meetup.com/it-IT/react-js-milano/events/282339759/",
    date: "2021-12-14",
    isOnline: false,
    hero: {
      background: "linear-gradient(145deg, rgba(239,93,94,1) 0%, rgba(125,36,36,1) 100%)"
    }
  },
  {
    title: "WANNABE MANAGER IN ICT",
    slug: "wanna-be-manager-in-ict",
    subtitle: "Tool e metodologie per gestire un team IT in maniera efficace",
    description:
      "In this webinar i will discuss about tools and methodologies in project management. Specifically, he covers task management, one-to-one meetings, change management, management tools such as Excel, Jira, and Notion, work tools such as Git and SonarQube, and maintaining a project-oriented mindset on a daily basis.",
    shortDescription: "Tool e metodologie per gestire un team IT in maniera efficace",
    date: "2023-04-19",
    image: "/img/events/lavoro_digitale_italia.jpeg",
    isOnline: true,
    venue: "Lavoro Digitale Italia",
    link: "https://lavorodigitaleitalia.it/wannabe-manager-in-ict-hard/",
    hero: {
      background: "linear-gradient(to right top, #736CFF, #BCBAE6);"
    }
  },
  {
    title: "Da ingegnere navale a CTO",
    slug: "da-ingegnere-navale-a-cto",
    description:
      "I was interviewed by the Pointer Podcast about my incredible career. During the interview, we discussed why I chose managerial roles and the challenges I faced along the way. Towards the end, we delved into the role of the IT Manager and the characteristics that an IT department should have to be effective. Finally, we discussed how to create a development factory in a company.",
    date: "2023-05-11",
    image: "/img/events/pointer_podcast.jpeg",
    isOnline: true,
    venue: "Pointer Podcast",
    link: "https://pointerpodcast.it/p/pointer152-da-ingegnere-navale-a-cto-con-lorenzo-de-francesco/",
    podcast: {
      apple: "https://podcasts.apple.com/it/podcast/pointer-152-da-ingegnere-navale-a-cto-con-lorenzo/id1465505870?i=1000612629961",
      google:
        "https://podcasts.google.com/feed/aHR0cHM6Ly9wb2ludGVycG9kY2FzdC5pdC9pbmRleC54bWw/episode/aHR0cHM6Ly9wb2ludGVycG9kY2FzdC5pdC9wL3BvaW50ZXIxNTItZGEtaW5nZWduZXJlLW5hdmFsZS1hLWN0by1jb24tbG9yZW56by1kZS1mcmFuY2VzY28v?sa=X&ved=0CAUQkfYCahcKEwiw2ZfjgPL-AhUAAAAAHQAAAAAQAQ",
      spotify: "https://open.spotify.com/episode/3poBp7zyODFFekfVxu4GJQ"
    },
    hero: {
      background: "linear-gradient(to right top, #F7297F, #000000, #04DFE4);"
    }
  },
  {
    title: "Colloquio tecnico per neolaureati, tips&tricks",
    slug: "colloquio-tecnico-per-neolaureati-tips-and-tricks",
    description: "In this webinar with opinno i will give some Tips and tricks to Junior developers to have a great performance at job interview",
    date: "2022-06-21",
    venue: "YouTube",
    isOnline: true,
    image: "/img/opinno.jpeg",
    hero: {
      background: "linear-gradient(to right top, #67a75c, #5eb255, #52bd4e, #41c847, #20d33e);"
    }
  },
  {
    title: "Colmare il debito tecnico",
    subtitle: "TECH ITALIA",
    description: "In this round table we will discuss together on how to delete the tecnicval debit in large enterprise applications",
    slug: "tech-italia-colmare-il-debito-tecnico",
    date: "2022-06-23",
    image: "/img/youtube-live.png",
    venue: "YouTube",
    isOnline: true,
    hero: {
      background: "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);"
    }
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
    video: "https://www.youtube.com/watch?v=zEbEeWKwfsQ",
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
      "In this webinar we will see together what are the first steps as a new employee in a company. I will share the ToDo List of all stuff to do in order to start the right way your new Job!",
    link: "https://www.tutored.me/it/experiences/16361/",
    video: "https://www.youtube.com/watch?v=of2erri5oCk",
    date: "2022-09-21",
    venue: "Tutored",
    image: "/img/tutored-logo.png",
    cover: "/img/events/tutored-background.svg",
    isOnline: true
  },
  {
    slug: "guida-pratica-alla-gestione-di-un-prodotto-it",
    title: "Guida pratica alla gestione di un prodotto IT",
    subtitle: "Because there is no manual to be a great IT manager",
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
    title: "Deploy in ambienti critici",
    subtitle: "Feat Vincenzo Raimondo",
    slug: "deploy-in-ambienti-critici-quando-nulla-puo-andare-storto",
    shortDescription: "When nothing can go wrong",
    description:
      "Sometimes deployments should not go wrong, especially when it comes to systems with millions of users. That's why maximum coordination and well-defined procedures are necessary. Join Vincenzo and I on this webinar dedicated to deploying giant software systems.",
    image: "/img/youtube-live.png",
    venue: "YouTube",
    video: "https://www.youtube.com/watch?v=loQ54XKbKCw",
    date: "2021-11-18",
    isOnline: true,
    hero: {
      background: "linear-gradient(to right top, #fb0801, #fb5800, #f78000, #f2a200, #ebc012);"
    }
  },
  {
    title: "TeclaSystem dove si creano software per palinsesti TV",
    shortDescription: "Interview with a developer of tv shows editor",
    description: "Interview with a developer of tw shows editor",
    slug: "teclasystem-dove-si-creano-software-per-palinsesti-tv",
    subtitle: "Feat Emanuiele Gurini",
    video: "https://www.youtube.com/watch?v=n9CfAbduFAk",
    image: "/img/youtube-live.png",
    date: "2021-10-28",
    venue: "YouTube",
    isOnline: true,
    hero: {
      background: "linear-gradient(to right top, #fb0801, #fb5800, #f78000, #f2a200, #ebc012);"
    }
  },
  {
    title: "Con le architetture disaccoppiate è meglio!",
    slug: "con-le-architetture-disaccoppiate-e-meglio",
    subtitle: "Feat Simone Checcoli",
    shortDescription: "A practical demonstration of how microservices should interact",
    description: "A practical demonstration of how microservices should interact using PubSub events to share data",
    image: "/img/youtube-live.png",
    venue: "YouTube",
    video: "https://www.youtube.com/watch?v=rZ5TFCeWXXQ",
    date: "2021-11-24",
    isOnline: true,
    hero: {
      background: "linear-gradient(to right top, #fb0801, #fb5800, #f78000, #f2a200, #ebc012);"
    }
  },
  {
    title: "Chat With UX/UI",
    slug: "chat-with-uxui-filomena-sepe",
    shortDescription: "Carrer path of a UX/UI designer",
    subtitle: "Feat Filomena Sepe",
    description: "Carrer path of a UX/UI designer and how to interact with developers.",
    image: "/img/youtube-live.png",
    date: "2021-11-10",
    venue: "YouTube",
    video: "https://youtu.be/0nf1SQNDckY",
    isOnline: true,
    hero: {
      background: "linear-gradient(to right top, #fb0801, #fb5800, #f78000, #f2a200, #ebc012);"
    }
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
    venue: "YouTube",
    date: "2021-10-13",
    isOnline: true,
    hero: {
      background: "linear-gradient(to right top, #fb0801, #fb5800, #f78000, #f2a200, #ebc012);"
    }
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
    hero: {
      background: "linear-gradient(to right top, #fb0801, #fb5800, #f78000, #f2a200, #ebc012);"
    }
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
    venue: "YouTube",
    date: "2021-12-01",
    isOnline: true,
    hero: {
      background: "linear-gradient(to right top, #fb0801, #fb5800, #f78000, #f2a200, #ebc012);"
    }
  },
  {
    title: "Il team leader cosa fa?",
    subtitle: "Feat Vincenzo Raimondo",
    shortDescription: "A brief story of a typical team leader day feat Vincenzo",
    description:
      "In this video, we will delve into the crucial role that an IT Team Leader plays within a company. <br /> As the head of the IT team, the IT Team Leader is responsible for managing and supervising the team to ensure that projects are completed efficiently and effectively. They also play a key role in setting goals and objectives for the team, as well as in the planning and coordination of resources. <br /> During the webinar, we will cover the various responsibilities and duties of an IT Team Leader",
    slug: "il-team-leader-cosa-fa",
    video: "https://www.youtube.com/watch?v=esVxIrfWdIY",
    date: "2021-12-22",
    image: "/img/youtube-live.png",
    venue: "YouTube",
    isOnline: true,
    hero: {
      background: "linear-gradient(to right top, #fb0801, #fb5800, #f78000, #f2a200, #ebc012);"
    }
  },
  {
    slug: "simulazione-di-colloquio-per-back-end-developer",
    subtitle: "Questions, exercises and best practices",
    video: "https://www.youtube.com/watch?v=BsvwJi1seoQ",
    shortDescription: "In this webinar, we will be discussing some tips and tricks for acing the technical interview for a Junior Backend Developer.",
    description: "In this webinar, we will be discussing some tips and tricks for acing the technical interview for a Junior Backend Developer.",
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
    isOnline: true,
    hero: {
      background: "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);"
    }
  },
  {
    slug: "come-si-supera-il-colloquio-tecnico-domande-esercizi-e-best-practice",
    shortDescription: "In a technical interview what is the best way to answer the interviewer? how can I be the best? I will answer to all questions in this webinar",
    description:
      "The selection process includes a moment in which the candidate's technical skills are assessed. The technical interview, therefore, is a crucial moment because it offers the possibility to put into practice the skills learned during the course of study or in previous work experiences in front of a company manager.<br />  This webinar is focused on the analysis of some real cases, starting from the exercises and questions submitted to a candidate to continue on what are the best ways to respond. <br /> Furthermore, there will be a focus on what a recruiter looks at before the interview (github, social contributions, etc.) and the importance of tech communities.",
    date: "2022-01-31",
    title: "Come si supera il colloquio tecnico?",
    video: "https://www.youtube.com/watch?v=g66h9TUEKAk",
    subtitle: "Questions, exercises and best practices",
    link: "https://www.tutored.me/it/experiences/15090",
    image: "/img/tutored-logo.png",
    cover: "/img/events/tutored-background.svg",
    isOnline: true,
    venue: "Tutored"
  }
]

export default events
