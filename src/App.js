import { Outlet } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer"
import WidthProvider from "./store/WidthProvider";
import "./icons/style.css";

function App() {
  return (
    <WidthProvider>
      <Nav />
      <Outlet />
      <Footer />
    </WidthProvider>
  );
}

export default App;
