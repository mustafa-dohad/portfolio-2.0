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
        orbitron: ["var(--font-orbitron)", "sans-serif"],
      },
      colors: {
        'neon-cyan': '#00ffe7',
        'neon-magenta': '#ff00c8',
        'neon-green': '#39ff14',
        'circuit-bg': '#0a0f1a',
        'circuit-panel': '#22223b',
      },
      boxShadow: {
        'neon-cyan': '0 0 8px #00ffe7, 0 0 16px #00ffe7',
        'neon-magenta': '0 0 8px #ff00c8, 0 0 16px #ff00c8',
        'neon-green': '0 0 8px #39ff14, 0 0 16px #39ff14',
      },
    },
  },
  plugins: [],
};

