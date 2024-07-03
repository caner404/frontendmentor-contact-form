/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-grey': {
          500: '#86a2a5',
          900: '#2a4144',
        },
        'custom-green': {
          200: '#E0F1E8',
          600: '#0c7d69',
        },
        'custom-red': '#D73C3C',
      },
    },
  },
  plugins: [],
};
