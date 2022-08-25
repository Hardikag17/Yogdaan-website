/** @type {import('tailwindcss').Config} */
const { url } = require('inspector');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        regular: ['regular', 'sans-serif'],
        semibold: ['semibold', 'sans-serif'],
        bold: ['bold', 'sans-serif'],
        extrabold: ['extrabold', 'sans-serif'],
      },
      colors: {
        blue: 'rgb(35, 104, 251)',
        darkblue: 'rgb(55, 112, 255)',
        white: 'rgb(245, 247, 247)',
        whiteish: '#fff',
        grey: '#F0F5F5',
        green: '#023020',
        black: '#0E0E0E',
        red: '#E74C3C',
      },
      fontSize: {
        small: ['13px'],
        body2x: ['30px', '1.2'],
        body: ['16px', '1.2'],
        medium_title: ['25px', '1.2'],
        big_title: ['60px', '0.95'],
      },
    },
  },
  plugins: [],
};
