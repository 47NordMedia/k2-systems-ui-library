/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env node */
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    require('postcss-import'),
    tailwindcss('./tailwind.build.config.js'), // your tailwind.js configuration file path
    autoprefixer,
  ],
};
