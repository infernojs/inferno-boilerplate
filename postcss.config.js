module.exports = (ctx) => ({
  map: ctx.env === 'development' ? ctx.map : false,
  plugins: {
    "autoprefixer": {
      "browsers": [
        "last 3 version",
        "ie >= 10"
      ]
    },
    "postcss-nested": {}
  }
})
