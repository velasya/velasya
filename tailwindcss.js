import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...fontFamily.sans],
      },
      colors: {
        vintage: {
          gold: '#DDA853',
          navy: '#183B4E',
          blue: '#27548A',
          cream: '#F5EEDC',
        }
      },
    },
  },
  plugins: [],
}