/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'exo': ['Exo 2', 'sans-serif'], // Add Exo 2 font
      },
    },
  },
  plugins: [],
}
