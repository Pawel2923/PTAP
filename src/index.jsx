import React from "react";
import ReactDOM from "react-dom/client";

import AppRoutes from "./AppRoutes";
import PageProvider from "./store/PageProvider";
import SearchProvider from "./store/SearchProvider";
import "./icons/style.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PageProvider>
      <SearchProvider>
        <AppRoutes />
      </SearchProvider>
    </PageProvider>
  </React.StrictMode>
);
