const { ipcMain, Menu, BrowserWindow } = require("electron");

const isMac = process.platform === "darwin";

const contextMenu = (mainWindow) => {
  ipcMain.on("stranger:contextMenu", (event) => {
    const template = [
      {
        label: "Menu Item 1",
        click: () => {
          event.sender.send("context-menu-command", "menu-item-1");
        },
      },
      { type: "separator" },
      { label: "Menu Item 2", type: "checkbox", checked: true },
    ];

    const menu = Menu.buildFromTemplate(template);
    menu.popup(BrowserWindow.fromWebContents(event.sender));
  });
};

module.exports = contextMenu;
