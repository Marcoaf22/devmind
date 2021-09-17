module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      fill: (theme) => ({
        white: theme('colors.white'),
        red: theme('colors.red.500'),
      }),
      backgroundColor: (theme) => ({
        light: theme('colors.gray-main.300'),
        dark: theme('colors.black'),
      }),
      colors: {
        'gray-main': {
          300: '#EAEDF2',
        },
        'blue-main': {
          800: '#1C1C24',
        },
      },
    },
  },
}
