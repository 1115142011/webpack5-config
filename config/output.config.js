/**
 * @author painter
 * @filename output.config.js
 * @date 2022-05-12 Thursday
 * @description 输出配置
 */
const path = require("path");
module.exports = {
  filename: "./js/[name]-[contenthash:6].js",
  clean: true,
  path: path.resolve("./", `./${process.env.NODE_ENV}`),
};
