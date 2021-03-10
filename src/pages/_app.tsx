import type { AppProps /*, AppContext */ } from 'next/app'
import '../styles/globals.css'
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

function PersonalWebsite({ Component, pageProps} : AppProps) {

  Sentry.setUser({ email: "anonymus@gmail.com" });
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    release: "my-personal-website@" + process.env.npm_package_version,
    environment: process.env.NODE_ENV,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  });

  return <Sentry.ErrorBoundary fallback={"A generic error has occurred"} >
    <Component {...pageProps} />
  </Sentry.ErrorBoundary>
}

export default PersonalWebsite
