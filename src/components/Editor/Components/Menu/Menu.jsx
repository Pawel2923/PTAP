import { useContext, useEffect, useState, forwardRef } from "react";
import PropTypes from "prop-types";
import Option from "./Option/Option.jsx";
import {EditorContext} from "/src/store/Editor/editor-context";
import PageContext from "/src/store/page-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import classes from "./Menu.module.css";

const Menu = forwardRef(({ setIsMenuExpanded }, menuRef) => {
  const { width } = useContext(PageContext);
  const { disableToolbarButtons } = useContext(EditorContext);
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

  const optionClickHandler = () => {
    if (width <= 740) {
      setExpandMenu(false);
      setIsMenuExpanded(false);
    }

    if (!location.pathname.includes("/editor")) {
      disableToolbarButtons("file", "save", "exit");
    }
  };

  const optionClasses = !expandMenu ? classes.shrink : "";
  const barsTitle = expandMenu ? "Zmniejsz menu" : "Poszerz menu";

  return (
    <nav className={`${classes.menu} ${!expandMenu ? classes["shrink-menu"] : ""}`} ref={menuRef}>
      <Option
        className={`${optionClasses}`}
        title={barsTitle}
        onClick={barsClickHandler}
      >
        <FontAwesomeIcon icon={solid("bars")} />
        {expandMenu && <span> Menu</span>}
      </Option>
      <Option
        to="/console"
        className={optionClasses}
        title="Główna"
        onClick={optionClickHandler}
      >
        <FontAwesomeIcon icon={solid("house")} />
        {expandMenu && <span> Główna</span>}
      </Option>
      <Option
        to="/console/editor"
        className={optionClasses}
        title="Edytor"
        onClick={optionClickHandler}
      >
        <FontAwesomeIcon icon={solid("pencil")} />
        {expandMenu && <span> Edytor</span>}
      </Option>
      <Option
        to="/"
        replace={true}
        className={optionClasses}
        title="Wyjdź"
        onClick={optionClickHandler}
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
