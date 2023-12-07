/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./site/**/*.html", "./site/**/*.css"],
  darkMode: "class",
  fontFamily: {
    mplus: ["'M PLUS Rounded 1c'", "Verdana", "sans-serif"],
  },
  theme: {
    extend: {},
  },

  plugins: [require("@tailwindcss/typography")],
};
