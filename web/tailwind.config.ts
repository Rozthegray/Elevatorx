import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          white: '#F8F9FA',
          charcoal: '#2C3338',
          onyx: '#1E1E1E',
          red: '#B71C1C',
          darkred: '#900000'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-montserrat)'],
      }
    },
  },
  plugins: [],
};
export default config;