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
    extend: {
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        halvar: ['Halvar'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        red: '#fd0000',
        black: '#191919',
        cream: '#F2EBE3',
        white: '#ffffff',
        darkGrey: '#585F69',
        silverGrey: '#A4ABB5',
        lightGrey: '#CACED3',
        darkCream: '#ACA195',
        forestGreen: '#373A25',
        brown: '#4D1806',
        seaBlue: '#1B2848',
        pink: '#351625',
        orange: '#442707',
        purple: '#3A1837',
        forestGreenAccent: '#D9E670',
        brownAccent: '#FF5031',
        seaBlueAccent: '#4E85EF',
        pinkAccent: '#F00250',
        orangeAccent: '#D08C29',
        purpleAccent: '#BF22B0',
      },
      fontSize: {
        xxs: [
          '1.313rem',
          {
            letterSpacing: '-0.015em',
            lineHeight: '2rem',
          },
        ],
        xs: [
          '2.25rem',
          {
            letterSpacing: '-0.025em',
            lineHeight: '3rem',
          },
        ],
        sm: [
          '3rem',
          {
            letterSpacing: '-0.025em',
            lineHeight: '3.5rem',
          },
        ],
        md: [
          '4.5rem',
          {
            letterSpacing: '-0.025em',
            lineHeight: '5.5rem',
          },
        ],
        lg: [
          '7rem',
          {
            letterSpacing: '-0.025em',
            lineHeight: '7rem',
          },
        ],
        xl: [
          '9rem',
          {
            letterSpacing: '-0.025em',
            lineHeight: '8.5rem',
          },
        ],
        '3xs': [
          '1rem',
          {
            letterSpacing: '0.005em',
            lineHeight: '1.5rem',
          },
        ],
        '4xs': ['0.813rem', '1.5rem'],
        '0xs': ['0rem', '0rem'],
        // for small laptop to semi large desktop ------>
        'lp-md': ['2.625', '3.25rem'],
        'lp-lg': ['3.5rem', '4.25rem'],
        'lp-xl': ['5.5rem', '5.5rem'],
        'lp-2xl': ['6rem', '6rem'],
        // for phone to tablet ------>
        'mb-xxs': ['1rem', '1.5rem'],
        'mb-xs': ['1.125rem', '1.5rem'],
        'mb-sm': ['1.5rem', '2rem'],
        'mb-md': [
          '2.25rem',
          {
            letterSpacing: '-0.015em',
            lineHeight: '3rem',
          },
        ],
        'mb-lg': ['3rem', '3.5rem'],
        'mb-xl': ['4rem', '4rem'],
      },
    },
  },
  variants: {},
  plugins: [require('tailwindcss'), require('precss'), require('autoprefixer')],
};
