import React from "react";
import classnames from "classnames";
import { IconButton, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  AcceptEmail,
  DataFile,
  Resting,
  Folder,
  TicketsChecked,
  Devices,
  ExpandRight,
  InboxOut,
  Comment,
  Pic,
} from "@icon-park/react";

import styles from "./index.module.scss";

const Menu = () => {
  const navigate = useNavigate();
  let path = window.location.pathname;

  return (
    <div className={styles.Menucontent}>
      <Tooltip title="IpcRenderer" placement="right">
        <IconButton
          aria-label="fingerprint"
          color="secondary"
          className={classnames({ [styles.hit]: path === "/IpcRenderer" })}
          onClick={() => navigate("/IpcRenderer")}
        >
          <AcceptEmail />
        </IconButton>
      </Tooltip>
      <Tooltip title="Clipboard" placement="right">
        <IconButton
          aria-label="fingerprint"
          color="secondary"
          className={classnames({ [styles.hit]: path === "/Clipboard" })}
          onClick={() => navigate("/Clipboard")}
        >
          <DataFile />
        </IconButton>
      </Tooltip>
      <Tooltip title="Dialog" placement="right">
        <IconButton
          aria-label="fingerprint"
          color="secondary"
          className={classnames({ [styles.hit]: path === "/Dialog" })}
          onClick={() => navigate("/Dialog")}
        >
          <Resting />
        </IconButton>
      </Tooltip>
      <Tooltip title="CrashReporter" placement="right">
        <IconButton
          aria-label="fingerprint"
          color="secondary"
          className={classnames({ [styles.hit]: path === "/CrashReporter" })}
          onClick={() => navigate("/CrashReporter")}
        >
          <Folder />
        </IconButton>
      </Tooltip>
      <Tooltip title="GlobalShortcut" placement="right">
        <IconButton
          aria-label="fingerprint"
          color="secondary"
          className={classnames({ [styles.hit]: path === "/GlobalShortcut" })}
          onClick={() => navigate("/GlobalShortcut")}
        >
          <TicketsChecked />
        </IconButton>
      </Tooltip>
      <Tooltip title="NativeImage" placement="right">
        <IconButton
          aria-label="fingerprint"
          color="secondary"
          className={classnames({ [styles.hit]: path === "/NativeImage" })}
          onClick={() => navigate("/NativeImage")}
        >
          <Devices />
        </IconButton>
      </Tooltip>
      <Tooltip title="NativeTheme" placement="right">
        <IconButton
          aria-label="fingerprint"
          color="secondary"
          className={classnames({ [styles.hit]: path === "/NativeTheme" })}
          onClick={() => navigate("/NativeTheme")}
        >
          <ExpandRight />
        </IconButton>
      </Tooltip>
      <Tooltip title="Screen" placement="right">
        <IconButton
          aria-label="fingerprint"
          color="secondary"
          className={classnames({ [styles.hit]: path === "/Screen" })}
          onClick={() => navigate("/Screen")}
        >
          <InboxOut />
        </IconButton>
      </Tooltip>

      <Tooltip title="Notification" placement="right">
        <IconButton
          aria-label="fingerprint"
          color="secondary"
          className={classnames({ [styles.hit]: path === "/Notification" })}
          onClick={() => navigate("/Notification")}
        >
          <Comment />
        </IconButton>
      </Tooltip>

      <Tooltip title="Draw" placement="right">
        <IconButton
          aria-label="fingerprint"
          color="secondary"
          className={classnames({ [styles.hit]: path === "/Draw" })}
          onClick={() => navigate("/Draw")}
        >
          <Pic />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default Menu;
