import React from "react";

import styles from "./index.module.scss";

const Draw = () => {
  return (
    <div className={styles.content}>
      <div className={styles.head}>
        <div className={styles.eyebrow}>
          <p />
          <p />
        </div>
        <div className={styles.eye}>
          <p />
          <p />
        </div>
        <div className={styles.mouth} />
      </div>
    </div>
  );
};

export default Draw;
