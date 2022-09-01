import { useState, useEffect, useRef } from "react";

import MobileMenu from "./MobileMenu";
import classes from "./Nav.module.css";

const Nav = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const nav = useRef();

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    
    let prevScrollPos = window.scrollY;
    const handleWindowScroll = () => {
      let currScrollPos = window.scrollY;

      if (currScrollPos < nav.current.clientHeight) {
        nav.current.style.transform = "translateY(0)";
        return;
      }

      if (prevScrollPos > currScrollPos) {
        nav.current.style.transform = "translateY(0)";
      } else {
        nav.current.style.transform = "translateY(-100%)";
      }

      prevScrollPos = currScrollPos;
    };

    window.addEventListener("resize", handleWindowResize);
    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("scroll", handleWindowScroll);
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
        <li>ŚMIGŁOWCE</li>
        <li>SAMOLOTY</li>
        <li>KONTAKT</li>
      </ul>
    ) : (
      <i
        className="fa-solid fa-bars"
        style={{ fontSize: "1.5em" }}
        onClick={menuClickHandler}
      ></i>
    );

  return (
    <nav className={classes.nav} ref={nav}>
      <div>
        <img
          src={require("../../img/logo.png")}
          alt="logo"
          style={{ display: "block" }}
        />
        <h1>{imageTitle}</h1>
      </div>
      {navContent}
      {showMobileMenu && <MobileMenu onClose={menuCloseHandler} />}
    </nav>
  );
};

export default Nav;
