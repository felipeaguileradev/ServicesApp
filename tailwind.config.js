module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: [require('daisyui/colors'), require('tailwindcss/colors')]
    }
  },
  variants: {
    extend: {
      display: ['group-hover']
    }
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/aspect-ratio')
    // require('@tailwindcss/forms')
  ],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false
  }
}
