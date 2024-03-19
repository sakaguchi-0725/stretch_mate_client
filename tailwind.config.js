/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          light: "#a3d1bb",
          DEFAULT: "#6bb39a",
          dark: "#4b8b7a"
        },
        "bg": "#f5f7f6",
        "error": "#f57c69"
      }
    },
  },
  plugins: [],
}

