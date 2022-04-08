import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { IconProvider } from "@icon-park/react/es/runtime";

import theme from "./utils/theme";
import IconConfig from "./utils/IconConfig";

import App from "./App";

import "./event";

import "./styles/index.scss";

render(
  <BrowserRouter>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <IconProvider value={IconConfig}>
          <App />
        </IconProvider>
      </ThemeProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
