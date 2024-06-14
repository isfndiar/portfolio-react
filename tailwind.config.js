/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {},
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    boxShadow: {
      "card-on": "5px 5px rgb(0,0,0), 10px 10px rgba(70,64,68,0.3)",
      "card-off": "0px 0px rgb(0,0,0), 0px 0px rgba(70,64,68,0.3)",
    },
    plugins: [],
  },
};
