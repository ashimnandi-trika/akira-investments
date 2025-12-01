import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Leadership — Akira Investments",
  description: "Led by founder Ashim Nandi, delivering disciplined financial innovation and strategic capital allocation.",
  alternates: {
    canonical: "https://akira.investments/leadership",
  },
  openGraph: {
    title: "Leadership — Akira Investments",
    description: "Led by founder Ashim Nandi, delivering disciplined financial innovation and strategic capital allocation.",
    url: "https://akira.investments/leadership",
  },
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ashim Nandi",
  "jobTitle": "Founder & CEO",
  "worksFor": {
    "@type": "Organization",
    "name": "Akira Investments",
    "url": "https://akira.investments/"
  },
  "url": "https://akira.investments/leadership",
  "description": "Founder and CEO of Akira Investments, leading disciplined financial innovation and strategic capital allocation from Dubai.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dubai",
    "addressCountry": "AE"
  },
  "sameAs": [
    "https://ashimnandi.com",
    "https://www.linkedin.com/in/trikarealization/"
  ]
}

export default function LeadershipLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      {children}
    </>
  )
}
