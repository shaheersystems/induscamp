/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      colors: {
        "brand-blue": "#05192d",
        "brand-green": "#03ef62",
        "brand-purple": "#7933ff",
        "brand-green-hover": "#00e053",
      },
    },
  },
  plugins: [],
};
