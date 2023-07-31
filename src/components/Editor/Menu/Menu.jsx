import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Menu.module.css";
import Option from "./Option";
import ConsoleContext from "../../../store/console-context";

const Menu = () => {
  const navigate = useNavigate();
  const { currentPage, setCurrentPage } = useContext(ConsoleContext);

  const optionClickHandler = (ev) => {
    if (currentPage !== ev.currentTarget.id) {
      setCurrentPage(ev.currentTarget.id);
    }
  };

  const exitClickHandler = () => {
    setCurrentPage("home");
    navigate("/");
  };

  return (
    <nav className={classes.menu}>
      <Option title="Główna" id="home" onClick={optionClickHandler} />
      <Option title="Edytor" id="editor" onClick={optionClickHandler} />
      <Option title="Wyjdź" id="exit" onClick={exitClickHandler} />
    </nav>
  );
};

export default Menu;
