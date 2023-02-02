/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'gray-theme': '#dae0e6',
        'post-ups-bg': '#f8f9fa'
      }
    },
  },
  plugins: [],
}
