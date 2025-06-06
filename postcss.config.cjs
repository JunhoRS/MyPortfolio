// postcss.config.cjs
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // ← Este es el nuevo plugin que requiere
    autoprefixer: {},
  },
}
