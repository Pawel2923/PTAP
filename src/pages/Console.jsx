import { useState, useContext, useEffect, useRef } from "react";
import Menu from "../components/Console/Menu/Menu";
import ConsoleProvider from "../store/ConsoleProvider";
import Main from "../components/Console/Main/Main";
import PageContext from "../store/page-context";
import classes from "./Console.module.css";

const Console = () => {
  const menuRef = useRef(null);
  const { width } = useContext(PageContext);
  const [spacerStyles, setSpacerStyles] = useState({});
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  useEffect(() => {
    const menuWidth = menuRef.current.clientWidth;
    if (width <= 740 && !isMenuExpanded) {
      setSpacerStyles({ width: menuWidth, height: "100vh" });
    }
  }, [width, isMenuExpanded]);

  return (
    <ConsoleProvider>
      <div
        className={`${!isMenuExpanded ? classes["shrink-menu"] : ""} ${
          classes.console
        }`}
      >
        {(width <= 740) && <div style={spacerStyles}></div>}
        <Menu ref={menuRef} setIsMenuExpanded={setIsMenuExpanded} />
        <Main />
      </div>
    </ConsoleProvider>
  );
};

export default Console;
