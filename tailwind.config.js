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
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
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
      fontSize: {
        '2xs': '0.625rem',
        '3xs': '0.5rem',
      },
      backgroundImage: {
        'cordillera': "url('assets/img/cordillera-bw.jpg')",
        'cordillera-sepia': "url('assets/img/css/bg-cordillera.jpg')",
        'cordillera-sepia-napa': "url('assets/img/css/bg-cordillera-napa.jpg')",
        'cordillera-vertical': "url('assets/img/css/bg-cordillera-vertical.jpg')",
        'cordillera-vertical-napa': "url('assets/img/css/bg-cordillera-vertical-napa.jpg')",
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

