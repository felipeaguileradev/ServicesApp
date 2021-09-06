module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: [require('daisyui/colors'), require('tailwindcss/colors')],
      backgroundImage: {
        'radial-at-tl': 'radial-gradient(ellipse at top left,var(--tw-gradient-stops))',
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))'
      }
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
    rtl: false,
    themes: [
      {
        light: {
          primary: '#570df8',
          'primary-focus': '#4506cb',
          'primary-content': '#ffffff',
          secondary: '#f000b8',
          'secondary-focus': '#bd0091',
          'secondary-content': '#ffffff',
          accent: '#37cdbe',
          'accent-focus': '#2aa79b',
          'accent-content': '#ffffff',
          neutral: '#3d4451',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#d1d5db',
          'base-content': '#1f2937',
          info: '#2094f3',
          success: '#009485',
          warning: '#ff9900',
          error: '#ff5724'
        },
        dark: {
          primary: '#570df8',
          'primary-focus': '#4506cb',
          'primary-content': '#ffffff',
          secondary: '#f000b8',
          'secondary-focus': '#bd0091',
          'secondary-content': '#ffffff',
          accent: '#37cdbe',
          'accent-focus': '#2aa79b',
          'accent-content': '#ffffff',
          neutral: '#3d4451',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',
          'base-100': '#24385b',
          'base-200': '#121f3d',
          'base-300': '#03091e',
          'base-content': '#ebecf0',
          info: '#66c7ff',
          success: '#87d039',
          warning: '#e2d562',
          error: '#ff6f6f',
          '--tw-bg-opacity': '0.1'
        }
      }
      // 'dark'
    ]
  }
}

// #24385b
// #40587c
// #1b2c4c
// bg #121f3d
// bg-oscuro #03091e
// text #33b1ff
// text hover #74caff
