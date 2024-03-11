/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
    './node_modules/tw-elements-react/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: {
          50: '#f3f1ff',
          100: '#ebe5ff',
          200: '#d9ceff',
          300: '#bea6ff',
          400: '#9f75ff',
          500: '#843dff',
          600: '#7916ff',
          700: '#6b04fd',
          800: '#5a03d5',
          900: '#4b05ad',
          950: '#2c0076',
      },
      
        lightBlue: "#5d7a97",
        lightGreen: "#90EE90",
        darkGreen: "#006400",
        pink: "1E293A",
        
    },
    spacing: {
      '150': '40rem',
      '45': '45rem',
      '180': '45rem',
      '95': '95vh',
    },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("tw-elements-react/dist/plugin.cjs")
  ],
}

