import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    black: "#000",
    white: "#ffffff",
    darkGreen: "#06B49A",
    lightGreen: "#AFDBD2",
    gray: "#36313D"
  },
  fonts: ["sans-serif", "Roboto"],
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