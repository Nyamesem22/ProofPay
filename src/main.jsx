import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { MobileFinal } from "./MobileFinal.jsx";
import "./styles.css";

const isMobileApp = window.location.pathname.startsWith("/mobile");

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {isMobileApp ? <MobileFinal /> : <App />}
  </React.StrictMode>,
);

if ("serviceWorker" in navigator && import.meta.env.PROD) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js", { updateViaCache: "none" }).catch(() => {});
  });
}
