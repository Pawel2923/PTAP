import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import Home from "./components/Home/Home";
import Wiki from "./components/Wiki/Wiki";
import Intro from "./components/Wiki/Articles/Intro";
import articles from "./components/data/Articles.json";
import SignUp from "./components/SignUp/SignUp";
import Error404 from "./components/Error/Error404";
import PageProvider from "./store/PageProvider";
import SearchProvider from "./store/SearchProvider";
import "./icons/style.css";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="wiki" element={<Wiki />}>
        <Route index element={<Intro />} />
        {articles.map((item, key) => {
          const parser = new DOMParser();
          const content = parser.parseFromString(item.content, "text/html").body.innerHTML;
          return (<Route key={key} path={item.path} element={
            <React.Fragment>
              <header>
                <h2>{item.header}</h2>
              </header>
              <div className="content">
                {content}
              </div>
            </React.Fragment>
          } />)
        }
        )}
      </Route>
      <Route path="rejestracja" element={<SignUp />} />
      <Route path="*" element={<Error404 />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PageProvider>
      <SearchProvider>
        <RouterProvider router={router} />
      </SearchProvider>
    </PageProvider>
  </React.StrictMode>
);
