import { type } from "os"
import { IHeroProps } from "../components/Hero"
import CategoryEnum from "../enums/CategoryEnum"
import CategroyEnum from "../enums/CategoryEnum"
import StackEnum from "../enums/StackEnum"
import IArticleData, { IArticleDataType } from "../types/IArticleData"

export interface IProject {
    hilight?: boolean
    slug: string
    title: string
    subtitle?: string
    boxDescription?: string
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
    stack?: StackEnum[]
    category?: CategroyEnum[]
    development?: string
}

const projects: IProject[] = [
    {
        hilight: true,
        slug: "tryvium",
        title: "Tryvium",
        boxDescription: "Booking Platform  you can pay with crypto",
        subtitle: "The best crypto-friendly booking platform",
        description:
            "Tryvium is an online booking platform for hotels and accommodations were you can pay with your favourite crypto. It offers a variety of staying options in various destinations around the world. Users can search and compare hotel rates, read customer reviews, and book their stay directly from the website. Tryvium also offers a loyalty program to reward its most loyal customers with discounts and other benefits.",
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
        background: "/img/projects/tryvium/hero.png",
        category: [CategroyEnum.CRYPTO, CategroyEnum.TRAVEL],
        stack: [StackEnum.REACT, StackEnum.WEB3, StackEnum.CSS]
    },
    {
        slug: "tongy",
        title: "Tongy",
        boxDescription: "Platform to teach english to babies",
        description:
            "Tongy is an outstanding web application designed specifically to teach English to very young children in a fun and interactive way. It offers a wide range of online activities and games, each of which has been carefully selected to help children develop their language skills and become familiar with the English language in a natural way. In addition, Tongy offers individual lessons with native English speakers for personalized support. Children can access all of this conveniently from their browser, wherever they are.",
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
        stack: [StackEnum.AWS, StackEnum.REACT, StackEnum.DOCKER, StackEnum.NODE],
        category: [CategroyEnum.EDUCATIONAL, CategoryEnum.VIDEO_PORTAL],
        //https://www.digithon.it/startups/1059/tongy
        article: [
            {
                type: IArticleDataType.VIDEO_TEXT,
                videoUrl: "https://www.youtube.com/watch?v=Eu1MS4FwRqM",
                text: "The Tongy project was presented at Digital Innovation Tuscany (DigiTON), an event that brings together digital innovation experts from across Tuscany. The project, which offers the opportunity to teach English to very young children in a fun and interactive way, sparked great interest among the experts present at the event. Thanks to its intuitive interface and wide range of online activities and games, Tongy was enthusiastically received as an innovative tool for learning the English language. Tongy therefore received widespread positive feedback during its presentation at DigiTON and is expected to be a great success in the future."
            }
        ],
        hero: {
            color: "#1FA79A"
        }
    },
    {
        hilight: true,
        slug: "autoconnexa",
        title: "Autoconnexa",
        boxDescription: "Cars InsurTech Platform with veichle tracking",
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
        boxDescription: "A platform to monitor buildings consumptions",
        link: {
            web: "https://spire-energia.com/"
        },
        date: "2022-01-01",
        image: "/img/projects/spire-energia/logo-2.png",
        background: "/img/projects/spire-energia/cover.jpg"
    },
    {
        hilight: true,
        slug: "newo",
        title: "Newo",
        boxDescription: "Web application for invoice advance",
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
        boxDescription: "The biggest platform for internships",
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
        boxDescription: "Fitness tracker full web with metrics",
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
        boxDescription: "Personal trainer online video portal",
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
        boxDescription: "Platform to predict the price of all Cryptos",
        subtitle: "The only platform to predict the price af all crypto values",
        date: "2017 - 2019",
        background: "/img/projects/cryptoforecast/cryptoforecast.jpg",
        image: "/img/projects/cryptoforecast/cryptoforecast.jpg",
        desktopScreenshots: ["/img/projects/cryptoforecast/desktop-01.jpeg", "/img/projects/cryptoforecast/desktop-02.png", "/img/projects/cryptoforecast/desktop-03.jpg"]
    },
    {
        slug: "navium",
        title: "Navium",
        boxDescription: "Marine tech startup specialized in damaged stability",
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
