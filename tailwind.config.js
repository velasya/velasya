/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'vintage-cream': '#F5F5DC',
          'vintage-navy': '#1B1B3A',
          'vintage-blue': '#4A5D79',
          'vintage-gold': '#D4AF37'
        }
      }
    },
    plugins: [],
  }