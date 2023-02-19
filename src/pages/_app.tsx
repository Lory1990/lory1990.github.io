import "../styles/globals.css"
import "../styles/icons.css"
import { useContext, useEffect, useRef, useState } from "react"
import Header, { HeaderElement } from "../components/Header"
import MUIThemeProvider from "../MUIThemeProvider"
import Footer from "../components/Footer"
import { Box } from "@mui/material"
import PodcastPlayer from "../components/PodcastPlayer/PodcastPlayer"
import PodcastProvider from "../context/PodcastProvider"
import { fetchPodcastData } from "../client/PodcastClient"
import "@splidejs/react-splide/css"
import { Settings } from "luxon"
import ThemeProvider, { ThemeContext } from "../context/ThemeProvider"
import { useRouter } from "next/router"
import { HeaderColor } from "../types/HeaderColor"
import ContactForm, { ContactFormRule } from "../components/ContactForm"
import Contact from "./Contact"



const headerElements: HeaderElement[] = [
  { link: "/about", label: "About" },
  { link: "/projects", label: "Projects" },
  { link: "/events", label: "Events" }
  // { link: "/podcasts", label: "Podcasts" },
  // { link: "/contact-me", label: "Contact" }
]

const contactFormRules: ContactFormRule[] = [
  {
    route: "/",
    exact: true,
    title: "Are you interested in software development?",
    subtitle: "Let's have a chat together!"
  },
  {
    route: "/projects/[id]",
    title: "Did you like this project?",
    subtitle: "Contact me if you want to create a similar one with me. <br /> I am always looking for new opportunities to network and work with creative and motivated people."
  },
  {
    route: "/projects",
    exact: true,
    title: "Do like these projects?",
    subtitle: "Contact me 📩 I am here to develop your best project ever!"
  },
  {
    route: "/events",
    exact: true,
    title: "I am available for talks",
    subtitle: "Do you need a techinical speaker? Drop a message 👇"
  },
  {
    route: "/events/[id]",
    title: "Shall we do a webinar together?",
    subtitle: "Drop me a message 💬, I love partecipating to events!"
  }
  // title:"I am available for collaboration" subtitle:"Want to do a podcast with me?"
]



function PersonalWebsite({ Component, pageProps }) {
  const [podcastData, setPodcastData] = useState<any>()
  Settings.defaultLocale = "en"

  useEffect(() => { fetchPodcastData().then(value => setPodcastData(value)) }, [])

  return (
    <PodcastProvider>
      <MUIThemeProvider>
        <ThemeProvider>
          <Box id="main-page" sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>

            <Header headerElements={headerElements} />
            <Box id="main-content" sx={{ flex: 1 }}>
              <WrapperComponent Component={Component} pageProps={pageProps} />
              {/* <Component  {...pageProps} /> */}
            </Box>
            <Contact contactFormRules={contactFormRules} />

            <Footer
              githubLink="https://github.com/Lory1990"
              facebookLink="https://www.facebook.com/lory1990"
              linkedinLink="https://www.linkedin.com/in/lorenzodefrancesco"
              text1="Lorenzo De Francesco"
              text2="IT Manager"
              text3="Milano (MI)"
            />
          </Box>
          {podcastData && <PodcastPlayer list={podcastData.item} />}
        </ThemeProvider>
      </MUIThemeProvider>
    </PodcastProvider >
  )
}

function WrapperComponent({ pageProps, Component }) {
  const router = useRouter()

  useEffect(() => {
    router.events.on("routeChangeStart", () => themeContext.setHeaderColor(HeaderColor.TRANSPARENT))
    return () => {
      router.events.off("routeChangeStart", () => themeContext.setHeaderColor(HeaderColor.TRANSPARENT))
    }
  }, [])

  const themeContext = useContext(ThemeContext)

  return <Component {...pageProps} />
}

export default PersonalWebsite
