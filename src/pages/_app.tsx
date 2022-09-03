import AOS from "aos";
import '../styles/globals.css'
import "aos/dist/aos.css";
import { useEffect } from "react";

function PersonalWebsite({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      duration: 450,
    });
  }, []);

  return <Component {...pageProps} />
}

export default PersonalWebsite;