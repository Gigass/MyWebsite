/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neo-black': '#050505',
        'neo-white': '#f0f0f0',
        'neo-cyan': '#00f3ff',
        'neo-purple': '#bc13fe',
        'neo-green': '#0aff00',
        'neo-yellow': '#faff00',
        'neo-pink': '#ff0099',
      },
      boxShadow: {
        'neo': '4px 4px 0px 0px rgba(255,255,255,1)',
        'neo-sm': '2px 2px 0px 0px rgba(255,255,255,1)',
        'neo-lg': '8px 8px 0px 0px rgba(255,255,255,1)',
        'neo-cyan': '4px 4px 0px 0px #00f3ff',
        'neo-purple': '4px 4px 0px 0px #bc13fe',
        'neo-green': '4px 4px 0px 0px #0aff00',
      },
      borderWidth: {
        '3': '3px',
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        glitch: {
          '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
          '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
          '62%': { transform: 'translate(0,0) skew(5deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
