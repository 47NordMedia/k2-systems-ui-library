// const colors = require('tailwindcss/colors');

/* eslint-env node */
module.exports = {
  // @see https://tailwindcss.com/docs/upcoming-changes
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  content: ['./node_modules/@47nordmedia/k2-systems-ui-library/dist/**/*.{js,ts}'],
  theme: {
    fontFamily: {
      display: ['Inter', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
    },
    color: {
      red: {
        50: '#fff2f2',
        100: '#ffe6e6',
        200: '#ffbfbf',
        300: '#fe9999',
        400: '#fe4d4d',
        500: '#fd0000',
        600: '#e40000',
        700: '#be0000',
        800: '#980000',
        900: '#7c0000',
      },
      // black: '#191919',
      black: {
        50: '#f4f4f4',
        100: '#e8e8e8',
        200: '#c6c6c6',
        300: '#a3a3a3',
        400: '#5e5e5e',
        500: '#191919',
        600: '#171717',
        700: '#131313',
        800: '#0f0f0f',
        900: '#0c0c0c',
      },
      gray: {
        50: '#B6BBC2',
        100: '#ABB1B9',
        200: '#959CA6',
        300: '#7F8794',
        400: '#6B737F',
        500: '#585F69',
        600: '#3E434A',
        700: '#25282C',
        800: '#0B0C0D',
        900: '#000000',
      },
    },
    extend: {
      transitionProperty: {
        width: 'width',
      },
      color: {
        'white-linen': {
          50: '#fefefe',
          100: '#fefdfc',
          200: '#fcfaf8',
          300: '#faf7f4',
          400: '#f6f1eb',
          500: '#f2ebe3',
          600: '#dad4cc',
          700: '#b6b0aa',
          800: '#918d88',
          900: '#77736f',
        },
      },
    },
  },
  variants: {},
  plugins: [require('tailwindcss'), require('precss'), require('autoprefixer')],
};
