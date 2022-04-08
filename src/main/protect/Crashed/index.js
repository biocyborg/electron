const { dialog } = require("electron");

const reloadWindow = async (mainWindow, details) => {
  try {
    const options = {
      title: "渲染器进程崩溃",
      type: "info",
      message: "这个进程已经崩溃.",
      buttons: ["重载", "关闭", "启动"],
    };
    const choice = await dialog.showMessageBox(mainWindow, options);
    console.log(choice);
  } catch (error) {
    console.log(error);
  }
};

const crashed = (mainWindow) => {
  mainWindow.webContents.on("render-process-gone", (event, details) => {
    reloadWindow(mainWindow, details);
  });
};

// { response: 0, checkboxChecked: false } // 重载
// { response: 1, checkboxChecked: false } // 关闭
module.exports = crashed;
