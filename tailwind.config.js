/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#faf20d",
      },
      container: {
        center: true,
        padding: "4rem",
      },
    },
  },
  plugins: [],
};
