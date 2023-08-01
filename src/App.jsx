import { useContext } from "react";
import { Outlet } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import SearchContext from "./store/search-context";
import { Search } from "./components/Search/Search";

function App() {
  const { isShown } = useContext(SearchContext);

  return (
    <>
      {isShown ? <Search /> : ""}
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
