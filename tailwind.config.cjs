/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3C83CB",
        secondary:"#F3F3F3",
        tertiary:"#01203D"
      },
    },
  },
  plugins: [],
}
