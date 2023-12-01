/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    extend: {
      colors: {
        'button-blue': '#2F80ED',
        'footer-text': '#4F4F4F',
        'copyright-bg': '#EBEBEB',
        'input-bg': '#F2F2F2',
        'light-yellow': '#FCEFCA',
        'checkout-bg': '#F4F4F4',
        'checkout-text': '#181818',
        'card-yellow': '#F2C94C',
        'card-green': '#85E0AB',
      },
    },
    fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
    },
    container: {
      padding: '1rem',
      center: true,
    },
    screens: {
      sm: '640px',
      md: '768px',
    },
  },
  // plugins: [require('@tailwindcss/forms')],
};
