const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black:{
          main: "#0C1015",
          secondary:"#16202F",
        },
        grey: {
          main: "#11171e99",
        },
        white: {
          main:"#ffffff",
          greyish: "#ffffff33",
        }
      }
    },
  },
  plugins: [nextui()],
};
