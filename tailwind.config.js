/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/.{html,js}"],
  theme: {
    extend: {
    fontFamily: {
      'fontik': ['Merriweather', 'serif'],
      'playfire': ['Playfair Display', 'serif;']
    },
  },
},
  plugins: [],
}
