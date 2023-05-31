'use strict';
// located in <app root>/config/tailwind/

module.exports = {
  content: ['./app/**/*.{gjs,gts,hbs,html,js,ts}'],
  theme: {
    fontFamily: {
      debussy: ['debussy', 'sans-serif'],
      helvetica: ['Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
