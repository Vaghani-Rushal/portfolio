import React from "react";
import { render } from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./contexts/theme";

render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
