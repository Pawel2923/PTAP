import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Menu.module.css";
import Option from "./Option/Option";
import ConsoleContext from "../../../store/console-context";
import PageContext from "../../../store/page-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

const toolbarButtonsProperties = {
  type: "DISABLE",
  mainButton: "file",
  subButtons: ["exit", "save", "export"],
  newState: true,
};

const Menu = () => {
  const navigate = useNavigate();
  const { width } = useContext(PageContext);
  const { currentPage, setCurrentPage, dispatchToolbarButtons } =
    useContext(ConsoleContext);

  const optionClickHandler = (ev) => {
    if (currentPage !== ev.currentTarget.id) {
      setCurrentPage(ev.currentTarget.id);
      sessionStorage.setItem("currentPage", ev.currentTarget.id);
    }

    if (currentPage !== "editor") {
      dispatchToolbarButtons(toolbarButtonsProperties);
    }
  };

  const exitClickHandler = () => {
    setCurrentPage("home");
    sessionStorage.setItem("currentPage", "home");
    navigate("/");
  };

  return (
    <nav className={classes.menu}>
        
      <Option id="home" onClick={optionClickHandler}>
        <FontAwesomeIcon icon={icon({ name: "house", style: "solid" })} />
        {width > 740 && <span> Główna</span>}
      </Option>
      <Option id="editor" onClick={optionClickHandler}>
        <FontAwesomeIcon icon={icon({ name: "pencil", style: "solid" })} />
        {width > 740 && <span> Edytor</span>}
      </Option>
      <Option id="exit" onClick={exitClickHandler}>
        <FontAwesomeIcon
          icon={icon({ name: "right-from-bracket", style: "solid" })}
        />
        {width > 740 && <span> Wyjdź</span>}
      </Option>
    </nav>
  );
};

export default Menu;
