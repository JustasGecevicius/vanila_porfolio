const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./dist/index.html'],
  theme: {
    extend: {
      display: {
        flex_row: 'flex flex-row',
        flex_column: 'flex flex-column',
      },
      width: {
        screen: '100dvw',
      },
      height: {
        screen: '100dvh',
        extraScreen: '110vh',
        screen_half: 'calc(100dvh / 2)',
      },
      colors: {
        white_blue: '#b3e7ff',
        light_blue: '#4dc6ff',
        blue: '#00aeff',
        dark_blue: '#005780',
        black_blue: '#00111a',
      },
    },
  },

  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.flex-row': {
          display: 'flex',
          'flex-direction': 'row',
        },
        '.flex-col': {
          display: 'flex',
          'flex-direction': 'column',
        },
        '.center': {
          'justify-content': 'center',
          'align-items': 'center',
        },
      });
    }),
  ],
};
