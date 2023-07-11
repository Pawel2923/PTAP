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
import SignUp from "./components/SignUp/SignUp";
import Flight from "./components/Wiki/Articles/Flight";
import Search from "./components/Search/Search";
import Error404 from "./components/Error/Error404";
import WidthProvider from "./store/WidthProvider";
import "./icons/style.css";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="wiki" element={<Wiki />}>
          <Route index element={<Intro />} />
          <Route path="modele-lotu" element={<Flight />} />
        </Route>
        <Route path="rejestracja" element={<SignUp />} />
        <Route path="szukaj" element={<Search />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </React.Fragment>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WidthProvider>
      <RouterProvider router={router} />
    </WidthProvider>
  </React.StrictMode>
);
