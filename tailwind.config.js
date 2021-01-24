module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: { main: "#ED202D" },
      },
      fontFamily: { "futura-pt": ["futura-pt", "mono"] },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
