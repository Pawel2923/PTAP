import React, { useContext } from "react";
import { Outlet } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import "./icons/style.css";
import SearchContext from "./store/search-context";
import { Search } from "./components/Search/Search";

function App() {
  const { isShown } = useContext(SearchContext);

  return (
    <React.Fragment>
      {isShown ? <Search /> : ""}
      <Nav />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
}

export default App;
