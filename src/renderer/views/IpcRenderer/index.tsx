// 从渲染器进程到主进程的异步通信

import React from "react";
import { Button } from "@mui/material";

import styles from "./index.module.scss";

const IpcRenderer = () => {
  const communication = () => {
    window.stranger.ipcRenderer.send(
      "stranger:communication",
      { name: "来自IpcRenderer渲染组建的send信息" },
      "stranger:AuxiliaryPage"
    );
    console.log("next");
  };

  const asynchronous = async () => {
    try {
      const result = await window.stranger.ipcRenderer.invoke(
        "stranger:asynchronous",
        {
          name: "异步通讯",
        }
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    console.log("next");
  };

  const blocking = () => {
    console.log(
      window.stranger.ipcRenderer.sendSync("stranger:blocking", {
        name: "来自IpcRenderer渲染组建的sendSync信息",
      })
    );

    console.log("next");
  };

  return (
    <div className={styles.content}>
      <Button variant="contained" onClick={communication}>
        渲染进程通讯
      </Button>
      <Button variant="contained" onClick={asynchronous}>
        异步渲染进程
      </Button>
      <Button variant="contained" onClick={blocking}>
        堵塞渲染进程
      </Button>
    </div>
  );
};

export default IpcRenderer;
