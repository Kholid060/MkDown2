module.exports = {
  theme: {
    borderRadius: {
      sm: '0.125rem',
      default: '0.25rem',
      md: '0.5rem',
      lg: '0.9375rem',
      full: '9999px',
    },
    extend: {
      colors: {
        primary: '#0052cc',
        secondary: '#0747a6',
        danger: '#f56565',
        green: '#36b37e',
        warning: '#ffab00',
      },
      backgroundColor: {
        light: '#1f2430',
        lighter: '#232935',
      },
      textColor: {
        default: 'white',
        light: '#cacaca',
        lighter: '#dee7ec',
      },
    },
  },
  variants: {
    boxShadow: ['group-hover'],
  },
  plugins: [],
};
