/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#023047",
        primaryLight: "#8ecae6",
        secondary: "#ffb703",
        light: "#ffffff",
        blueActive: "#219ebc",
      },
    },
  },
  plugins: [],
};
