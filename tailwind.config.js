module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'body': 'aileron, -apple-system, sans-serif',
      'serif':'swear-display, serif',
    },
    fontSize: {
      '0': '0',
      'xs': '1.2rem',
      'sm': '1.4rem',
      'base': '1.6rem',
      'lg': 'clamp(1.6rem, 4vw, 1.8rem)',
      'xl': 'clamp(2rem, 4vw, 2.4rem)',
      '2xl': 'clamp(2.5rem, 4vw, 3.6rem)',
      '3xl': 'clamp(3rem, 4vw, 4.8rem)',
      'display': 'clamp(3.5rem, 8vw, 7rem)',
    },
    extend: {
      maxWidth: {
        'screen-88': '88vw',
        'screen-92': '92vw',
      }, 
      colors: {
        'black': '#0e0e0e'
      }
    },
  },
  plugins: [],
}
