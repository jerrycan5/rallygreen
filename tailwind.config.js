// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#1c1c1c',
          gray: '#2d2d2d',
          light: '#f9f9f9',
          blue: '#3b82f6',
          deep: '#2a1d1d',
          sand: '#d9c893',
          rodeo: '#8b7271' // <-- new background color from image
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
