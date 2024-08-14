/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      // serif: ['Merriweather', 'serif'],
    },
    extend: {
      fontFamily: {
        buttonFont: 'Roboto Slab', // Adds a new `font-button` class
      },
      colors: {
        'brandlight': '#e8e2da',
        'brand': '#a8935f',
        'brandgold': '#d9c38c',
        'xdark': '#46464e',
        'xlight': '#e8e2da',
        'xbrown': '#615257',
      },
      backgroundImage: {
        'cordillera': "url('assets/img/cordillera-bw.jpg')",
        'cordillera-sepia': "url('assets/img/cordillera-sepia.jpg')",
        'cordillera-robada': "url('assets/img/promo_background.jpg')",
      }
    },
  },
  plugins: [],
}

