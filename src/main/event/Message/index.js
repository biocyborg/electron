const { ipcMain, dialog } = require("electron");

// 关闭应用
const windowClose = (mainWindow) => {
  ipcMain.on("stranger:close", (event, data) => {
    mainWindow.close();
  });
};

// 向渲染进程通讯
const communication = (mainWindow) => {
  ipcMain.on("stranger:communication", (event, data, OtherProcesses) => {
    console.log(data, OtherProcesses);
    event.reply(OtherProcesses, data);
  });
};

// 异步通讯
const asynchronous = (mainWindow) => {
  ipcMain.handle("stranger:asynchronous", async (event, data) => {
    console.log(data);
    return "主进程返回异步通讯";
  });
};

// 同步通讯
const blocking = (mainWindow) => {
  ipcMain.on("stranger:blocking", async (event, data) => {
    console.log(data);
    event.returnValue = "主进程返回同步通讯";
  });
};

//程序崩溃
const programCrash = () => {
  ipcMain.on("stranger:programCrash", (event, data) => {
    process.crash();
  });
};

// 对话框
const dialogBox = (mainWindow) => {
  ipcMain.on("stranger:dialogBox", async (event, data) => {
    try {
      const options = {
        title: "渲染器进程崩溃",
        type: "info",
        message: "这个进程已经崩溃.",
        detail: "234234234",
        buttons: ["重载", "关闭", "启动"],
      };
      const choice = await dialog.showMessageBox(mainWindow, options);
      console.log(choice);
    } catch (error) {
      console.log(error);
    }
  });
};

const handleMessage = (mainWindow) => {
  windowClose(mainWindow);
  communication(mainWindow);
  asynchronous(mainWindow);
  blocking(mainWindow);
  programCrash(mainWindow);
  dialogBox(mainWindow);
};

module.exports = handleMessage;
