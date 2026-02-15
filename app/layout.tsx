import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import Navbar from "@/components/ui/Navbar";
import InteractiveGrid from "@/components/visuals/InteractiveGrid";
import "./globals.css";

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const headingFont = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Supragnya Purohith | UX/UI & Product Designer",
  description:
    "Strategic portfolio of Supragnya Purohith, UX/UI and Product Designer shaping clear, reliable digital systems."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${headingFont.variable} text-[#F4F1E8] antialiased`}
      >
        <InteractiveGrid />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
