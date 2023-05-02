import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fontsource/public-sans";
import { CssBaseline } from "@mui/joy";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";

const theme = extendTheme({});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <CssVarsProvider disableTransitionOnChange defaultMode='dark' theme={theme}>
    <CssBaseline />
    <App />
  </CssVarsProvider>
);
