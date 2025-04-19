/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EEFCFA",
          100: "#CBF6EF",
          200: "#A8F0E4",
          300: "#85EAD9",
          400: "#62E4CF",
          500: "#3FDEC4",
          600: "#23D1B4",
          700: "#1EAE96",
          800: "#1B9D87",
          900: "#157A69",
          950: "#0F574B",
        },
        accent: {
          50: "#FAF5F0",
          100: "#F4ECE1",
          200: "#E8D6BF",
          300: "#DDC2A2",
          400: "#D2AF84",
          500: "#C69963",
          600: "#B78343",
          700: "#926835",
          800: "#6C4D28",
          900: "#4B351B",
          950: "#382814",
        },
      },
      gridTemplateRows: {
        8: "repeat(8, minmax(0, 1fr))",
        9: "repeat(9, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
        11: "repeat(11, minmax(0, 1fr))",
      },
      gridRowStart: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
      gridRowEnd: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
    },

    fontFamily: {
      primary: ["K2D", "sans-serif"],
      // arabic: ["Noto Naskh Arabic", "serif"],
      // text: ["Lexend", "sans-serif"],
    },
  },
  plugins: [],
};
