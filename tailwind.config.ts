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
          mocha: "#80542B", // Main Dark
          bone: "#F9F7F2", // Main Light
          // Keep legacy mappings temporarily to avoid breaking other pages
          dark: "#2C1E16",
          white: "#F9F7F2",
          ochre: "#A67C52",
          brown: "#8B5E3C",
          muted: "#F5F5F5",
          green: "#8B5E3C",
          body: "#FFFFFF",
          "deep-forest": "#2D1B0D",
          "antique-cream": "#FFFFFF"
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
