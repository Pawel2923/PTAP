import { useContext, useEffect, useState, forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Option from "./Option/Option";
import ConsoleContext from "../../../store/console-context";
import PageContext from "../../../store/page-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import classes from "./Menu.module.css";

const toolbarButtonsProperties = {
  type: "DISABLE",
  mainButton: "file",
  subButtons: ["exit", "save", "export"],
  newState: true,
};

const Menu = forwardRef(({ setIsMenuExpanded }, menuRef) => {
  const navigate = useNavigate();
  const { width } = useContext(PageContext);
  const { currentPage, setCurrentPage, dispatchToolbarButtons } =
    useContext(ConsoleContext);
  const [expandMenu, setExpandMenu] = useState(false);

  useEffect(() => {
    if (width > 740) {
      setExpandMenu(true);
      setIsMenuExpanded(true);
    } else {
      setExpandMenu(false);
      setIsMenuExpanded(false);
    }
  }, [width, setIsMenuExpanded]);

  const barsClickHandler = () => {
    setExpandMenu((prevState) => !prevState);
    setIsMenuExpanded((prevState) => !prevState);
  };

  const optionClickHandler = (ev) => {
    if (width <= 740) {
      setExpandMenu(false);
      setIsMenuExpanded(false);
    }

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

  const optionClasses = !expandMenu ? classes.shrink : "";
  const barsTitle = expandMenu ? "Zmniejsz menu" : "Poszerz menu";

  return (
    <nav className={`${classes.menu} ${!expandMenu ? classes["shrink-menu"] : ""}`} ref={menuRef}>
      <Option
        className={`${optionClasses} ${classes.bars} ${!expandMenu ? classes["center-bars"] : ""}`}
        title={barsTitle}
        onClick={barsClickHandler}
      >
        <FontAwesomeIcon icon={solid("bars")} />
      </Option>
      <Option
        id="home"
        className={optionClasses}
        title="Główna"
        onClick={optionClickHandler}
      >
        <FontAwesomeIcon icon={solid("house")} />
        {expandMenu && <span> Główna</span>}
      </Option>
      <Option
        id="editor"
        className={optionClasses}
        title="Edytor"
        onClick={optionClickHandler}
      >
        <FontAwesomeIcon icon={solid("pencil")} />
        {expandMenu && <span> Edytor</span>}
      </Option>
      <Option
        id="exit"
        className={optionClasses}
        title="Wyjdź"
        onClick={exitClickHandler}
      >
        <FontAwesomeIcon icon={solid("right-from-bracket")} />
        {expandMenu && <span> Wyjdź</span>}
      </Option>
    </nav>
  );
});

Menu.displayName = "Menu";

Menu.propTypes = {
  setIsMenuExpanded: PropTypes.func,
};

export default Menu;
