require("core-js/stable");
require("regenerator-runtime/runtime");

const path = require("path");
const { app, BrowserWindow } = require("electron");
// const Sentry = require("@sentry/electron");

const buildMenu = require("./views/Menu");
const contextMenu = require("./views/ContextMenu");
const notification = require("./views/Notification");
const tray = require("./views/Tray");

const handleMessage = require("./event/Message");

const crashed = require("./protect/Crashed");

const { resolveHtmlPath } = require("./utils/LoadURL");

const port = process.env.PORT || 1212;

// let mainWindow: BrowserWindow | null = null;

const createWindow = async () => {
  let mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 828,
    // icon: getAssetPath("icon.png"),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, "utils", "Preload.js"),
    },
  });

  mainWindow.loadURL(resolveHtmlPath("index.html"));

  mainWindow.webContents.openDevTools();

  mainWindow.on("ready-to-show", () => {
    console.log("启动");
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }

    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
    }
  });

  mainWindow.on("closed", () => {
    console.log("结束");
    mainWindow = null;
  });

  // 自定义菜单
  new buildMenu(mainWindow);

  // 右键菜单
  contextMenu(mainWindow);

  // 处理系统通知
  notification(mainWindow);

  // 处理渲染进程通讯
  handleMessage(mainWindow);

  // 提交崩溃日志
  crashed(mainWindow);

  // 初始化Sentry
  // Sentry.init({
  //   dsn: "https://69794f9806b94b9593db42533091d8fb@o483799.ingest.sentry.io/6249881",
  // });
};

app.whenReady().then(() => {
  createWindow();
  // 系统托盘
  tray();
  app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    // if (mainWindow === null) createWindow();
  });
});
