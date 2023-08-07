/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#edf2f8',
        'secondary': '#313bac',
        'custom-black': '#030303',
        'custom-light-gray': '#e4e4e4',
        'custom-gray': '#6b7688',
        'custom-brown': '#46364a'
      }, 
      backgroundImage: {
        'navbar-menu': 'url(src/assets/bgwhite.png)'
      }
    },
  },
  plugins: [],
}

