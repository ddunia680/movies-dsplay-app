/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1300px',
      xl: '1440px'
    },
    extend: {
      colors: {
        chocolateBrayish: 'rgb(193,176,172)',
        darkerBlur: 'rgb(0, 0, 0, 0.2)',
        waydarkerBlur: 'rgb(0, 0, 0, 0.3)',
        lighterDarkBlur: 'rgb(0, 0, 0, 0.1)',
        grayish: 'rgb(13,21,28)',
        lightGray: 'rgb(125,129,133)'
        
      }
    },
  },
  plugins: [],
}
