/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        offwhite: '#F5F5F5',
        'offwhite-darker': '#E5E5E5',
        blue: '#114278',
        teal: {
          500: '#1E8A87', // Matches the teal color in the image
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}