// 显示用于打开和保存文件、警报等的本机系统对话框

import React from "react";
import { Button } from "@mui/material";

import styles from "./index.module.scss";

const Dialog = () => {
  const dialogBox = () => {
    window.stranger.ipcRenderer.send("stranger:dialogBox");
  };

  return (
    <div className={styles.content}>
      <Button variant="contained" onClick={dialogBox}>
        对话框
      </Button>
    </div>
  );
};

export default Dialog;
