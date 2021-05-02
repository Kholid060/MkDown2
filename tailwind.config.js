const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  darkMode: false,
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: colors.blue['500'],
      },
    },
  },
  variants: {},
  plugins: [],
};
