const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      
    
    },
  },
  variants: {
    extend: {
      gradientColorStops: ['active', 'group-hover'],
      borderRadius: ['hover', 'focus'],
      ringWidth: ['hover', 'active'],
      ringColor: ['hover', 'active'],
      ringOpacity: ['hover', 'active'],
      borderRadius: ['hover', 'focus'],
      padding: ['hover', 'focus'],
      margin: ['hover', 'focus'],
      space: ['hover', 'focus'],
      appearance: ['hover', 'focus'],
    },
  },
  plugins: [ ],
}


