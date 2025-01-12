import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#00aff0",
          500: "#153c66",
        },
        secondary: {
          DEFAULT: "#f96301",
        },
        black: {
          DEFAULT: "#000",
          100: "#0D1117",
          200: "#161B22",
          300: "#1F2428",
          400: "#242C38",
        },
        grey: {
          100: "#969BA5",
          200: "#55616D",
        },
        white: {
          DEFAULT: "#FFF",
          400: "#A3B3BC",
          500: "#A4B8D5",
          800: "#D0DFFF",
        },
        purple: "#8C7CFF",
        pink: "#ED5FBD",
        violet: "#F16565",
        orange: "#FF964B",
      },
      textShadow: {
        custom: "2px 2px 3px rgba(21, 60, 102, 0.25)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        ".text-shadow-custom": {
          textShadow: "2px 2px 3px rgba(21, 60, 102, 0.25)",
        },
      });
    },
  ],
};
export default config;
