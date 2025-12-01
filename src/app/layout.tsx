import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akira Investments",
  description: "A holding company advancing systematic trading, intelligent automation, and financial media — compounding value through discipline.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml", sizes: "512x512" },
    ],
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Akira Investments",
    description: "Strategic capital powering disciplined financial innovation.",
    url: "https://akira.investments",
    siteName: "Akira Investments",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Akira Investments - The Clarity of Discipline",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akira Investments",
    description: "Strategic capital powering disciplined financial innovation.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
