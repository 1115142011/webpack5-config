/**
 * @author painter
 * @filename webpack.config.js
 * @date 2022-05-12 Thursday
 * @description 配置汇总
 */
const devTool = process.env.NODE_ENV === "development" ? "inline-cheap-source-map" : false;
module.exports = {
  devtool: devTool,
  entry: require("./entry.config.js").configEntry,
  output: require("./output.config.js"),
  module: require("./module.config.js"),
  plugins: require("./plugins.config.js").configPlugins,
  resolve: require("./resolve.config.js"),
  devServer: require("./devserver.config.js"),
  experiments: {
    layers: true,
  },
};
