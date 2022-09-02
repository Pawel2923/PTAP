import { useState, useEffect } from "react";

import MobileMenu from "./MobileMenu";
import classes from "./Nav.module.css";

const Nav = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const menuClickHandler = () => {
    setShowMobileMenu(true);
  };

  const menuCloseHandler = () => {
    setShowMobileMenu(false);
  };

  let imageTitle = width > 480 ? "Pilot Training Arma Project" : "PTAP";

  let navContent =
    width > 480 ? (
      <ul>
        <li>HOME</li>
        <li>WIKI</li>
        <li>ZAPISZ SIĘ</li>
      </ul>
    ) : (
      <i
        className="fa-solid fa-bars"
        style={{ fontSize: "1.5em" }}
        onClick={menuClickHandler}
      ></i>
    );

  return (
    <nav className={classes.nav}>
      <div>
        <img
          src={require("../../img/logo.png")}
          alt="logo"
          style={{ display: "block" }}
        />
        <h2>{imageTitle}</h2>
      </div>
      {navContent}
      {showMobileMenu && <MobileMenu onClose={menuCloseHandler} />}
    </nav>
  );
};

export default Nav;
