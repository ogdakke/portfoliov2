/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent-1': '#303030',
        'accent-2': '#404040',
        'accent-3': 'hsla(0,0%,100%,0.82)',
        'accent-4': '#909090',
        'accent-7': '#333',

        success: '#0070f3',
        cyan: '#79FFE1',
        bgPrimary: '#161616'
      },
      animation: {
        'pulse-slow': 'pulse 4s infinite'
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      
    },
  },
  plugins: [],
}
