const { ipcMain, Notification } = require("electron");

const notification = (mainWindow) => {
  ipcMain.on("stranger:notification", (event, data, type, OtherProcesses) => {
    const flag = Notification.isSupported();

    if (!flag) {
      return;
    }

    let options = {
      title: data.title,
      subtitle: data.subtitle,
      body: data.body,
    };

    switch (type) {
      case "reply":
        options = {
          ...options,
          hasReply: true,
          replyPlaceholder: data.placeholder,
        };
        break;
      case "option":
        options = {
          ...options,
          actions: data.actions,
        };
        break;
      case "union":
        options = {
          ...options,
          hasReply: true,
          replyPlaceholder: data.placeholder,
          actions: data.actions,
        };
        break;
      default:
        break;
    }

    // 实例化
    const notification = new Notification({
      ...options,
      silent: true,
    });

    // 显示
    notification.show();

    let obj = {
      type, // 触发操作
      data, // 返回数据
    };

    // 点击通知
    notification.addListener("click", (event) => {
      obj = {
        type: "click",
      };
    });

    // 回复通知
    notification.addListener("reply", (event, reply) => {
      obj = {
        type: "reply",
        data: reply,
      };
    });

    // 选择通知
    notification.addListener("action", (event, index) => {
      obj = {
        type: "action",
        data: index,
      };
    });

    // 发生问题
    notification.addListener("failed", (event, error) => {
      obj = {
        type: "failed",
        data: error,
      };
    });

    if (OtherProcesses) {
      event.reply(OtherProcesses, obj);
    }
  });
};

module.exports = notification;
