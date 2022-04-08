const { contextBridge, ipcRenderer } = require("electron");

/**
 * @param {string} channel
 * @returns {true | never}
 */
function validateIPC(channel) {
  if (!channel || !channel.startsWith("stranger:")) {
    throw new Error(`Unsupported event IPC channel '${channel}'`);
  }

  return true;
}

const globals = {
  ipcRenderer: {
    /**
     * @param {string} channel
     * @param {any[]} args
     */
    send(channel, ...args) {
      if (validateIPC(channel)) {
        ipcRenderer.send(channel, ...args);
      }
    },

    /**
     * @param {string} channel
     * @param {any[]} args
     */
    sendSync(channel, ...args) {
      if (validateIPC(channel)) {
        return ipcRenderer.sendSync(channel, ...args);
      }
    },

    /**
     * @param {string} channel
     * @param {any[]} args
     * @returns {Promise<any> | undefined}
     */
    invoke(channel, ...args) {
      if (validateIPC(channel)) {
        return ipcRenderer.invoke(channel, ...args);
      }
    },

    /**
     * @param {string} channel
     * @param {(event: IpcRendererEvent, ...args: any[]) => void} listener
     * @returns {IpcRenderer}
     */
    on(channel, listener) {
      if (validateIPC(channel)) {
        ipcRenderer.on(channel, listener);

        return this;
      }
    },

    /**
     * @param {string} channel
     * @param {(event: IpcRendererEvent, ...args: any[]) => void} listener
     * @returns {IpcRenderer}
     */
    once(channel, listener) {
      if (validateIPC(channel)) {
        ipcRenderer.once(channel, listener);

        return this;
      }
    },

    /**
     * @param {string} channel
     * @param {(event: IpcRendererEvent, ...args: any[]) => void} listener
     * @returns {IpcRenderer}
     */
    removeListener(channel, listener) {
      if (validateIPC(channel)) {
        ipcRenderer.removeListener(channel, listener);

        return this;
      }
    },
  },
};

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld("stranger", globals);
  } catch (error) {
    console.log(error);
  }
} else {
  window.stranger = globals;
}
