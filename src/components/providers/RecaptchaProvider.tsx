"use client"

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

export default function RecaptchaProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
  if (!siteKey) return <>{children}</>

  return (
    <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
      {children}
    </GoogleReCaptchaProvider>
  )
}
