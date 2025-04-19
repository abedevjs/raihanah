/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EBF8FF",
          100: "#D6F1FF",
          200: "#C2EBFF",
          300: "#99DDFF",
          400: "#85D6FF",
          500: "#5CC9FF",
          600: "#33BBFF",
          700: "#1FB4FF",
          800: "#00A3F5",
          900: "#0088CC",
          950: "#006DA3",
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
