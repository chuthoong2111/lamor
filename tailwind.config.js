/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,hbs,html}",
    './partials/**/*.{html,hbl}',
  ],
  theme: {
    // fontFamily: {
    //   'body': ['Work Sans', 'sans-serif'],
    // },
    extend: {
      colors: {
        primary: {
          light: "#FDF8F5", // For lighter primary color
          DEFAULT: "#AC8671", // Normal primary color
          dark: "#44342B", // Used for hover, active, etc.      
          section: "#F8F5F4",
        },
        base: "#544C4C",
        title: "#3D3634",
      },
      fontFamily: {
        display: ['Playfair Display', 'sans-serif'],
      },
      aspectRatio: {
        '3/2': '3 / 2',
      },
    },

  },
  plugins: [],
}