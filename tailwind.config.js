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
        "footer": "#ffffff80",
        "icon-color-hover": "#85C2FF",
        "icon-stroke-hover": "#55259C",
      },
    },
     screens: {
      "tablet": {"max":"850px"},
      "burger-btn":{"min":"850px"}
    }
  },
  plugins: [],
};
