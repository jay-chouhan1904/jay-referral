import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");
  const user = rootEl.getAttribute("user");

  ReactDom.render(
    <React.StrictMode>
      <BrowserRouter>
        <App user={user} />
      </BrowserRouter>
    </React.StrictMode>,
    rootEl
  );
});
