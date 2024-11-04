/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        violetaClub: '#9205cb',
        violetaFondo: '#5f0683',
      },
      fontFamily: {
        slab: ['"Alfa Slab One"', 'serif'], // Asegúrate de usar comillas dobles para nombres de fuentes con espacios
      },
    },
  },
  plugins: [],
};


