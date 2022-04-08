// 创建OS(操作系统)桌面通知

import * as React from "react";
import { Button, TextField, Grid } from "@mui/material";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import styles from "./index.module.scss";

const { useState } = React;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

interface sendNotificationObj {
  title: string;
  subtitle: string;
  body: string;
  placeholder?: string;
  actions?: {
    type: string;
    text: string;
  }[];
}

const Notification = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [body, setBody] = useState("");

  const sendNotification = (type: string) => {
    let obj: sendNotificationObj = {
      title,
      subtitle,
      body,
    };

    switch (type) {
      case "reply":
        obj = {
          ...obj,
          placeholder: "heihiei",
        };
        break;
      case "option":
        obj = {
          ...obj,
          actions: [{ type: "button", text: "测试1" }],
        };
        break;
      case "union":
        obj = {
          ...obj,
          placeholder: "heihiei",
          actions: [
            { type: "button", text: "测试1" },
            { type: "button", text: "测试2" },
          ],
        };
        break;
      default:
        break;
    }

    window.stranger.ipcRenderer.send("stranger:notification", obj, type);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    func: {
      (value: React.SetStateAction<string>): void;
      (value: React.SetStateAction<string>): void;
      (value: React.SetStateAction<string>): void;
      (arg0: any): void;
    }
  ) => {
    func(event.target.value);
  };

  return (
    <div className={styles.content}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Item>
              {/* <div className={styles.TextField}> */}
              <TextField
                id="outlined-basic"
                label="title"
                variant="outlined"
                onChange={(e) => handleChange(e, setTitle)}
              />
              <TextField
                id="outlined-basic"
                label="subtitle"
                variant="outlined"
                onChange={(e) => handleChange(e, setSubtitle)}
              />
              <TextField
                id="outlined-basic"
                label="body"
                variant="outlined"
                onChange={(e) => handleChange(e, setBody)}
              />
              {/* </div> */}
            </Item>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <Item>
              <Button
                variant="contained"
                onClick={() => sendNotification("base")}
              >
                发送基础提示
              </Button>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Button
                variant="contained"
                onClick={() => sendNotification("reply")}
              >
                发送回复提示
              </Button>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Button
                variant="contained"
                onClick={() => sendNotification("option")}
              >
                发送选择提示
              </Button>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Button
                variant="contained"
                onClick={() => sendNotification("union")}
              >
                发送混合提示
              </Button>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Notification;
