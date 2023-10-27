/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#222222", // Your desired background color
      },
      textColor: {
        white: "#fff",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      footerbrown: "#963413",
      headerred: "#CD4747",
      lightpeach: "#FFE6BD",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
    },
  },
  plugins: [],
};
