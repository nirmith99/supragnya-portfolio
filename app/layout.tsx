import type { Metadata } from "next";
import { Ysabeau, Playfair_Display } from "next/font/google";
import "./globals.css";

// IMPORTING YSABEAU
const ysabeau = Ysabeau({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Supragnya Purohith | UI/UX Designer",
  description: "Portfolio of Supragnya Purohith, UI/UX Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ysabeau.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#F9F7F2] text-[#2D1B0D]">
        {/* Global Noise Overlay */}
        <div className="pointer-events-none fixed inset-0 z-[9999] h-full w-full opacity-[0.12] mix-blend-multiply">
          <svg className="absolute inset-0 h-full w-full">
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.75" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
          </svg>
        </div>
        {children}
      </body>
    </html>
  );
}