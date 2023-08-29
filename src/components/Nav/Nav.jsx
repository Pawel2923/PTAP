import { useContext, memo } from "react";
import { Link, NavLink } from "react-router-dom";

import { SearchPlaceholder } from "../Search/Search";
import MobileMenu from "./MobileMenu";
import PageContext from "../../store/page-context";
import ptapLogo from "../../img/logo.webp";
import classes from "./Nav.module.css";

const Nav = memo(() => {
  const { width } = useContext(PageContext);

  let imageTitle = width >= 1020 ? "Pilot Training Arma Project" : "PTAP";

  let navContent = (
    <>
      <Link to="/" title="Przejdź na stronę główną">
        <img
          src={ptapLogo}
          alt="logo"
        />
        <h2>{imageTitle}</h2>
      </Link>
      <ul>
        <li>
          <NavLink to="/">
            Strona główna
          </NavLink>
        </li>
        <li>
          <NavLink to="/wiki">
            Wiki
          </NavLink>
        </li>
        <li>
          <NavLink to="/rejestracja">
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