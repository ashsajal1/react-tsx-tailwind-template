/** @type {import('tailwindcss').Config} */

import { teal, slate, gray } from 'tailwindcss/colors'
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-extra-low':teal[100],
        'primary-low':teal[200],
        'primary':teal[600],
        'primary-high':teal[800],
        'primary-extra-high':teal[900],
        "light": slate[300],
        "dark": gray[900]
      }
    },
  },
  plugins: [],
}