import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import Navbar from "@/components/ui/Navbar";
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
        className={`${bodyFont.variable} ${headingFont.variable} bg-[#F5F1E8] text-[#101010] antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
