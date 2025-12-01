import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio — R1R3 & Risk1Reward3",
  description: "Our portfolio includes R1R3 for systematic trading automation and Risk1Reward3 for media and education. We invest where discipline becomes scalable.",
  alternates: {
    canonical: "https://akira.investments/portfolio",
  },
  openGraph: {
    title: "Portfolio — R1R3 & Risk1Reward3",
    description: "Our portfolio includes R1R3 for systematic trading automation and Risk1Reward3 for media and education. We invest where discipline becomes scalable.",
    url: "https://akira.investments/portfolio",
  },
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
