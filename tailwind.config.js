const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/pages/**/*.{js, ts, jsx, tsx}",
    "./src/components/**/*.{js, ts, jsx, tsx}"
  ],
  theme: {
    colors: {
      'dark-blue': '#00293D',
      'dark-gray': '#011E2C',
      'soft-blue': '#008AEE',
      'white': 'white'
    },
    extend: {
      fontFamily: {
        'sans': ['Montserrat', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
