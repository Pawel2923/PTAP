import { useState, useEffect, useContext, memo } from "react";
import { Link } from "react-router-dom";

import classes from "./Footer.module.css";
import PageContext from "../../store/page-context";

const currentYear = new Date().getFullYear();

const Footer = memo(() => {
  const [navHeight, setNavHeight] = useState(0);
  const { width } = useContext(PageContext);

  useEffect(() => {
    if (document.querySelector("nav") && width <= 740) {
      setNavHeight(document.querySelector("nav").clientHeight);
    } else {
      setNavHeight(0);
    }
  }, [width]);

  return (
    <footer
      className={classes.footer}
      style={{ marginBottom: `${navHeight}px` }}
    >
      <div className={classes.top}>
        <ul>
          <li>
            <Link to="/sign-up">Zapisz się do projektu</Link>
          </li>
          <li>
            <Link to="/zglos-blad">Zgłoś błąd na stronie</Link>
          </li>
          <li>
            <Link to="/console">Edytor artykułów</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/polityka-prywatnosci">Polityka prywatności</Link>
          </li>
          <li>
            <Link to="/regulamin">Regulamin serwisu</Link>
          </li>
        </ul>
      </div>
      <div className={classes.bottom}>
        <p>PTAP {currentYear} &copy; Wszelkie prawa zastrzeżone</p>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
