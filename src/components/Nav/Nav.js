import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import { SearchPlaceholder } from "../Search/Search";
import MobileMenu from "./MobileMenu";
import PageContext from "../../store/page-context";
import classes from "./Nav.module.css";

const Nav = () => {
  const { width, setCurrentPage } = useContext(PageContext);

  const linkClickHandler = (ev) => {
    setCurrentPage(ev.currentTarget.getAttribute("href"));
  };

  let imageTitle = width >= 1000 ? "Pilot Training Arma Project" : "PTAP";

  let navContent = (
    <React.Fragment>
      <Link to="/" title="Przejdź na stronę główną" onClick={linkClickHandler}>
        <img
          src={require("../../img/logo.webp")}
          alt="logo"
          style={{ display: "block" }}
        />
        <h2>{imageTitle}</h2>
      </Link>
      <ul>
        <li>
          <NavLink to="/" onClick={linkClickHandler}>
            Strona główna
          </NavLink>
        </li>
        <li>
          <NavLink to="/wiki" onClick={linkClickHandler}>
            Wiki
          </NavLink>
        </li>
        <li>
          <NavLink to="/rejestracja" onClick={linkClickHandler}>
            Zapisz się
          </NavLink>
        </li>
        <li>
          <SearchPlaceholder />
        </li>
      </ul>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      {width > 740 ? (
        <nav className={classes.nav}>{navContent}</nav>
      ) : (
        <MobileMenu />
      )}
    </React.Fragment>
  );
};

export default React.memo(Nav);
