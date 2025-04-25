/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vintage-cream': '#F5F1E8',
        'vintage-navy': '#1B2B4B',
        'vintage-blue': '#3B5998',
        'vintage-gold': '#D4AF37'
      }
    },
  },
  plugins: [],
}