/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow': '#DFA37E',
        'lightBg': '#EFEAE4'
      },
    },
  },
  plugins: [],
}