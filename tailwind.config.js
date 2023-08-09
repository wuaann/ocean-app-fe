/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors:{
        customBlue:"#515BD4",
        customPurple:"#8134AF",
        customPink:"#DD2A7B",
      },
      boxShadow:{
        customBox: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
      }
    },
    fontFamily:{
      lobster: ["Lobster","cursive"]
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],

}

