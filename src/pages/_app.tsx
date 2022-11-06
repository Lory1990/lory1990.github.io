import AOS from "aos";
import "../styles/globals.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header, { HeaderElement } from "../components/Header";
import MUIThemeProvider from "../MUIThemeProvider";
import Footer from "../components/Footer";
import { Box } from "@mui/material";

const headerElements: HeaderElement[] = [
  { link: "/", label: "Home" },
  { link: "/about", label: "About" },
  { link: "/projects", label: "Portfolio" },
  { link: "/events", label: "Events" },
  { link: "/podcasts", label: "Podcasts" },
  { link: "/contact-me", label: "Contact" },
];

function PersonalWebsite({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 450,
    });
  }, []);

  return (
    <MUIThemeProvider>
      <Box id="main-content" sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header headerElements={headerElements} />
        <Box id="main-content" sx={{ flex: 1 }}>
          <Component {...pageProps} />
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
    </MUIThemeProvider>
  );
}

export default PersonalWebsite;
