import type { Metadata } from "next";
import { Inter_Tight, Inter, Archivo, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/motion/SmoothScroll";

const interTight = Inter_Tight({ subsets: ["latin"], variable: "--font-inter-tight", display: "swap" });
const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo", axes: ["wdth"], display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

const description =
  "Since 2020, founders, executives and operators in 21 countries have met over coffee they pay for themselves. One hour, a small group, and people who understand what you're carrying.";

export const metadata: Metadata = {
  title: "BYOC — Buy Your Own Coffee",
  description,
  metadataBase: new URL("https://byoc.global"),
  keywords: ["community", "founders", "executives", "coffee", "BYOC", "Buy Your Own Coffee", "meetups"],
  openGraph: {
    title: "BYOC — Buy Your Own Coffee",
    description,
    type: "website",
    url: "https://byoc.global",
    siteName: "BYOC",
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "BYOC — Buy Your Own Coffee" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BYOC — Buy Your Own Coffee",
    description,
    images: ["/twitter-image"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`h-full ${interTight.variable} ${archivo.variable} ${inter.variable} ${geistMono.variable}`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <SmoothScroll />
        <Navbar />
        <main className="flex-1 pt-[64px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
