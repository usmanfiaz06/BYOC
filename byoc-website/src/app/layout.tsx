import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "BYOC — Buy Your Own Coffee | The World's Most Authentic Networking Community",
  description:
    "Join 3,200+ founders, investors, and builders across 21+ countries. No stages, no sponsors — just real conversations over coffee.",
  keywords: [
    "networking",
    "community",
    "founders",
    "startups",
    "coffee",
    "global",
    "BYOC",
  ],
  openGraph: {
    title: "BYOC — Buy Your Own Coffee",
    description:
      "The world's most authentic networking community. 80+ meetups. 21+ countries. 3,200+ members.",
    type: "website",
    url: "https://byoc.global",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
