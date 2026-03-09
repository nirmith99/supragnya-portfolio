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
          mocha: "#2B302A", // Remapping Main Dark to Sage Base
          bone: "#F4F1EA", // Remapping Main Light to Alabaster
          // Keep legacy mappings temporarily to avoid breaking other pages
          dark: "#2B302A",
          white: "#F4F1EA",
          ochre: "#D1BFA0",
          brown: "#D1BFA0", // Remapped to accent gold
          muted: "#9A9E9A",
          green: "#3A4038",
          body: "#2B302A",
          "deep-forest": "#2B302A",
          "antique-cream": "#F4F1EA"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        heading: ["var(--font-serif)", "serif"],
        serif: ["var(--font-serif)", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
