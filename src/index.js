import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

// Creating a root using ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the App component wrapped with the Redux Provider
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
