// const colors = require('tailwindcss/colors');

/* eslint-env node */
module.exports = {
  presets: [require('./src/tailwind.config.js')],
  content: ['./src/classes/**/*.{js,ts}', './src/index.html'],
};
