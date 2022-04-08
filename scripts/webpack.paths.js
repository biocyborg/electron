const path = require("path");

const rootPath = path.join(__dirname, "../");

const srcPath = path.join(rootPath, "src");
const srcRendererPath = path.join(srcPath, "renderer");

module.exports = {
  srcRendererPath,
};
