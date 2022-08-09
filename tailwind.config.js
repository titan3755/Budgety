/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      jsans: "'Josefin Sans', sans-serif",
      overpass: "'Overpass', sans-serif",
      ubuntu: "'Ubuntu', sans-serif",
      right: "'Righteous', cursive",
      alata: "'Alata', sans-serif"
    },
    extend: {},
  },
  plugins: [],
}