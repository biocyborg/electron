// 读取并响应Chromium本地色彩主题中的变化

import React from "react";

import styles from "./index.module.scss";

const NativeTheme = () => {
  return (
    <div className={styles.content}>
      <div>NativeTheme</div>
    </div>
  );
};

export default NativeTheme;
