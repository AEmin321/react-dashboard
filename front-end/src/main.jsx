import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./state/themeSlice.js";
import { setupListeners } from "@reduxjs/toolkit/query";
import { adminApi } from "./state/apiSlice.js";

const store = configureStore({
  reducer: {
    global: themeSlice,
    [adminApi.reducerPath]: adminApi.reducer,
  },
  middleware: (getDefault) => getDefault().concat(adminApi.middleware),
});
setupListeners(store.dispatch);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
