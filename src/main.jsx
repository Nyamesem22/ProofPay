import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./styles.css";

const isMobileApp = window.location.pathname.startsWith("/mobile");
const MobileFinal = lazy(() => import("./MobileFinal.jsx").then((module) => ({ default: module.MobileFinal })));

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {isMobileApp ? (
      <Suspense fallback={<div style={{ minHeight: "100vh", display: "grid", placeItems: "center", fontFamily: "Inter, sans-serif" }}>Loading ProofPay…</div>}>
        <MobileFinal />
      </Suspense>
    ) : (
      <App />
    )}
  </React.StrictMode>,
);

if ("serviceWorker" in navigator && import.meta.env.PROD) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js", { updateViaCache: "none" }).catch(() => {});
  });
}
