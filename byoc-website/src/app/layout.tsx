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
      "The community where founders, operators, and investors actually meet. 140+ gatherings. 21+ countries. Zero pretense.",
    type: "website",
    url: "https://byoc.global",
    siteName: "BYOC",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BYOC — The Global Table for Builders",
    description:
      "3,200+ founders, operators & investors across 21 countries. No stages, no sponsors — just real conversations over coffee.",
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
