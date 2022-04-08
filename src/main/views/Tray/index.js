let systemTray = null;

const path = require("path");

const { app, Menu, Tray } = require("electron");

const tray = () => {
  const img = path.join(__dirname, "UpOutlined.png");

  systemTray = new Tray(img);
  const contextMenu = Menu.buildFromTemplate([
    { label: "Item1", type: "radio" },
    { label: "Item2", type: "radio" },
    { label: "Item3", type: "radio", checked: true },
    { label: "Item4", type: "radio" },
  ]);

  systemTray.setToolTip("This is my application.");
  systemTray.setContextMenu(contextMenu);

  systemTray.addListener("click", (event, bounds, position) => {
    console.log(event, bounds, position, 1);
  });

  systemTray.addListener("right-click", (event, bounds) => {
    console.log(event, bounds, 2);
  });

  systemTray.addListener("double-click", (event, bounds) => {
    console.log(event, bounds, 3);
  });

  systemTray.addListener("drop", (event, bounds) => {
    console.log(event, bounds, 4);
  });
};

module.exports = tray;
