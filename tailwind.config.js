/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './screens/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6347',
        secondary: '#FFD700',
        tertiary: '#FF4500',
        dark: '#333',
        light: '#f4f4f4'
      }
    }
  },
  plugins: []
};

