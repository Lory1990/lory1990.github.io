import IArticleData, { IArticleDataType } from "../types/IArticleData";

export interface IProject{
    slug:string,
    title:string,
    subtitle?: string,
    description?:string,
    date?:string
    link?:string,
    githubLink?: string
    image?: string,
    background?: string,
    article?: IArticleData[]
}

const projects : IProject[] = [
    {
        "slug": "tryvium",
        "title": "Tryvium",
        "subtitle": "Google Developer Group",
        "description": "The Google Developer Group is a collection of developers and developers who have been involved in the development of the group.",
        "link": "https://developers.google.com/",
        "date": "2022-01-01",
        "image": "https://developers.google.com/images/branding/google_developer_group.png",
    },
    {
        "slug": "tongy",
        "title": "Tongy",
        "subtitle": "Google Developer Group",
        "description": "The Google Developer Group is a collection of developers and developers who have been involved in the development of the group.",
        "link": "https://tongy.it/",
        "date": "2022-01-01",
        "image": "https://developers.google.com/images/branding/google_developer_group.png",
    },
    {
        "slug": "autoconnexa",
        "title": "Autoconnexa",
        "description": "The Google Developer Group is a collection of developers and developers who have been involved in the development of the group.",
        "link": "https://developers.google.com/",
        "date": "2022-01-01",
        "image": "https://developers.google.com/images/branding/google_developer_group.png",
    },
    {
        "slug": "spire-energia",
        "title": "Spire Energia",
        "description": "The Google Developer Group is a collection of developers and developers who have been involved in the development of the group.",
        "link": "https://developers.google.com/",
        "date": "2022-01-01",
        "image": "https://developers.google.com/images/branding/google_developer_group.png",
    },
    {
        "slug": "newo",
        "title": "Newo",
        "description": "The Google Developer Group is a collection of developers and developers who have been involved in the development of the group.",
        "link": "https://developers.google.com/",
        "date": "2022-01-01",
        "image": "https://developers.google.com/images/branding/google_developer_group.png",
    },
    {
        "slug": "stage-air",
        "title": "Stage Air",
        "description": "The Google Developer Group is a collection of developers and developers who have been involved in the development of the group.",
        "link": "https://developers.google.com/",
        "date": "2022-01-01",
        "image": "https://developers.google.com/images/branding/google_developer_group.png",
    },
    {
        "slug": "the-personal-trainer",
        "title": "The PT",
        "description": "The Google Developer Group is a collection of developers and developers who have been involved in the development of the group.",
        "link": "https://developers.google.com/",
        "date": "2022-01-01",
        "image": "https://developers.google.com/images/branding/google_developer_group.png",
    },
    {
        "slug": "comuncazione-per-personal-trainer",
        "title": "Comunicazione Per Personal Trainer",
        "description": "The Google Developer Group is a collection of developers and developers who have been involved in the development of the group.",
        "link": "https://developers.google.com/",
        "date": "2022-01-01",
        "image": "https://developers.google.com/images/branding/google_developer_group.png",
    },
    {
        "slug": "yobu",
        "title": "Yobu",
        "subtitle": "The all in one solution to predict ship damage onboard",
        "description": "The Google Developer Group is a collection of developers and developers who have been involved in the development of the group.",
        "date": "2014",
        "image": "https://developers.google.com/images/branding/google_developer_group.png",
    },
    {
        "slug": "cryptoforecast",
        "title": "Cryptoforecast",
        "subtitle": "Cryptoforecast",
        "description": "The Google Developer Group is a collection of developers and developers who have been involved in the development of the group.",
        "link": "https://developers.google.com/",
        "date": "2022-01-01",
        "image": "https://developers.google.com/images/branding/google_developer_group.png",
    },
    {
        "slug": "navium",
        "title": "Navium",
        "subtitle": "The all in one solution to predict ship damage onboard",
        "date": "2012 - 2014",
        "image": "/img/navium/card-logo.png",
        "background": "/img/navium/card-background.png",
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