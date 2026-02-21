import type { Metadata } from "next";
import { Inter, Instrument_Serif, Manrope } from "next/font/google"; // Instrument Serif (Italic) & Inter (as Geist fallback)
import Navbar from "@/components/ui/Navbar";
import InteractiveGrid from "@/components/visuals/InteractiveGrid";
import "./globals.css";

// Body/UI Font (Inter as Geist fallback)
const geist = Inter({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap"
});

// Editorial Italic Font
const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap"
});

// Primary Heading Font (Manrope) - Technical/Precision
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
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
        className={`${geist.variable} ${manrope.variable} ${instrumentSerif.variable} text-[#2D1B0D] antialiased bg-white font-sans`}
      >
        <InteractiveGrid />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
