const { app, Menu } = require("electron");

const isMac = process.platform === "darwin";

// 默认菜单
const buildDefaultTemplate = (mainWindow) => {
  const templateDefault = [
    {
      label: "&File",
      submenu: [
        {
          label: "&Open",
          accelerator: "Ctrl+O",
        },
        {
          label: "&Close",
          accelerator: "Ctrl+W",
          click: () => {
            mainWindow.close();
          },
        },
      ],
    },
  ];
  return [templateDefault];
};

// macOS菜单
const buildDarwinTemplate = (mainWindow) => {
  const { name } = app;
  const subMenuAbout = {
    label: name,
    submenu: [
      {
        label: `关于 ${name}`,
        role: "about",
      },
      {
        type: "separator",
      },
      {
        label: `隐藏 ${name}`,
        accelerator: "Command+H",
        role: "hide",
      },
      {
        label: "隐藏其它",
        accelerator: "Command+Alt+H",
        role: "hideothers",
      },
      {
        label: "显示全部",
        role: "unhide",
      },
      {
        type: "separator",
      },
      {
        label: "退出",
        accelerator: "Command+Q",
        click: function () {
          app.quit();
        },
      },
    ],
  };
  return [subMenuAbout];
};

const buildMenu = (mainWindow) => {
  const template = isMac
    ? buildDarwinTemplate(mainWindow)
    : buildDefaultTemplate(mainWindow);
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
  return menu;
};

module.exports = buildMenu;
