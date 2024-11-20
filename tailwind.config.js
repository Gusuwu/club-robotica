/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        violetaClub: '#762b8d',
        violetaFondo: '#53107c',
      },
      fontFamily: {
        slab: ['"Alfa Slab One"', 'serif'], // Asegúrate de usar comillas dobles para nombres de fuentes con espacios
      },
    },
  },
  plugins: [],
};


