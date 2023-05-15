/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        'd-primary': '#26292b',
        'd-secondary': '#2e3239',
        'd-accent': '#5f7adb',
        'd-light' : '#5f7adb',
        'd-text': '#f1f1f1',
      }
    },
  },
  plugins: [],
}

