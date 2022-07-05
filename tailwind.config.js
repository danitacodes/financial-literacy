module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      Lora: ["Lora", "serif"],
      Lato: ["Lato", "sans-serif"]
    },
    extend: {
      backgroundImage: {
        'hero-image': 'url("./assets/girlwithmoney.png")'
      },
      colors: {
        seagreen: '#89B0AE',
        lightgreen: '#BEE3DB'
      }      
    },
  },
  plugins: [],
}