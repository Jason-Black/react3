/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx, html, css}",
  ],
  theme: {
    extend: {
      colors: {
        warhammerRed: '#FF0000',
        sciFiBlue: '#001F3F',
        'primary': '#3490dc',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
      },
    },
  },
  plugins: [],
};