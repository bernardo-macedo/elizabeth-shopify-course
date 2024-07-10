/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/*.liquid",
    "./customers/*.liquid",
  ],
  theme: {
    extend: {
      height: {
        94: "22rem",
      },
    },
  },
  plugins: [],
};
