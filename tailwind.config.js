/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        corben: ["var(--font-corben)", "serif"],
        arapey: ["var(--font-arapey)", "serif"],
        sanchez: ["var(--font-sanchez)", "serif"],
      },
    },
  },
  plugins: [],
};

