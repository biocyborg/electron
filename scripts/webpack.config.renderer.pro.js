const webpack = require("webpack");
const { merge } = require("webpack-merge");

const baseConfig = require("./webpack.config.base");

const port = process.env.PORT || 1212;

const config = {
  cache: false,
};

module.exports = merge(baseConfig, config);
