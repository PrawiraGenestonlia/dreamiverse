const { join } = require('path');

const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');


module.exports = {
  content: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'components/**/*.{js,ts,jsx,tsx}'),
    createGlobPatternsForDependencies(__dirname)
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [],
}
