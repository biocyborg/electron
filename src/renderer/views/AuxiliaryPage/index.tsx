import React from "react";

import styles from "./index.module.scss";

const { useEffect, useState } = React;

const AuxiliaryPage = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    window.stranger.ipcRenderer.on(
      "stranger:AuxiliaryPage",
      (event: any, msg: any) => {
        console.log(event, msg);
        setData(msg.name);
      }
    );
  }, []);

  return (
    <div className={styles.content}>
      <div>AuxiliaryPage</div>
      <div>{data}</div>
      <div className={styles.back} />
      <div className={styles.heart} />
    </div>
  );
};

export default AuxiliaryPage;
