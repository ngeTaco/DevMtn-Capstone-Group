import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    fontFamily: {
      "poppins": ['"Poppins"', ...defaultTheme.fontFamily.sans] //example font
    },
    extend: {
      'pokemon-red': '#fds123',
      'pikachu-yellow': {
        100: "#asd321"
      }
    },
  },
  plugins: [],
}

