/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
       animation: {
      glitch: 'glitch 10s linear infinite',
    },
    keyframes: {
       glitch: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-2px, 2px)' },
          '20%': { transform: 'translate(2px, -2px)' },
          '30%': { transform: 'translate(-1px, 1px)' },
          '40%': { transform: 'translate(1px, -1px)' },
          '50%': { transform: 'translate(-3px, 3px)' },
          '60%': { transform: 'translate(3px, -3px)' },
          '70%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(-2px, -2px)' },
          '90%': { transform: 'translate(1px, 1px)' },
        },
    },
    },
  },
  plugins: [],
};
