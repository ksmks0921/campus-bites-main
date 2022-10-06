const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      colors:{
        "primary":"#39B54A",
        "secondary":"#4D4D4D",
        "tertiary":"#DADADA"
      },
      fontFamily: {
        nunito: ['Nunito', "sans-serif"],
        "permanent-marker": ["Permanent Marker", "cursive"],
    },
    backgroundImage: {
      'main': "url('/public/images/main.jpg')",
      'public': "url('/public/images/publiclanding.jpg')",
      'hero': "url('/public/images/landingimg.png')",
      'herx': "url('/public/images/landingimg.png')",
    }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp')
  ],
}