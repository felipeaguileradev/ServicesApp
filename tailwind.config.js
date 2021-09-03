module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: require('daisyui/colors')
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('daisyui'), require('@tailwindcss/aspect-ratio')],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false
  }
}
