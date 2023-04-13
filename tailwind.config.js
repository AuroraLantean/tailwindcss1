/** @type {import('tailwindcss').Config} */

module.exports = {
  // darkMode: 'media',
  darkMode: 'class',
  content: ["*"],
  theme: {
    extend: {},
    screens: {
      sm: '534px',
      md: '577px',
    },
    fontFamily: {
      lobster: ['Lobster', 'cursive'],
    },
  },
  plugins: [],
}

