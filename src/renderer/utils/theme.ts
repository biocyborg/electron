import { createTheme } from "@mui/material";

const theme = createTheme({
  // 调色板
  palette: {
    primary: {
      // light: 这将从 palette.primary.main 中进行计算，
      main: "#bc58bf",
      // dark: 这将从 palette.primary.main 中进行计算，
      // contrastText: 这将计算与 palette.primary.main 的对比度
    },
    secondary: {
      light: "#8858bf",
      main: "#bf588f",
      // dark: 这将从 palette.secondary.main 中进行计算，
      contrastText: "#ffcc00",
    },
    // 使用 `getContrastText()` 来最大化
    // 背景和文本的对比度
    contrastThreshold: 3,
    // 使用下面的函数用于将颜色的亮度在其调色板中
    // 移动大约两个指数。
    // 例如，从红色 500（Red 500）切换到 红色 300（Red 300）或 红色 700（Red 700）。
    tonalOffset: 0.2,
  },

  //文字铸排
  typography: {},

  //间距
  spacing: 8,

  //断点
  breakpoints: {},

  // 层级
  zIndex: {},

  //过渡动画
  transitions: {},

  //  组件
  components: {},
});

export default theme;
