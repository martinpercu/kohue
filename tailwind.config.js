/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'brandlight': '#e8e2da',
        'brand': '#a8935f',
        'brandgold': '#d9c38c',
        'xdark': '#46464e',
        'xlight': '#e8e2da',
        'xbrown': '#615257',
      }
    },
  },
  plugins: [],
}

