export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4f8',
          100: '#d9e8f0',
          200: '#7F9C96',
          300: '#4D7C8A',
          400: '#1B4079',
          500: '#1B4079',
          600: '#163364',
          700: '#11274f',
          800: '#0c1c3a',
          900: '#070f1f',
        }
      }
    },
  },
  plugins: [],
}