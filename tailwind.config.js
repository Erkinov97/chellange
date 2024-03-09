/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        current: "currentColor",
        transparent: "transparent",
        ligth: "#ffffff",
        dark: "#000000",
        primary: "#326CF9",
        gray: "#707070",
      },
    },
  },
  plugins: [],
};
