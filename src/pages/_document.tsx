import Script from "next/script"
import { Html, Head, Main, NextScript } from "next/document"

//GA SCRIPT FROM - https://nextjs.org/docs/messages/next-script-for-ga
export default function Document() {

  console.log("process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID)
  return (
    <Html>
      <Head />
      <body>
        <Script async src={"https://www.googletagmanager.com/gtag/js?id=" + process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} strategy="afterInteractive"></Script>
        <Script id="google-analytics-script" strategy="afterInteractive">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
        `}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
