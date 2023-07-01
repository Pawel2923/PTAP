import { Route, Routes } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Wiki from "./components/Wiki/Wiki";
import SignUp from "./components/SignUp/SignUp";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
import articleList from "./components/data/ArticleList.json";
import Flight from "./components/Wiki/Articles/Flight";
import Error404 from "./components/Error/Error404";
import WidthProvider from "./store/WidthProvider";
import "./icons/style.css";

function App() {
  return (
    <WidthProvider>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wiki" exact element={<Wiki />} />
        {articleList.map((item, key) => <Route key={key} path={item.address} exact element={item.element} />)}
        <Route path="/rejestracja" element={<SignUp />} />
        <Route path="/szukaj" element={<Search />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </WidthProvider>
  );
}

export default App;
