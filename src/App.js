import { Route, Routes } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Wiki from "./components/Wiki/Wiki";
import SignUp from "./components/SignUp/SignUp";
import Footer from "./components/Footer/Footer";
import WidthProvider from "./store/WidthProvider";
import "./icons/style.css";

function App() {
  const error404 = <h1>Błąd 404</h1>;

  return (
    <WidthProvider>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wiki" element={<Wiki />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={error404} />
      </Routes>
      <Footer />
    </WidthProvider>
  );
}

export default App;
