import { useState, useEffect } from "react";

import MobileMenu from "./MobileMenu";
import classes from "./Nav.module.css";

const Nav = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const menuClickHandler = () => {
    setShowMobileMenu(true);
  };

  const menuCloseHandler = () => {
    setShowMobileMenu(false);
  };

  return (
    <nav className={classes.nav}>
      <img
        src={require("../../img/logo.png")}
        alt="logo"
        style={{ display: "block" }}
      />
      {width > 480 ? (
        <ul>
          <li>HOME</li>
          <li>HELIKOPTERY</li>
          <li>SAMOLOTY</li>
          <li>KONTAKT</li>
        </ul>
      ) : (
        <i
          className="fa-solid fa-bars"
          style={{ fontSize: "1.5em" }}
          onClick={menuClickHandler}
        ></i>
      )}
      {showMobileMenu && <MobileMenu onClose={menuCloseHandler} />}
    </nav>
  );
};

export default Nav;
