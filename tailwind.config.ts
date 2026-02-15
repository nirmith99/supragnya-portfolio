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
          green: "#022c22", // Updated Deep Forest
          dark: "#0E0E0E",
          body: "#F5F1E8", // Antique Cream
          muted: "#B3B3B3",
          brown: "#D4A373",
          // Re-mapped standard colors 
          "deep-forest": "#022c22",
          "warm-brown": "#A67C52",
          "antique-cream": "#F4F1E8"
        }
      }
    }
  },
  plugins: []
};

export default config;
