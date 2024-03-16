/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
      },
      backgroundColor: {
        'light-pink': "#F8EEFF"
      },
      backgroundImage: {
        'image-mobile': "url('../assets/images/background-pattern-mobile.svg')",
        'image-desktop': "url('../assets/images/background-pattern-desktop.svg')"
      },
      colors: {
        'dark-purple': '#301534',
        'pale-purple': '#8B6990',
      }
    },
  },
  plugins: [],
}

