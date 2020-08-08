const {
  override,
  addWebpackAlias,
} = require("customize-cra")
const path = require("path")

module.exports = override(
  addWebpackAlias({
    styles: path.resolve(__dirname, "./src/assets/styles"),
    icons: path.resolve(__dirname, "./src/assets/icons"),
    routes: path.resolve(__dirname, "./src/routes"),
    components: path.resolve(__dirname, "./src/components"),
  }),
)