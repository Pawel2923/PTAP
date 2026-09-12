import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import PageProvider from "./store/PageProvider";
import SearchProvider from "./store/SearchProvider";
import CookieProvider from "./store/CookieProvider";
import "svgxuse";
import "./css/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PageProvider>
      <SearchProvider>
        <CookieProvider>
          <App />
        </CookieProvider>
      </SearchProvider>
    </PageProvider>
  </React.StrictMode>
);
