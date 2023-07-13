import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import classes from "./Footer.module.css";
import PageContext from "../../store/page-context";

const Footer = () => {
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
            <Link to="/contact">Skontaktuj się z nami</Link>
          </li>
          <li>
            <Link to="/feedback">Zgłoś błąd na stronie</Link>
          </li>
        </ul>
      </div>
      <div className={classes.bottom}>
        <p>PTAP 2018-2023 &copy; Wszelkie prawa zastrzeżone</p>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
