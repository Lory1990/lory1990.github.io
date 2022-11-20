import { IHeroProps } from "../components/Hero";
import IArticleData, { IArticleDataType } from "../types/IArticleData";

export interface IProject{
    slug:string,
    title:string,
    subtitle?: string,
    description?:string,
    date?:string
    link?:{
        web?: string,
        instagram?: string,
        linkedin?: string,
        facebook?: string,
        youtube?: string
        github?:string,
        twitter?: string
    },
    githubLink?: string
    image?: string,
    background?: string,
    hideTitleOnCover?: boolean,
    article?: IArticleData[],
    tile?:{
        color?: string
    },
    hero?:IHeroProps
    stack?: string[],
    development?: string
}

const projects : IProject[] = [
    {
        "slug": "tryvium",
        "title": "Tryvium",
        "description": "Crypto Booking Platform",
        "subtitle": "The best crypto-friendly booking platform",
        "link": {
            "web": "https://tryvium.io",
            "facebook": "https://www.facebook.com/tryviumtravels",
            "instagram": "https://www.instagram.com/tryvium/",
            "linkedin": "https://www.linkedin.com/company/tryvium-travels-ltd/",
            "github": "https://github.com/tryvium-travels",
            "youtube": "https://www.youtube.com/c/Tryvium",
            "twitter": "https://twitter.com/TryviumTravels",
        },
        "date": "2022-01-01",
        "image": "/img/projects/tryvium/cover.jpg",
        "background":"/img/projects/tryvium/hero.png",
    },
    {
        "slug": "tongy",
        "title": "Tongy",
        "description": "Platform to study english for babies",
        "subtitle": "Platform to study english for babies",
        "link": {
            "web": "https://tongy.it/",
            "linkedin": "https://www.linkedin.com/company/tongybilingual/",
            "instagram": "https://www.instagram.com/tongy.bilingual/",
            "facebook": "https://www.facebook.com/tongy.bilingual"
        },
        "date": "2022-01-01",
        "image": "/img/projects/tongy/logo.png",
        "background": "/img/projects/tongy/cover.png",
        "hero":{
            "color": "#1FA79A"
        }
    },
    {
        "slug": "autoconnexa",
        "title": "Autoconnexa",
        "description": "InsurTech Platform for Cars",
        "link": {
            "web": "https://autoconnexa.it/",
        },
        "date": "2022-01-01",
        "image": "/img/projects/autoconnexa/logo.png",
        "background": "/img/projects/autoconnexa/cover.png",
    },
    {
        "slug": "spire-energia",
        "title": "Spire Energia",
        "description": "A platform to monitor buildings consumptions",
        "link": {
            "web":"https://spire-energia.com/",
        },
        "date": "2022-01-01",
        "image": "/img/projects/spire-energia/logo-2.png",
        "background": "/img/projects/spire-energia/cover.jpg",
    },
    {
        "slug": "newo",
        "title": "Newo",
        "description": "Web application for invoice advance",
        "link": {
            "web": "https://newopay.it/"
        },
        "date": "2022-01-01",
        "image": "/img/projects/newo/logo-2.png",
        "background": "/img/projects/spire-energia/cover.jpg",
    },
    {
        "slug": "stage-air",
        "title": "Stage Air",
        "description": "The biggest platform for internships",
        "date": "2019",
    },
    {
        "slug": "the-personal-trainer",
        "title": "The Personal Trainer",
        "description": "Fitness tracker",
        "date": "2022-01-01",
        link:{
            instagram: "https://www.instagram.com/appthept/",
        }
    },
    {
        "slug": "comuncazione-per-personal-trainer",
        "title": "Comunicazione Per Personal Trainer",
        "description": "Personal trainer online video portal",
        "subtitle": "Personal trainer online video portal",
        "background": "/img/projects/comunicazione-per-personal-trainer/hero-background.png",
        "image": "/img/projects/comunicazione-per-personal-trainer/image-background.jpg",
        "date": "2018",
    },
    {
        "slug": "yobu",
        "title": "Yobu",
        "subtitle": "A freamework to build apps faster and smarter",
        "description": "A freamework to build apps faster and smarter",
        "date": "2019",
    },
    {
        "slug": "cryptoforecast",
        "title": "Cryptoforecast",
        "description": "Platform to predict the price of all Cryptos",
        "subtitle": "The only platform to predict the price af all crypto values",
        "date": "2017 - 2019",
        "background": "/img/projects/cryptoforecast/cryptoforecast.jpg",
        "image": "/img/projects/cryptoforecast/cryptoforecast.jpg",
    },
    {
        "slug": "navium",
        "title": "Navium",
        "subtitle": "The all in one solution to predict ship damage onboard",
        "date": "2014 - 2017",
        "image": "/img/projects/navium/card-logo.png",
        "background": "/img/projects/navium/card-background.png",
        article: [
            {
                type: IArticleDataType.TEXT,
                text: 'La startup Navium nasce da due giovani ingegneri neolaureati in ingegneria navale nel 2012. Avevano sviluppato un suite completa ed integrata di prodotti orientati al mondo navale e nautico che comprende:\n\n<ul>\n    <li>Un software desktop di progettazione navale di base - <a href=\"#navium-faber\">Navium Faber</a></li>\n    <li>Una soluzione cloud per la gestione della stabilità della nave durante la navigazione - <a href=\"#delphi\">Delphi</a></li>\n    <li>Un motore idrostatiche che permetteva di prevedere l\'andamento di una falla all\'interno della nave - <a href=\"#delphi\">Delphi</a></li>\n</ul>\n\n<h2><a id=\"navium-faber\"></a>',
            },
            {
                type: IArticleDataType.TITLE,
                text: 'Navium Faber',
            },
            {
                type: IArticleDataType.TEXT_IMAGE,
                text: 'La startup Navium nasce da due giovani ingegneri neolaureati in ingegneria navale nel 2012. Avevano sviluppato un suite completa ed integrata di prodotti orientati al mondo navale e nautico che comprende:\n\n<ul>\n    <li>Un software desktop di progettazione navale di base - <a href=\"#navium-faber\">Navium Faber</a></li>\n    <li>Una soluzione cloud per la gestione della stabilità della nave durante la navigazione - <a href=\"#delphi\">Delphi</a></li>\n    <li>Un motore idrostatiche che permetteva di prevedere l\'andamento di una falla all\'interno della nave - <a href=\"#delphi\">Delphi</a></li>\n</ul>\n\n<h2><a id=\"navium-faber\"></a>',
            },
        ]
    },
]

export default projects;