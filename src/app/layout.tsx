import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
}

export const metadata: Metadata = {
  title: {
    default: "Akira Investments — Strategic Capital for Disciplined Innovation",
    template: "%s | Akira Investments"
  },
  description: "A holding company advancing systematic trading, intelligent automation, and financial media — compounding long-term value through disciplined investment.",
  metadataBase: new URL("https://akira.investments"),
  alternates: {
    canonical: "https://akira.investments/",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.svg",
  },
  openGraph: {
    siteName: "Akira Investments",
    type: "website",
    url: "https://akira.investments",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Akira Investments — Strategic Capital. Infinite Patience.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Akira Investments",
  "url": "https://akira.investments/",
  "logo": "https://akira.investments/og-image.png",
  "description": "A holding company advancing systematic trading, intelligent automation, and financial media — compounding long-term value through disciplined investment.",
  "foundingLocation": {
    "@type": "Place",
    "name": "Dubai, United Arab Emirates"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dubai",
    "addressCountry": "AE"
  },
  "sameAs": [
    "https://risk1reward3.com",
    "https://ashimnandi.com"
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  )
}
