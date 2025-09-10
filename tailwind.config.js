/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ubuntu", "system-ui", "sans-serif"],
        manrope: ["Manrope", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
