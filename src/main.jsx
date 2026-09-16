import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { MobileApp } from "./MobileApp.jsx";
import "./styles.css";

const isMobileApp = window.location.pathname.startsWith("/mobile");

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {isMobileApp ? <MobileApp /> : <App />}
  </React.StrictMode>,
);
