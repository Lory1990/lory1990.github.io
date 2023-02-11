import "../styles/globals.css"
import "../styles/icons.css"
import { useContext, useEffect, useState } from "react"
import Header, { HeaderElement } from "./Header"
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

const headerElements: HeaderElement[] = [
    { link: "/about", label: "About" },
    { link: "/projects", label: "Projects" },
    { link: "/events", label: "Events" }
    // { link: "/podcasts", label: "Podcasts" },
    // { link: "/contact-me", label: "Contact" }
]

function PersonalWebsite({ Component, pageProps }) {
    const [podcastData, setPodcastData] = useState<any>()
    Settings.defaultLocale = "en"

    useEffect(() => {
        fetchPodcastData().then(value => {
            setPodcastData(value)
        })
    }, [])

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
        </PodcastProvider>
    )
}

function WrapperComponent({ pageProps, Component }) {
    const router = useRouter();


    useEffect(() => {
        router.events.on('routeChangeStart', () => themeContext.setHeaderColor(HeaderColor.TRANSPARENT))
        return () => {
            router.events.off('routeChangeStart', () => themeContext.setHeaderColor(HeaderColor.TRANSPARENT))
        }
    }, []);

    const themeContext = useContext(ThemeContext)

    return <Component  {...pageProps} />
}

export default PersonalWebsite
