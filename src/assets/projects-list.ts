import { IHeroProps } from "../components/Hero"
import IArticleData, { IArticleDataType } from "../types/IArticleData"

export interface IProject {
    slug: string
    title: string
    subtitle?: string
    description?: string
    date?: string
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
        playStore?: string
    }
    githubLink?: string
    image?: string
    background?: string
    hideTitleOnCover?: boolean
    article?: IArticleData[]
    tile?: {
        color?: string
    }
    hero?: IHeroProps
    stack?: string[]
    development?: string
}

const projects: IProject[] = [
    {
        slug: "tryvium",
        title: "Tryvium",
        description: "Booking Platform  you can pay with crypto",
        subtitle: "The best crypto-friendly booking platform",
        link: {
            web: "https://tryvium.io",
            facebook: "https://www.facebook.com/tryviumtravels",
            instagram: "https://www.instagram.com/tryvium/",
            linkedin: "https://www.linkedin.com/company/tryvium-travels-ltd/",
            github: "https://github.com/tryvium-travels",
            youtube: "https://www.youtube.com/c/Tryvium",
            twitter: "https://twitter.com/TryviumTravels"
        },
        date: "2022-01-01",
        image: "/img/projects/tryvium/cover.jpg",
        background: "/img/projects/tryvium/hero.png"
    },
    {
        slug: "tongy",
        title: "Tongy",
        description: "Platform to teach english to babies",
        subtitle: "Platform to teach english to babies",
        link: {
            web: "https://tongy.it/",
            linkedin: "https://www.linkedin.com/company/tongybilingual/",
            instagram: "https://www.instagram.com/tongy.bilingual/",
            facebook: "https://www.facebook.com/tongy.bilingual"
        },
        date: "2022-01-01",
        image: "/img/projects/tongy/logo.png",
        background: "/img/projects/tongy/cover.png",
        hero: {
            color: "#1FA79A"
        }
    },
    {
        slug: "autoconnexa",
        title: "Autoconnexa",
        description: "Cars InsurTech Platform with veichle tracking",
        link: {
            web: "https://autoconnexa.it/"
        },
        date: "2022-01-01",
        image: "/img/projects/autoconnexa/logo.png",
        background: "/img/projects/autoconnexa/cover.png"
    },
    {
        slug: "spire-energia",
        title: "Spire Energia",
        description: "A platform to monitor buildings consumptions",
        link: {
            web: "https://spire-energia.com/"
        },
        date: "2022-01-01",
        image: "/img/projects/spire-energia/logo-2.png",
        background: "/img/projects/spire-energia/cover.jpg"
    },
    {
        slug: "newo",
        title: "Newo",
        description: "Web application for invoice advance",
        subtitle: "Web application for invoice advance",
        link: {
            web: "https://newopay.it/"
        },
        date: "2022-01-01",
        image: "/img/projects/newo/logo-2.png",
        background: "/img/projects/newo/cover.jpg",
        desktopScreenshots: ["/img/projects/newo/desktop-01.svg", "/img/projects/newo/desktop-02.svg", "/img/projects/newo/desktop-03.svg", "/img/projects/newo/desktop-04.svg"]
    },
    {
        slug: "stage-air",
        title: "Stage Air",
        description: "The biggest platform for internships",
        image: "/img/projects/stage-air/logo.jpg",
        link: {
            web: "https://duckinternship.com/",
            linkedin: "https://www.linkedin.com/company/duckinternship/"
        },
        date: "2019"
    },
    {
        slug: "the-personal-trainer",
        title: "The Personal Trainer",
        description: "Fitness tracker full web with metrics",
        image: "/img/projects/the-personal-trainer/logo.png",
        date: "2019",
        desktopScreenshots: [
            "/img/projects/the-personal-trainer/desktop-01.jpg",
            "/img/projects/the-personal-trainer/desktop-02.jpg",
            "/img/projects/the-personal-trainer/desktop-03.jpg",
            "/img/projects/the-personal-trainer/desktop-04.svg"
        ],
        mobileScreenshots: [
            "/img/projects/the-personal-trainer/mobile-1.jpg",
            "/img/projects/the-personal-trainer/mobile-2.jpg",
            "/img/projects/the-personal-trainer/mobile-3.jpg",
            "/img/projects/the-personal-trainer/mobile-4.jpg",
            "/img/projects/the-personal-trainer/mobile-5.jpg",
            "/img/projects/the-personal-trainer/mobile-6.jpg",
            "/img/projects/the-personal-trainer/mobile-7.jpg",
            "/img/projects/the-personal-trainer/mobile-8.jpg",
            "/img/projects/the-personal-trainer/mobile-9.gif",
            "/img/projects/the-personal-trainer/mobile-10.gif"
        ],
        link: {
            instagram: "https://www.instagram.com/appthept/",
            playStore: "https://play.google.com/store/apps/details?id=it.thept"
        },
        article: [
            {
                type: IArticleDataType.TEXT,
                text: "ThePT è una Progressive Web App installabile sul proprio smartphone e anche consultabile online dedicata sia ai personal trainer che agli atleti. Permette ai personal trainers di essere contattati dagli atleti e di fornire delle schede di allenamento direttamente in App e seguire i loro progressi durante la loro consulenza attraverso dati di allenamento e di crescita corporea"
            },
            {
                type: IArticleDataType.TEXT,
                text: "Come tutte le nostre soluzioni è stato utilizzato il metodo YOBU per abbattere costi e tempi di sviluppo ed arrivare prima sul mercato. La piattaforma è composta da alcuni moduli standard che sono stati portati online in meno di una settimana"
            },
            {
                type: IArticleDataType.TEXT,
                text: "<ul><li>Login via mail</li><li>Social Login con Facebook, Google e TwitterProfili pubblici per i personal trainersNotifiche PushNotifiche in AppAmministrazione utentiKnowledge CenterIntegrazione con SendInBlueDashboard con metriche per il marketing</li></ul>"
            }
        ]
    },
    {
        slug: "comuncazione-per-personal-trainer",
        title: "Comunicazione per PT",
        description: "Personal trainer online video portal",
        subtitle: "Personal trainer online video portal",
        background: "/img/projects/comunicazione-per-personal-trainer/hero-background.png",
        image: "/img/projects/comunicazione-per-personal-trainer/image-background.jpg",
        date: "2018",
        desktopScreenshots: [
            "/img/projects/comunicazione-per-personal-trainer/desktop-1.jpg",
            "/img/projects/comunicazione-per-personal-trainer/desktop-2.jpg",
            "/img/projects/comunicazione-per-personal-trainer/desktop-3.jpg",
            "/img/projects/comunicazione-per-personal-trainer/desktop-4.jpg",
            "/img/projects/comunicazione-per-personal-trainer/desktop-5.jpg"
        ]
    },
    // {
    //     slug: "yobu",
    //     title: "Yobu",
    //     subtitle: "A freamework to build apps faster and smarter",
    //     description: "A freamework to build apps faster and smarter",
    //     date: "2019"
    // },
    {
        slug: "cryptoforecast",
        title: "Cryptoforecast",
        description: "Platform to predict the price of all Cryptos",
        subtitle: "The only platform to predict the price af all crypto values",
        date: "2017 - 2019",
        background: "/img/projects/cryptoforecast/cryptoforecast.jpg",
        image: "/img/projects/cryptoforecast/cryptoforecast.jpg",
        desktopScreenshots: ["/img/projects/cryptoforecast/desktop-01.jpeg", "/img/projects/cryptoforecast/desktop-02.png", "/img/projects/cryptoforecast/desktop-03.jpg"]
    },
    {
        slug: "navium",
        title: "Navium",
        description: "Marine tech startup specialized in damaged stability",
        subtitle: "The all in one solution to predict ship damage onboard",
        date: "2014 - 2017",
        image: "/img/projects/navium/card-logo.png",
        background: "/img/projects/navium/card-background.png",
        article: [
            {
                type: IArticleDataType.TEXT,
                text: 'La startup Navium nasce da due giovani ingegneri neolaureati in ingegneria navale nel 2012. Avevano sviluppato un suite completa ed integrata di prodotti orientati al mondo navale e nautico che comprende:\n\n<ul>\n    <li>Un software desktop di progettazione navale di base - <a href="#navium-faber">Navium Faber</a></li>\n    <li>Una soluzione cloud per la gestione della stabilità della nave durante la navigazione - <a href="#delphi">Delphi</a></li>\n    <li>Un motore idrostatiche che permetteva di prevedere l\'andamento di una falla all\'interno della nave - <a href="#delphi">Delphi</a></li>\n</ul>\n\n<h2><a id="navium-faber"></a>'
            },
            {
                type: IArticleDataType.TITLE,
                text: "Navium Faber"
            },
            {
                type: IArticleDataType.TEXT_IMAGE,
                text: 'La startup Navium nasce da due giovani ingegneri neolaureati in ingegneria navale nel 2012. Avevano sviluppato un suite completa ed integrata di prodotti orientati al mondo navale e nautico che comprende:\n\n<ul>\n    <li>Un software desktop di progettazione navale di base - <a href="#navium-faber">Navium Faber</a></li>\n    <li>Una soluzione cloud per la gestione della stabilità della nave durante la navigazione - <a href="#delphi">Delphi</a></li>\n    <li>Un motore idrostatiche che permetteva di prevedere l\'andamento di una falla all\'interno della nave - <a href="#delphi">Delphi</a></li>\n</ul>\n\n<h2><a id="navium-faber"></a>'
            }
        ]
    }
]

export default projects
