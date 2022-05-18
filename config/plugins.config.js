/**
 * @author painter
 * @filename plugins.config.js
 * @date 2022-05-12 Thursday
 * @description 插件配置
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { entryFolder, entryPages } = require("./entry.config");

const pluginList = [];
const devMode = process.env.NODE_ENV !== "production";
if (!devMode) {
  pluginList.push(
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:6].css",
      ignoreOrder: true,
      experimentalUseImportModule: true,
    })
  );
}
/** 根据入口数量构造html 文件 */
entryPages.forEach((page) => {
  pluginList.push(
    new HtmlWebpackPlugin({
      hash: true,
      filename: `${page}.html`,
      template: path.resolve(entryFolder, `${page}/index.html`),
      chunks: ["vendors", page],
      favicon: "",
    })
  );
});

module.exports = { configPlugins: pluginList };
