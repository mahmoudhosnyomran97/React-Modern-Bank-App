/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    keyframes: {
      bounce: {
        '0%': { transform: 'translateY(-5%)' },
        '50%': { transform: 'translateY(0)' },
        '100%': { transform: 'translateY(-5%)' },
      },
    },
    animation: {
      'bounce': 'bounce 2.5s linear infinite',
    },
  },
  plugins: [],
};


