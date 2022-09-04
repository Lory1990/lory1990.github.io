import AOS from "aos";
import '../styles/globals.css'
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header, { HeaderElement } from '../components/Header'
import MUIThemeProvider from '../MUIThemeProvider'
import Footer from "../components/Footer";

const headerElements: HeaderElement[] = [
  { link: "/", label: "Home" },
  { link: "/about", label: "About" },
  { link: "/projects", label: "Portfolio" },
  { link: "/events", label: "Events" },
  { link: "/podcasts", label: "Podcasts" },
  { link: "/contact-me", label: "Contact" },
]

function PersonalWebsite({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      duration: 450,
    });
  }, []);

  return <MUIThemeProvider>
      <Header headerElements={headerElements} />
      <Component {...pageProps} />
      <Footer />
    </MUIThemeProvider>
}

export default PersonalWebsite;