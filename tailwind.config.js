/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  

  theme: {
    extend: {},
    fontFamily:{
      signature:["Great Vibes"],
      rig:["righteous"],
      ital:["ital"]
    }
  },
  darkMode: "class",
  
}
