import { useContext, memo } from "react";
import { Link, NavLink } from "react-router-dom";

import { SearchPlaceholder } from "../Search/Search";
import MobileMenu from "./MobileMenu";
import PageContext from "../../store/page-context";
import ptapLogo from "../../img/logo.webp";
import useAuth from "../../hooks/use-auth";
import classes from "./Nav.module.css";

const Nav = memo(() => {
  const { uid } = useAuth();
  const { width } = useContext(PageContext);

  let navLogoTitle = width > 1044 ? "PTAP" : "";

  let navContent = (
    <>
      <Link to="/" title="Przejdź na stronę główną">
        <img src={ptapLogo} width="80" height="80" alt="logo" />
        <h2>{navLogoTitle}</h2>
      </Link>
      <ul>
        <li>
          <NavLink to="/">Strona główna</NavLink>
        </li>
        <li>
          <NavLink to="/wiki">Wiki</NavLink>
        </li>
        {uid && (
          <li>
            <NavLink to={"/console"}>Konsola</NavLink>
          </li>
        )}
        <li>
          {uid ? (
            <NavLink to="/wylogowanie">Wyloguj się</NavLink>
          ) : (
            <NavLink to="/logowanie">Zaloguj się</NavLink>
          )}
        </li>
        <li>
          <SearchPlaceholder />
        </li>
      </ul>
    </>
  );

  return (
    <>
      {width > 875 ? (
        <nav className={classes.nav}>{navContent}</nav>
      ) : (
        <MobileMenu />
      )}
    </>
  );
});

Nav.displayName = "Nav";

export default Nav;
