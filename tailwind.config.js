/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ['"Instrument Serif"', "serif"],
        sans: ['"Plus Jakarta Sans"', '"Inter"', "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
