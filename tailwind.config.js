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
      }
    },
  },
  plugins: [],
}
