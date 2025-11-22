import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.css";
import { App } from "./App";

// Render the app
const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
