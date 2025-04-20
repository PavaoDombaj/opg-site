/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      colors: {
        forest: "#2F5233",
        leaf: "#7BAF7B",
        wheat: "#EFE8C0",
        earth: "#8C6A4F",
        cream: "#FAF9F6",
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
        merriweather: ["'Merriweather'", "serif"],
        opensans: ["'Open Sans'", "sans-serif"],
      },animation: {
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'fade-in-delay': 'fadeIn 1.2s ease-out 0.6s forwards',
        "slide-in-left": "slideInLeft 1s ease-out",
        "slide-in-left-delay": "slideInLeft 1s ease-out 0.5s",
        "bounce-slow": "bounce 2s infinite",
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-down': 'slideDown 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideInLeft: {
          from: { transform: "translateX(-100%)", opacity: 0 },
          to: { transform: "translateX(0)", opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [ require('@tailwindcss/line-clamp'),],
};