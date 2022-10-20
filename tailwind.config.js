const defaultTheme = require("tailwindcss/defaultTheme")

/*
  awf-dark-brown     "potters-clay-600"
  awf-light-green      "wild-willow-400"
  awf-light-orange      "texas-rose-300"
  awf-dark-green      "limeade-700"
  awf-dark-orange      "orange-peel-500"
*/

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["PT Sans", ...defaultTheme.fontFamily.sans],
        serif: ["Crete Round", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        "potters-clay": {
          50: "#f9f6ed",
          100: "#f0e8d1",
          200: "#e2d0a6",
          300: "#d1b173",
          400: "#c3964c",
          500: "#b4823e",
          600: "#996633",
          700: "#7c4d2c",
          800: "#68402b",
          900: "#5a3729",
        },
        "wild-willow": {
          50: "#f3faeb",
          100: "#e5f3d4",
          200: "#cde8ae",
          300: "#acd97d",
          400: "#99cc66",
          500: "#6fab37",
          600: "#548828",
          700: "#426823",
          800: "#375420",
          900: "#30481f",
        },
        "texas-rose": {
          50: "#fff8eb",
          100: "#feecc7",
          200: "#fed689",
          300: "#fdbd50",
          400: "#fca323",
          500: "#f67e0a",
          600: "#da5a05",
          700: "#b53c08",
          800: "#932e0d",
          900: "#79260e",
        },
        limeade: {
          50: "#fbffe4",
          100: "#f4ffc4",
          200: "#e8ff90",
          300: "#d4ff50",
          400: "#bffe1d",
          500: "#9fe500",
          600: "#7bb800",
          700: "#669900",
          800: "#4a6d07",
          900: "#3f5c0b",
        },
        "orange-peel": {
          50: "#fffbea",
          100: "#fff2c5",
          200: "#ffe685",
          300: "#ffd246",
          400: "#ffbd1b",
          500: "#ff9900",
          600: "#e27200",
          700: "#bb4d02",
          800: "#983b08",
          900: "#7c310b",
        },
      },
    },
  },
  plugins: [],
}
