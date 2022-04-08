window.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  console.log("右击11");
  window.stranger.ipcRenderer.send("stranger:contextMenu");
});
