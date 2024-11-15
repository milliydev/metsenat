/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue100: '#3366FF',
        secondary: '#9333EA',
      },
    },
  },
  plugins: [],
}