import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display } from "next/font/google";
import Navbar from "@/components/ui/Navbar";
import InteractiveGrid from "@/components/visuals/InteractiveGrid";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit", // Replacing Aventa
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["normal", "italic"]
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
        className={`${inter.variable} ${outfit.variable} ${playfair.variable} text-[#121212] antialiased bg-white`}
      >
        <InteractiveGrid />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
