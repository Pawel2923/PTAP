import { useContext, memo } from "react";
import { Link, NavLink } from "react-router-dom";

import { SearchPlaceholder } from "../Search/Search";
import MobileMenu from "./MobileMenu";
import PageContext from "../../store/page-context";
import ptapLogo from "../../img/logo.webp";
import classes from "./Nav.module.css";

const Nav = memo(() => {
  const { width, setCurrentPage } = useContext(PageContext);

  const linkClickHandler = (ev) => {
    setCurrentPage(ev.currentTarget.getAttribute("href"));
  };

  let imageTitle = width >= 1000 ? "Pilot Training Arma Project" : "PTAP";

  let navContent = (
    <>
      <Link to="/" title="Przejdź na stronę główną" onClick={linkClickHandler}>
        <img
          src={ptapLogo}
          alt="logo"
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
    </>
  );

  return (
    <>
      {width > 740 ? (
        <nav className={classes.nav}>{navContent}</nav>
      ) : (
        <MobileMenu />
      )}
    </>
  );
});

Nav.displayName = "Nav";

export default Nav;