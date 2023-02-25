import { IHeroProps } from "../components/Hero"
import CategoryEnum from "../enums/CategoryEnum"
import CategroyEnum from "../enums/CategoryEnum"
import StackEnum from "../enums/StackEnum"
import IArticleData, { IArticleDataType } from "../types/IArticleData"

export interface IProject {
  slug: string
  title: string
  highlight?: boolean
  subtitle?: string
  boxDescription?: string
  description?: string
  date?: string
  team?: string
  role?: string
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
    tikTok?: string
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
    highlight: true,
    slug: "tryvium",
    title: "Tryvium",
    boxDescription: "Booking Platform  you can pay with crypto",
    team: "1 - 4 people",
    role: "Head of Frontend Development",
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
    highlight: true,
    slug: "tongy",
    title: "Tongy",
    team: "2 people",
    role: "Full Stack Developer",
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
    highlight: true,
    slug: "autoconnexa",
    title: "Autoconnexa",
    boxDescription: "Cars InsurTech Platform with veichle tracking",
    description:
      "Autoconnexa offers a mileage-based car insurance project, which offers a customized and convenient solution for drivers. With this type of insurance, the premium is calculated based on the amount of miles that are expected to be traveled during the coverage period. In this way, drivers can save on premiums compared to traditional insurance plans, which tend to be based on the duration of the coverage period. In addition, autoconnexa has a mobile app that allows you to easily manage your insurance plan and receive real-time assistance.",
    link: {
      web: "https://autoconnexa.it/"
    },
    article: [
      {
        type: IArticleDataType.VIDEO_TEXT,
        videoUrl: "https://www.youtube.com/watch?v=uBD1PdEJe0M",
        text: "Want to learn more about autoconnexa and its mileage-based car insurance project? Watch our explanatory video! In just a few minutes you can learn all about the features and benefits of this innovative service."
      }
    ],
    stack: [StackEnum.AWS, StackEnum.REACT, StackEnum.DOCKER, StackEnum.NODE, StackEnum.STRIPE],
    category: [CategoryEnum.INSURTECH],
    team: "1 - 4 people",
    role: "Team Leader",
    date: "2021-01-01",
    image: "/img/projects/autoconnexa/logo.png",
    background: "/img/projects/autoconnexa/cover.png"
  },
  {
    slug: "spire-energia",
    title: "Spire Energia",
    team: "1 person",
    stack: [StackEnum.VPS, StackEnum.NODE, StackEnum.STRIPE],
    category: [CategoryEnum.ESG],
    role: "Full Stack Developer",
    boxDescription: "A platform to monitor buildings consumptions",
    description:
      "Spire Energia is a platform developed in Wordpress that allows condominium administrators to manage the energy consumption of their buildings. This platform is designed to be user-friendly and easy to use, so that administrators can easily track energy usage and make informed decisions about how to reduce energy costs.  In addition, the platform has integrated a database of the latest radiators, giving administrators access to the most up-to-date information on energy-efficient heating options.",
    link: {
      web: "https://spire-energia.com/"
    },
    date: "2022-01-01",
    image: "/img/projects/spire-energia/logo-2.png",
    background: "/img/projects/spire-energia/cover.jpg",
    article: [
      {
        type: IArticleDataType.IMAGE,
        image: "/img/projects/spire-energia/cover-screen.png"
      }
    ]
  },
  {
    slug: "newo",
    title: "Newo",
    team: "1 - 2 people",
    role: "Head of development",
    stack: [StackEnum.AWS, StackEnum.DOCKER, StackEnum.KUBERNETES, StackEnum.NODE, StackEnum.REACT, StackEnum.STRIPE],
    category: [CategoryEnum.FINTECH],

    boxDescription: "Web application for invoice advance",
    description:
      "Newo is a revolutionary online platform that allows businesses to receive an advance on their outstanding invoices, without having to wait for payment from their clients. With Newo, you can get the cash you need to keep your business running smoothly, without having to resort to traditional loans or credit lines.",
    subtitle: "Web application for invoice advance",
    link: {
      web: "https://newopay.it/"
    },
    hero: {
      background: "#FDF8F4",
      color: "#FF7F3F"
    },
    date: "2022-01-01",
    image: "/img/projects/newo/logo-2.png",
    background: "/img/projects/newo/cover.jpg",
    desktopScreenshots: ["/img/projects/newo/desktop-01.svg", "/img/projects/newo/desktop-02.svg", "/img/projects/newo/desktop-03.svg", "/img/projects/newo/desktop-04.svg"]
  },
  {
    slug: "duck-internship",
    title: "Duck Internship",
    subtitle: "Firsti internship marketplace",
    description:
      "Duck Internship is a web application that offers recent graduates and young professionals the opportunity to gain practical experience in their field. As a Duck Intern, they will have the chance to work on real projects and challenges, collaborating with a team of experts and industry leaders through the platform. They will also have the support and guidance of a mentor, as well as access to a range of training and development resources.",
    team: "1 person",
    role: "Full Stack Developer",
    stack: [StackEnum.VPS, StackEnum.NODE, StackEnum.REACT],
    category: [CategoryEnum.HR],
    boxDescription: "The biggest platform for internships",
    image: "/img/projects/stage-air/logo.jpg",
    background: "/img/projects/stage-air/cover-2.jpeg",
    link: {
      web: "https://duckinternship.com/",
      linkedin: "https://www.linkedin.com/company/duckinternship/",
      tikTok: "https://www.tiktok.com/@duckinternship",
      instagram: "https://www.instagram.com/duck_internship/",
      facebook: "https://www.facebook.com/DuckInternship",
      youtube: "https://www.youtube.com/duck%20internship"
    },
    date: "2019"
  },
  {
    slug: "the-personal-trainer",
    title: "The Personal Trainer",
    boxDescription: "Fitness tracker full web with metrics",
    description:
      "ThePT is a Progressive Web App that can be installed on smartphones and also accessed online. It is dedicated to both personal trainers and athletes. It allows personal trainers to be contacted by athletes and provide training schedules directly through the App, and to track their progress during their consultation through training and body growth data. <br /> The platform consists of some standard modules that were brought online in less than a week. <ul><li>Login using mail</li><li>Social Login with Facebook, Google and Twitter</li> <li>Push Notifications</li><li>In App notifications</li><li>User administration </li><li>Knowledge Center</li><li> SendInBlue integration</li><li>Dashboard with marktìeting metrics</li></ul><br /> In addition, specific modules have been implemented:<ul><li>Creation of the workout plan </li><li>Monitoring of workouts</li><li>Monitoring of the athlete's body</li><li>Mechanism to meet personal trainer and athlete</li></ul>",
    image: "/img/projects/the-personal-trainer/logo-square.png",
    team: "2 people",
    role: "Head of development",
    stack: [StackEnum.VPS, StackEnum.DOCKER, StackEnum.NODE, StackEnum.REACT],
    category: [CategoryEnum.FITNESS],
    hero: {
      background: "linear-gradient(145deg, rgba(242,159,47,1) 0%, rgba(242,102,47,1) 100%)"
    },
    date: "2019",
    // desktopScreenshots: ["/img/projects/the-personal-trainer/desktop-01.jpg", "/img/projects/the-personal-trainer/desktop-02.jpg", "/img/projects/the-personal-trainer/desktop-03.png"],
    // mobileScreenshots: [
    //   "/img/projects/the-personal-trainer/mobile-1.jpg",
    //   "/img/projects/the-personal-trainer/mobile-2.jpg",
    //   "/img/projects/the-personal-trainer/mobile-3.jpg",
    //   "/img/projects/the-personal-trainer/mobile-4.jpg",
    //   "/img/projects/the-personal-trainer/mobile-5.jpg",
    //   "/img/projects/the-personal-trainer/mobile-6.jpg",
    //   "/img/projects/the-personal-trainer/mobile-7.jpg",
    //   "/img/projects/the-personal-trainer/mobile-8.jpg",
    //   "/img/projects/the-personal-trainer/mobile-9.gif",
    //   "/img/projects/the-personal-trainer/mobile-10.gif"
    // ],
    link: {
      instagram: "https://www.instagram.com/appthept/",
      playStore: "https://play.google.com/store/apps/details?id=it.thept"
    }
  },
  {
    slug: "comuncazione-per-personal-trainer",
    title: "Comunicazione per PT",
    team: "2 people",
    role: "Head of development",
    boxDescription: "Personal trainer online video portal",
    description:
      " This platform is designed to provide trainers with a wealth of resources to help them succeed in their careers using video lessons. These videos are uploaded to YouTube for easy upload and can be viewed inside the app.  Payment for access to the portal's resources is handled through PayPal.<br /> The platform consists of some standard modules that were brought online in less than a week. <ul><li>Login using mail</li><li>Push Notifications</li><li>In App notifications</li><li>User administration </li><li>Knowledge Center</li><li> SendInBlue integration</li><li>Dashboard with marktìeting metrics</li></ul>",
    subtitle: "Personal trainer online video portal",
    background: "/img/projects/comunicazione-per-personal-trainer/hero-background.png",
    image: "/img/projects/comunicazione-per-personal-trainer/square.jpg",
    date: "2018",
    stack: [StackEnum.VPS, StackEnum.DOCKER, StackEnum.NODE, StackEnum.REACT],
    category: [CategoryEnum.FITNESS, CategoryEnum.VIDEO_PORTAL]
    // desktopScreenshots: [
    //   "/img/projects/comunicazione-per-personal-trainer/desktop-1.jpg",
    //   "/img/projects/comunicazione-per-personal-trainer/desktop-2.jpg",
    //   "/img/projects/comunicazione-per-personal-trainer/desktop-3.jpg",
    //   "/img/projects/comunicazione-per-personal-trainer/desktop-4.jpg",
    //   "/img/projects/comunicazione-per-personal-trainer/desktop-5.jpg"
    // ]
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
    team: "2 people",
    role: "Head of development",
    boxDescription: "Platform to predict the price of all Cryptos",
    description:
      "The Cryptoforecast platform is a revolutionary integrated system in the crypto field, all useful information for the trader to operate on the markets has been centralized on a single platform. <br /> We developed the following modules: <ul><li>Forecast algorithm based on seasonality</li><li>Modular customizable market indices</li><li>Customizable forecast tools tailored to the needs of each trader</li><li>Categorization of all coins</li><li>Real-time monitoring of all coin values</li><li>Ability to download the history of all pairs of all exchanges</li><li>User and subscription monitoring system</li></ul>",
    subtitle: "The only platform to predict the price af all crypto values",
    date: "2017",
    stack: [StackEnum.VPS, StackEnum.NODE, StackEnum.REACT, StackEnum.PHP],
    category: [CategoryEnum.CRYPTO, CategoryEnum.TRADING],
    background: "/img/projects/cryptoforecast/cryptoforecast.jpg",
    image: "/img/projects/cryptoforecast/square-cryptoforecast-2.jpg"
    // desktopScreenshots: ["/img/projects/cryptoforecast/desktop-01.jpeg", "/img/projects/cryptoforecast/desktop-02.png", "/img/projects/cryptoforecast/desktop-03.jpg"]
  },
  {
    slug: "navium",
    title: "Navium",
    team: "2 people",
    role: "Head of development",
    boxDescription: "Marine tech startup specialized in damaged stability",
    description:
      "Navium, a startup founded by two young naval engineering graduates in 2012, developed a complete suite of products for the naval and boating world, including:<ul><li>A basic naval design software called Navium Faber</li><li>A cloud solution for managing ship stability during navigation called Delphi</li><li>An hydrostatic engine that could predict the course of a ship's internal flaw, also called Delphi</li></ul>",
    subtitle: "The all in one solution to predict ship damage onboard",
    date: "2014",
    image: "/img/projects/navium/card-logo.png",
    stack: [StackEnum.JAVA],
    category: [CategoryEnum.MARINETECH],
    background: "/img/projects/navium/card-background.png"
    // article: [
    // {
    //   type: IArticleDataType.TITLE,
    //   text: "Navium Faber"
    // },
    // {
    //   type: IArticleDataType.TEXT_IMAGE,
    //   text: 'La startup Navium nasce da due giovani ingegneri neolaureati in ingegneria navale nel 2012. Avevano sviluppato un suite completa ed integrata di prodotti orientati al mondo navale e nautico che comprende:\n\n<ul>\n    <li>Un software desktop di progettazione navale di base - <a href="#navium-faber">Navium Faber</a></li>\n    <li>Una soluzione cloud per la gestione della stabilità della nave durante la navigazione - <a href="#delphi">Delphi</a></li>\n    <li>Un motore idrostatiche che permetteva di prevedere l\'andamento di una falla all\'interno della nave - <a href="#delphi">Delphi</a></li>\n</ul>\n\n<h2><a id="navium-faber"></a>'
    // },
    // {
    //   type: IArticleDataType.TITLE,
    //   text: "Delphi"
    // }
    // ]
  }
]

export default projects
