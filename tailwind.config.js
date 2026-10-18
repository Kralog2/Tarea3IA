module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    borderRadius: { none: '0', DEFAULT: '0' },
    extend: {
      colors: {
        pastel: { 50: '#f7fafd', 100: '#eaf2fb', 200: '#d6e6f7', 300: '#b5d2ef', 500: '#5b9bd5', 600: '#3b82c4', 700: '#2c64a0', 900: '#1f3a5c' },
      },
    },
  },
  plugins: [],
};
