/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.js", "./*.html"],
  theme: {
    extend: {
      colors: {
        fuchsia: "#f33cfc",
        med_slate_blue: "#925BFC",
        tropic_indigo: "#A778FC",
        white: "#FDFDFF",
        oxford_blue: "#0B132B"
      }
    },
  },
  plugins: [],
}