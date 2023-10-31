/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#302f2e", // Your desired background color
      },
      textColor: {
        white: "#fff",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        headerred: "#c23a3a",
        secondary: "#4b4745",
        border: "#8f8e8e",
        hover: "#df6363",
        active: "#c02525",
      },
    },
  },
  plugins: [],
};
