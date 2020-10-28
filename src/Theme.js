import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    black: "rgb(37, 37, 37)",
    white: "#F4F4F2",
    gray: "#36313D",

    ultraUltraDark: "#322f3d",
    ultraDark: "#59405C",
    dark: "#4B5D67",
    light: "#e8e8e8",
    ultraLight: "#BBBFCA",
    ultraUltraLight: "#495464",
  },
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  },
  spaces: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;