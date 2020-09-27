import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// Bungkus app.js dengan provider
import { Provider } from "react-redux";
// Import store
import store from "./redux/store/store";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
