import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context";
import reducer, { initialState } from "./reducer";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider initialState={initialState} reducer={reducer}>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
