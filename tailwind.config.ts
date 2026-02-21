import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          brown: "#8B5E3C", // Rich Bronze Brown
          dark: "#2D1B0D", // Deep Espresso (updated from #121212)
          white: "#FFFFFF", // Background
          muted: "#F5F5F5", // Light Gray for differentiation
          // Legacy mappings
          green: "#8B5E3C",
          body: "#FFFFFF",
          "deep-forest": "#2D1B0D",
          "antique-cream": "#FFFFFF"
        }
      },
      fontFamily: {
        sans: ["var(--font-geist)", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
        serif: ["var(--font-instrument)", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
