/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f2720c', // Lynkit Orange
          hover: '#d9650a',
          light: '#fb923c',
        },
        dark: {
          DEFAULT: '#0a192f', // Deep Blue/Black
          lighter: '#172a45',
          card: '#112240',
        },
        grey: {
          DEFAULT: '#8892b0',
          light: '#ccd6f6',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'slow-pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
