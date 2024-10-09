import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global.css";

//10
import { BrowserRouter } from "react-router-dom";
//11
import { Provider } from "react-redux";

import store from "./app/store.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    {/* 12  */}
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
