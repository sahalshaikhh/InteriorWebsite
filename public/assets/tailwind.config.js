module.exports = {
  theme: {
    extend: {
      colors: {
        customBlue: '#4340DA',
        // Add more custom colors as needed
      },
    },
  },
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: [
    './pages/**/*.jsx',
    './components/**/*.jsx',
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
