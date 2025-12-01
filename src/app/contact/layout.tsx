import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Akira Investments — Investor & Partner Inquiries",
  description: "Get in touch with Akira Investments for partnerships, investor relations, and strategic collaboration.",
  alternates: {
    canonical: "https://akira.investments/contact",
  },
  openGraph: {
    title: "Contact Akira Investments — Investor & Partner Inquiries",
    description: "Get in touch with Akira Investments for partnerships, investor relations, and strategic collaboration.",
    url: "https://akira.investments/contact",
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
