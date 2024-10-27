/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'color-change': 'colorChange 3s ease-in-out infinite',
      },
      keyframes: {
        colorChange: {
          '0%, 100%': { color: '#1c1c1c' },
          '33%': { color: '#363636' },
          '66%': { color: '#616161' },
        },
      },
    },
  },
  plugins: [],
}
