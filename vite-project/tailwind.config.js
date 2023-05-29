/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#dd5303',
        'secondary': '#7678ed',
        'accent': '#473da4',
        'text': '#ffffff',
        'background': '#131c20',
      }
    },
  },
  plugins: [],
}

