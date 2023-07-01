import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import MobileMenu from "./MobileMenu";
import WidthContext from "../../store/width-context";
import classes from "./Nav.module.css";

const Nav = () => {
  const navigate = useNavigate();
  const { width } = useContext(WidthContext);

  const logoClickHandler = () => {
    navigate("/");
  };

  let imageTitle = width > 720 ? "Pilot Training Arma Project" : "PTAP";

  let navContent = (
    <React.Fragment>
      <div
        style={{ cursor: "pointer" }}
        title="Przejdź na stronę główną"
        onClick={logoClickHandler}
      >
        <img
          src={require("../../img/logo.webp")}
          alt="logo"
          style={{ display: "block" }}
        />
        <h2>{imageTitle}</h2>
      </div>
      <ul>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/wiki">WIKI</NavLink>
        </li>
        <li>
          <NavLink to="/rejestracja">ZAPISZ SIĘ</NavLink>
        </li>
      </ul>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      {width > 480 ? (
        <nav className={classes.nav}>{navContent}</nav>
      ) : (
        <MobileMenu />
      )}
    </React.Fragment>
  );
};

export default Nav;
