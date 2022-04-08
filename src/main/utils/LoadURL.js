const path = require("path");
const { URL } = require("url");

const resolveHtmlPath = (htmlFileName) => {
  let flag;
  if (process.env.NODE_ENV === "development") {
    const port = process.env.PORT || 1212;
    const url = new URL(`http://localhost:${port}`);
    url.pathname = htmlFileName;
    flag = url.href;
  } else {
    flag = `file://${path.resolve(__dirname, "dist", htmlFileName)}`;
  }
  return flag;
};

module.exports = {
  resolveHtmlPath,
};
