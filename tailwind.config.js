/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      width: {
        'main-width': '85.625%',
        '22px': '1.375rem',
        '312px': '19.5rem',
        '424px': '26.5rem',
      },
      height: {
        '22px': '1.375rem',
        '85px': '5.3125rem',
        '377px': '23.5625rem',
        '424px': '26.5rem',
      },
      spacing: {
        '19.48rem': '19.48rem',
        '20.58rem': '20.58rem',
      },
      colors: {
        'primary': '#007580',
        'secondary': '#272343',
        'tertiary': '#029FAE',
        'quaternary': '#007580',
        'light-gray': '#F0F2F3',
        'sliver-gray': '#E1E3E5',
        'cool-gray': '#9A9CAA',
        'dim-gray': '#636270',
        'green-custom': '#01AD5A',
        'orange-custom': '#F5813F',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'DM-sans': ['DM Sans', 'sans-serif'],
        'poppins': ["Poppins", 'sans - serif'],
      },
      fontSize: {
        '15px': '0.9375rem',
        '13px': '0.8125rem',
        '32px': '2rem',
      },
      lineHeight: {
        '100%': '1',
        '110%': '1.1',
        '120%': '1.2',
        '130%': '1.3',
        '140%': '1.4',
        '150%': '1.5',
      },
      padding: {
        '11px': '0.6875rem',
        '6px': '0.375rem',
        '10px': '0.625rem',
      },
      margin: {
        '6px': '0.375rem',
        '10px': '0.625rem',
        '14px': '0.875rem',
        '18px': '1.125rem',
      },
    },
  },
  plugins: [],
}

