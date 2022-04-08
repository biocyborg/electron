const path = require("path");
const webpack = require("webpack");
const { spawn } = require("child_process");
const { merge } = require("webpack-merge");

const baseConfig = require("./webpack.config.base");

const port = process.env.PORT || 1212;

const config = {
  cache: true,

  devtool: "cheap-source-map",

  devServer: {
    hot: true,
    compress: true,
    static: false,
    port: port,
    historyApiFallback: {
      verbose: true,
    },
    setupMiddlewares: (middlewares, devServer) => {
      spawn("npm", ["run", "start:main"], {
        shell: true,
        env: process.env,
        stdio: "inherit",
      })
        .on("close", (code) => process.exit(!code))
        .on("error", (spawnError) => console.error(spawnError));
      return middlewares;
    },
  },
};

module.exports = merge(baseConfig, config);
