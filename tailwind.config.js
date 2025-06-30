/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'kawaii': ['Comfortaa', 'cursive'],
        'body': ['Quicksand', 'sans-serif'],
      },
      colors: {
        kawaii: {
          pink: '#FFB6C1',
          lavender: '#E6E6FA',
          blue: '#B0E0E6',
          mint: '#98FB98',
          peach: '#FFCCCB',
          yellow: '#FFFFE0'
        }
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 3s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'kawaii': '0 8px 32px 0 rgba(255, 182, 193, 0.37)',
        'kawaii-lg': '0 15px 35px 0 rgba(255, 182, 193, 0.45)',
      }
    },
  },
  plugins: [],
};