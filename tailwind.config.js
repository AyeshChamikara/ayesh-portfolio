/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#111827',
          card: '#1F2937',
          text: '#F9FAFB',
          muted: '#9CA3AF'
        }
      }
    },
  },
  plugins: [],
};