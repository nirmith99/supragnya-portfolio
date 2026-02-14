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
          green: "#0F3D2E",
          dark: "#0E0E0E",
          body: "#F5F1E8",
          muted: "#B3B3B3"
        }
      }
    }
  },
  plugins: []
};

export default config;
