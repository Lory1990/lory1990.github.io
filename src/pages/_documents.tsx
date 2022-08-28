import Script from "next/script";
import { Html, Head, Main, NextScript } from "next/document";

//GA SCRIPT FROM - https://nextjs.org/docs/messages/next-script-for-ga
export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
            <Script id="google-analytics" strategy="afterInteractive">
            {`
                (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

                ga('create', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', 'auto');
                ga('send', 'pageview');
            `}
            </Script>
        )}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
