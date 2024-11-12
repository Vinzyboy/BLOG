const { gray, rgb } = require('color-convert');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: "var(--dark)",
        light: "var(--light)",
        gray: "#808080",
        gray2: "rgb(0, 0, 0, 0.2)",
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
