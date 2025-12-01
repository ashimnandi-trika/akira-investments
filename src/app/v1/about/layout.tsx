import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Akira Investments — Philosophy of Disciplined Capital",
  description: "We build systems that compound trust and capital by merging technology, discipline, and education across financial markets.",
  alternates: {
    canonical: "https://akira.investments/about",
  },
  openGraph: {
    title: "About Akira Investments — Philosophy of Disciplined Capital",
    description: "We build systems that compound trust and capital by merging technology, discipline, and education across financial markets.",
    url: "https://akira.investments/about",
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
