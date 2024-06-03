import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter  as Router } from "react-router-dom";

import "./assets/styles/tailwind.css";
import App from "./_App";
import "./global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
);
