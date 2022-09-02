import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import MobileMenu from "./MobileMenu";
import classes from "./Nav.module.css";

const Nav = () => {
  const navigate = useNavigate();
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

  const logoClickHandler = () => {
    navigate("/");
  };

  let imageTitle = width > 480 ? "Pilot Training Arma Project" : "PTAP";

  let navContent =
    width > 480 ? (
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/wiki">WIKI</Link>
        </li>
        <li>
          <Link to="/sign-in">ZAPISZ SIĘ</Link>
        </li>
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
      <div
        style={{ cursor: "pointer" }}
        title="Przejdź na stronę główną"
        onClick={logoClickHandler}
      >
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
