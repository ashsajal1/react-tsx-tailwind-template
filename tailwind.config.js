/** @type {import('tailwindcss').Config} */

import { teal } from 'tailwindcss/colors'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-low':teal[200],
        'primary':teal[600],
        'primary-high':teal[700]
      }
    },
  },
  plugins: [],
}