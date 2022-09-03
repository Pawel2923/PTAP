import React, { useState, useEffect, useContext } from "react";

import useFooterPos from "../../hooks/use-footerpos";
import classes from "./Footer.module.css";
import WidthContext from "../../store/width-context";

const Footer = (props) => {
  const [navHeight, setNavHeight] = useState(0);
  const { width } = useContext(WidthContext);
  const footerPosAbsolute = useFooterPos();

  useEffect(() => {
    if (document.querySelector("nav") && width <= 480) {
      setNavHeight(document.querySelector("nav").clientHeight);
    } else {
      setNavHeight(0);
    }
  }, [width]);

  return (
    <React.Fragment>
      <footer
        className={`${classes.footer} ${
          footerPosAbsolute ? classes.absolute : ""
        }`}
        style={footerPosAbsolute ? { marginBottom: `${navHeight}px` } : {}}
      >
        <div className={classes.top}>
          <ul>
            <li>Zapisz się do projektu</li>
            <li>Skontaktuj się z nami</li>
            <li>Wykryłeś błąd na stronie? Skontaktuj się z naszym zespołem</li>
          </ul>
        </div>
        <div className={classes.bottom}>
          <p>PTAP 2018-2022 &copy; Wszelkie prawa zastrzeżone</p>
        </div>
      </footer>
      <div
        style={{ width: "100%", height: `${navHeight}px` }}
        className="nav-spacer"
      ></div>
    </React.Fragment>
  );
};

export default Footer;