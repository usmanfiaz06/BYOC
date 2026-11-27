import type { Metadata } from "next";
import { Inter_Tight, Inter, Archivo, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/motion/SmoothScroll";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL, site } from "@/lib/site";

const interTight = Inter_Tight({ subsets: ["latin"], variable: "--font-inter-tight", display: "swap" });
const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo", axes: ["wdth"], display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BYOC — Buy Your Own Coffee | Founders & executives meeting over coffee in 21 countries",
    template: "%s | BYOC — Buy Your Own Coffee",
  },
  description: site.description,
  applicationName: site.fullName,
  keywords: [
    "BYOC",
    "Buy Your Own Coffee",
    "BYOC community",
    "BYOC Global",
    "founder community",
    "founders meetup",
    "executive networking",
    "coffee meetup",
    "startup community Islamabad",
    "founders Riyadh",
    "founders Dubai",
    "founders Dublin",
    "founders Singapore",
    "founders San Francisco",
  ],
  authors: [{ name: "BYOC Global", url: SITE_URL }],
  creator: "BYOC Global",
  publisher: "BYOC Global",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    title: "BYOC — Buy Your Own Coffee",
    description: site.shortDescription,
    type: "website",
    url: SITE_URL,
    siteName: "BYOC — Buy Your Own Coffee",
    locale: "en_US",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "BYOC — Buy Your Own Coffee. 212+ gatherings in 21 countries since 2020." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BYOC — Buy Your Own Coffee",
    description: site.shortDescription,
    images: ["/og-image.jpg"],
  },
  category: "community",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`h-full ${interTight.variable} ${archivo.variable} ${inter.variable} ${geistMono.variable}`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <OrganizationJsonLd />
        <SmoothScroll />
        <Navbar />
        <main className="flex-1 pt-[64px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
