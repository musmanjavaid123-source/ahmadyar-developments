import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#F5F3EE",
          50: "#FAFAF7",
          100: "#F5F3EE",
          200: "#EFECE3",
        },
        stone: {
          DEFAULT: "#E9E6DF",
          subtle: "#DDD9D0",
          card: "#E4E0D7",
        },
        charcoal: {
          DEFAULT: "#20211F",
          light: "#343532",
          dark: "#141513",
        },
        muted: {
          DEFAULT: "#777873",
          light: "#9A9B96",
          dark: "#5A5B56",
        },
        obsidian: {
          DEFAULT: "#171916",
          card: "#1E201D",
          border: "#292C27",
        },
        bronze: {
          DEFAULT: "#A88B63",
          light: "#C5AD88",
          dark: "#876D49",
          glow: "rgba(168, 139, 99, 0.15)",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
        widest3: "0.35em",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
