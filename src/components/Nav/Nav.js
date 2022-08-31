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

  let imageTitle = <h1>PTAP</h1>;

  if (width > 480) {
    imageTitle = <h1>Pilot Training Arma Project</h1>;
  }

  return (
    <nav className={classes.nav}>
      <div>
        <img
          src={require("../../img/logo.png")}
          alt="logo"
          style={{ display: "block" }}
        />
        {imageTitle}
      </div>
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
