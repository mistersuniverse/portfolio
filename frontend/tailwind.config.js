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
        'navbar-menu': 'url(src/assets/bgwhite.png)',
        'hero': 'url(src/assets/bgIMG.png)'
      }, 
      screens: {
        'xs': '320px',
        '3xl': '1820px',
        '4xl': '2000px'
      }, 
      fontFamily: {
        'base': ['DM Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

