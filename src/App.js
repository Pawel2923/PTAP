import { Route, Routes } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Wiki from "./components/Wiki/Wiki";
import Footer from "./components/Footer/Footer";

function App() {
  const error404 = <h1>Błąd 404</h1>;

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wiki" element={<Wiki />} />
        <Route path="*" element={error404} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
