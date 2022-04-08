import * as React from "react";

import { Route, Routes, Navigate } from "react-router-dom";

import IpcRenderer from "../views/IpcRenderer";
import Clipboard from "../views/Clipboard";
import CrashReporter from "../views/CrashReporter";
import Dialog from "../views/Dialog";
import GlobalShortcut from "../views/GlobalShortcut";
import NativeImage from "../views/NativeImage";
import NativeTheme from "../views/NativeTheme";
import Screen from "../views/Screen";
import Notification from "../views/Notification";
import Draw from "../views/Draw";

import styles from "./index.module.scss";

const RouteContent = () => {
  return (
    <div className={styles.content}>
      <Routes>
        <Route
          key="IpcRenderer"
          path="/IpcRenderer"
          element={<IpcRenderer />}
        />

        <Route key="Clipboard" path="/Clipboard" element={<Clipboard />} />

        <Route
          key="CrashReporter"
          path="/CrashReporter"
          element={<CrashReporter />}
        />

        <Route key="Dialog" path="/Dialog" element={<Dialog />} />

        <Route
          key="GlobalShortcut"
          path="/GlobalShortcut"
          element={<GlobalShortcut />}
        />

        <Route
          key="NativeImage"
          path="/NativeImage"
          element={<NativeImage />}
        />

        <Route
          key="NativeTheme"
          path="/NativeTheme"
          element={<NativeTheme />}
        />

        <Route key="Screen" path="/Screen" element={<Screen />} />

        <Route
          key="Notification"
          path="/Notification"
          element={<Notification />}
        />

        <Route key="Draw" path="/Draw" element={<Draw />} />

        <Route path="*" element={<Navigate replace to="/IpcRenderer" />} />
      </Routes>
    </div>
  );
};

export default RouteContent;
