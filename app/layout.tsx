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
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ysabeau.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[var(--bg-sage)] bg-grid-pattern text-[var(--text-primary)] min-h-screen">
        <div className="relative z-10 w-full min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}