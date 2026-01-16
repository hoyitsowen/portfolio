/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Figtree', 'sans-serif'],
        'clash': ['Clash Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
