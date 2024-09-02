/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        btnPrimary: "#cb0c9f",
        yellowColor: "#feb60d",
        purpleColor: "#9771ff",
        irisBlueColor: "#01b5c5",
        headingColor: "#181a1e",
        textColor: "#67748E",
        textHeadingColor: "#344767"
      },
      fontFamily:{
        bodyFont: 'Poppins',
        titleFont: 'Open Sans',
      },
    },
  },
  plugins: [],
}

