import textshadow from 'tailwindcss-textshadow';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pastelPink: " #fff1e8",
        pastelYellow: "#eecc84",
        pastelBlue: "#c2d5a7",
        pastelRed: "#e47272",
        pastelOrange: "#e7b2a8",
      },
      textShadow: {
        outline: "#f9ced3", // black outline for example
      },
    },
  },
  plugins: [textshadow,],
};
