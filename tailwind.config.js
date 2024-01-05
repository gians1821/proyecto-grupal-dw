/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'principal': '#4c4c4c',
        'secundario': '#7db6e9',
        'blanco': '#ffffff',
        'extra': '#191919',
      },
      width: {
        '90': '21rem',
      },
    },
    
  },
  plugins: [],
}
