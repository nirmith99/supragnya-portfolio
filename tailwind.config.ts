import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1280px",
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
      },
      colors: {
        brand: {
          mocha: "#2B302A",
          bone: "#F4F1EA",
          dark: "#2B302A",
          white: "#F4F1EA",
          ochre: "#D1BFA0",
          brown: "#D1BFA0",
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
