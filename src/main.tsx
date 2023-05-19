import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Router from "./routes";

import "@styles/global.scss";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename="https://wosamfrontend-production.up.railway.app">
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);
