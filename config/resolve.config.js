/**
 * @author painter
 * @filename resolve.config.js
 * @date 2022-05-12 Thursday
 * @description resolve 配置
 */
const path = require("path");
module.exports = {
  extensions: [".js", ".tsx", ".ts", ".jsx", ".json"],
  alias: {
    "@/components": path.resolve(__dirname, "../src", "components"),
    "@/pages": path.resolve(__dirname, "../src", "pages"),
    "@/router": path.resolve(__dirname, "../src", "router"),
  },
};
