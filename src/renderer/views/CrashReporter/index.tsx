// 程序奔溃

import React from "react";
import { Button } from "@mui/material";

import styles from "./index.module.scss";

const CrashReporter = () => {
  const programCrash = () => {
    process.crash();
    // window.stranger.ipcRenderer.send("stranger:programCrash");
  };

  return (
    <div className={styles.content}>
      <Button variant="contained" onClick={programCrash}>
        程序崩溃
      </Button>
    </div>
  );
};

export default CrashReporter;
