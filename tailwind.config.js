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
        medGrey: '#858B95',
        silverGrey: '#A4ABB5',
        lightGrey: '#C2C9D2',
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
        '0xs': ['0rem', '0rem'],
        '2xs': [
          '0.813rem',
           {
            letterSpacing: '0.13rem',
            lineHeight: '1.5rem',
          }
        ],
        'xs': [
          '1rem',
          {
            letterSpacing: '0.005em',
            lineHeight: '1.5rem',
          },
        ],
        'sm': [
          '1.125rem',
          {
            letterSpacing: '-0.015em',
            lineHeight: '1.5rem',
          },
        ],
        'base': [
          '1.313rem',
          {
            letterSpacing: '-0.015em',
            lineHeight: '2rem',
          },
        ],
        "md": [
          '1.5rem',
          {
            letterSpacing: '-0.025em',
            lineHeight: '2rem',
          },
        ],
        "lg": [
          '1.875rem',
          {
            letterSpacing: '-0.025em',
            lineHeight: '2.25rem',
          },
        ],
        "xl": [
          '2.5rem',
          {
            letterSpacing: '-0.025em',
            lineHeight: '3rem',
          },
        ],
        "2xl": [
          '2.625rem',
          {
            letterSpacing: '-0.025em',
            lineHeight: '3.25rem',
          },
        ],
        "3xl": [
          '3rem',
          {
            letterSpacing: '-0.025em',
            lineHeight: '3.5rem',
          },
        ],
        "4xl": [
          '3.5rem',
          {
            letterSpacing: '-0.025em',
            lineHeight: '4.25rem',
          },
        ],
        "5xl": [
          '4rem',
          {
            letterSpacing: '-0.025em',
            lineHeight: '4rem',
          },
        ],
        "6xl": [
          '4.5rem',
          {
            letterSpacing: '-0.025em',
            lineHeight: '5.5rem',
          },
        ],
        "7xl": [
          '5.5rem',
          {
            letterSpacing: '-0.025em',
            lineHeight: '5.5rem',
          },
        ],
        "8xl": [
          '6rem',
          {
            letterSpacing: '-0.025em',
            lineHeight: '6rem',
          },
        ],
        "9xl": [
          '7rem',
          {
            letterSpacing: '-0.025em',
            lineHeight: '7rem',
          },
        ],
        "10xl": [
          '9rem',
          {
            letterSpacing: '-0.025em',
            lineHeight: '8.5rem',
          },
        ],
      },
    },
  },
  variants: {},
  plugins: [require('tailwindcss'), require('precss'), require('autoprefixer')],
};
