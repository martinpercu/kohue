/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Engravers', 'serif'],
    },
    extend: {
      fontFamily: {
        buttonFont: 'Engravers', // Adds a new `font-button` class
      },
      colors: {
        'brandlight': '#e8e2da',
        'brand': '#a8935f',
        'brandgold': '#d9c38c',
        'xdark': '#4C4E56',
        // 'xlight': '#82de79', // DEV COLOR
        'xlight': '#eae6dd',
        'xbrown': '#615257',
      },
      backgroundImage: {
        'cordillera': "url('assets/img/cordillera-bw.jpg')",
        'cordillera-sepia': "url('assets/img/css/bg-cordillera.jpg')",
        'cordillera-vertical': "url('assets/img/css/bg-cordillera-vertical.jpg')",
        'nubes': "url('assets/img/css/bg-nubes.jpg')",
      }
      // backgroundImage: { // DEV backgrounds
      //   'cordillera': "url('assets/img/cordillera-bw.jpg')",
      //   'cordillera-sepia': "url('assets/img/cordillera-sepia.jpg')",
      //   'cordillera-vertical': "url('assets/img/cordillera-sepia.jpg')",
      //   'nubes': "url('assets/img/aacordillera.jpg')",
      // }
    },
  },
  plugins: [],
}

