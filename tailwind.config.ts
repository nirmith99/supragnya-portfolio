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
          dark: "#121212", // Primary Text
          white: "#FFFFFF", // Background
          muted: "#F5F5F5", // Light Gray for differentiation
          // Legacy mappings to prevent breakage immediately, can be cleaned up later
          green: "#8B5E3C",
          body: "#FFFFFF",
          "deep-forest": "#121212",
          "antique-cream": "#FFFFFF"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-outfit)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
