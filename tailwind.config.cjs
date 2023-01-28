/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx', // arquivos .tsx dentro de src
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090A',
      },
    },
  },
  plugins: [],
};
