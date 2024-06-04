/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "back": "#26355D",
        "text": "#FAF0E6",
        "active": "#AF47D2",
        "hover-2": "#FFDB00",
        "hover": "#FF8F00",
        "text-footer": "#ffffff80"
      },
    },
  },
  plugins: [],
};
