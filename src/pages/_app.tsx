import { appWithTranslation } from 'next-i18next';
import '../styles/globals.css'

function PersonalWebsite({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default appWithTranslation(PersonalWebsite);