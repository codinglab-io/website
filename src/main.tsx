import "./globals.css";
import "./egg.js";

import React from "react";
import ReactDOM from "react-dom/client";
import { Index } from "./pages";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
