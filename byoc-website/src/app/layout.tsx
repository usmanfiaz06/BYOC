import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "BYOC — The Global Table for Builders",
  description:
    "3,200+ founders, operators, and investors across 21 countries. No stages, no sponsors — just real conversations over coffee.",
  metadataBase: new URL("https://byoc.global"),
  keywords: [
    "networking",
    "community",
    "founders",
    "startups",
    "coffee",
    "global",
    "BYOC",
    "investors",
    "operators",
  ],
  openGraph: {
    title: "BYOC — The Global Table for Builders",
    description:
      "140+ gatherings across 21 countries. 3,200+ founders, operators & investors — no stages, no sponsors, just real conversations over coffee.",
    type: "website",
    url: "https://byoc.global",
    siteName: "BYOC",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "BYOC — The Global Table for Builders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BYOC — The Global Table for Builders",
    description:
      "140+ gatherings across 21 countries. 3,200+ founders, operators & investors — no stages, no sponsors, just real conversations over coffee.",
    images: ["/twitter-image"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1 pt-[60px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
