import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react";
import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./state/index.js";

const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);