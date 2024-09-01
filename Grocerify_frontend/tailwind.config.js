/** @type {import('tailwindcss').Config} */
module.exports = {
  // important: true,
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Gorditas': ['Poppins'],
        'Montserrat': ['Roboto', 'sans - serif'],
        'Inter': ['Inter', 'sans-serif'],
      },
    },
    screens: {
      'sm': { 'min': '320px', 'max': '720px' },
      'md': { 'min': '721px', 'max': '1000px' },

      'lg': { 'min': '1024px', 'max': '1500px' },
      'xl': { 'min': '1501px', 'max': '1600px' },
      '2xl': { 'min': '1601px' },
    },
  },
  plugins: [],
}

