/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
  
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend:  {
      colors: {
        darkGrayishBlue: 'hsl(227, 12%, 61%',
      }
    }
  },
  plugins: [],
}

