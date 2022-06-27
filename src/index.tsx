import { CssBaseline, ThemeProvider } from "@mui/material";

import App from "./App";
import { LocalizationProvider } from "@mui/lab";
import React from "react";
import ReactDOM from "react-dom";
import { peepTheme } from "./theme";

import PeepLuxonAdapter from "./lib/PeepLuxonAdapter";

ReactDOM.render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={PeepLuxonAdapter}>
      <ThemeProvider theme={peepTheme}>
        <CssBaseline />

        <App />
      </ThemeProvider>
    </LocalizationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
