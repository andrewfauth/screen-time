/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['app/*/**/*.{jsx, js}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': '"Poppins", sans-serif'
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
