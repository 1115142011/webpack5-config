/**
 * @author painter
 * @filename module.js
 * @date 2022-05-12 Thursday
 * @description module 配置
 */
const MiniCssExtractLoader = require("mini-css-extract-plugin").loader;
const devMode = process.env.NODE_ENV !== "production";
module.exports = {
  rules: [
    {
      test: /\.(js|tsx|ts)$/,
      exclude: /node_modules/,
      use: { loader: "babel-loader" },
    },
    {
      test: /\.(png|jpg|gif|jpeg|svg|webp)$/,
      type: "asset",
      exclude: /node_modules/,
      generator: {
        filename: "image/[name]-[hash:6].[ext]",
      },
    },
    {
      test: /\.(woff|woff2|eot|ttf)\??.*$/,
      type: "asset/recource",
      exclude: /node_modules/,
      generator: {
        filename: "font/[name].[hash:6].[ext]",
      },
    },
    {
      test: /.(css)$/,
      use: [
        { loader: devMode ? "style-loader" : MiniCssExtractLoader },
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            esModule: true,
          },
        },
      ],
    },
    {
      test: /\.less$/,
      use: [
        { loader: devMode ? "style-loader" : MiniCssExtractLoader },
        {
          loader: "css-loader",
          options: {
            esModule: true,
          },
        },

        {
          loader: "less-loader",
        },
      ],
    },
    {
      test: /\.(mp3)(\?.*)?$/,
      type: "asset",
    },
  ],
};
