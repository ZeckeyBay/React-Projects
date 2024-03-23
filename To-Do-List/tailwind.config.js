/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mydark: "rgb(24 24 27)",
      },
    },
  },

  plugins: [],
};
