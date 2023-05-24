const path = require("path");

module.exports = {
  plugins: [
    require("autoprefixer")({
      config: path.join(__dirname, "tailwind.config.cjs"),
    }),
    require("cssnano")({}),
  ],
};
