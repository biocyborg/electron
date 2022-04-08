const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const cssnano = require("cssnano");
const postcssImport = require("postcss-import");
const postcssPresetEnv = require("postcss-preset-env");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const getDefaultModules = require("./webpack.config.loader");
const { srcRendererPath } = require("./webpack.paths");

const devMode = process.env.NODE_ENV !== "production";

const configuration = {
  entry: {
    index: [
      "core-js",
      "regenerator-runtime/runtime",
      path.join(srcRendererPath, "index.tsx"),
    ],
  },

  output: {
    path: path.join(process.cwd(), "dist"),
    // filename: "[name].[chunkhash:10].js",
    // chunkFilename: "[name].[chunkhash:10].js",
    publicPath: "/",
  },

  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },

  externals: {
    electron: 'require("electron")',
  },

  module: getDefaultModules(
    MiniCssExtractPlugin,
    cssnano,
    postcssImport,
    postcssPresetEnv
  ),

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "public/index.html",
      chunks: ["index"],
    }),

    new MiniCssExtractPlugin({
      ignoreOrder: true,
      filename: devMode ? "[name].css" : "[name].[hash:10].css",
      chunkFilename: devMode ? "[id].css" : "[id].[hash:10].css",
    }),
  ],
};

module.exports = configuration;
