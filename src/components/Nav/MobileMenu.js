import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import classes from "./MobileMenu.module.css";

const targetContainer = document.getElementById("overlays");

const MobileMenu = (props) => {
  const overlay = useRef();
  const backdrop = useRef();

  const closeClickHandler = () => {
    backdrop.current.style.animationName = classes.fadeOut;
    overlay.current.style.animationName = classes.slideOut;

    setTimeout(() => {
      props.onClose();
    }, 200);
  };

  const children = (
    <React.Fragment>
      <div
        className={classes.backdrop}
        ref={backdrop}
        onClick={closeClickHandler}
      ></div>
      <div className={classes.overlay} ref={overlay}>
        <i className="fa-solid fa-xmark" onClick={closeClickHandler}></i>
        <ul>
          <li>
            <Link to="/" onClick={closeClickHandler}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/wiki" onClick={closeClickHandler}>
              WIKI
            </Link>
          </li>
          <li>
            <Link to="/sign-in" onClick={closeClickHandler}>
              ZAPISZ SIĘ
            </Link>
          </li>
        </ul>
        <footer>Wszelkie prawa zastrzeżone</footer>
      </div>
    </React.Fragment>
  );

  return ReactDOM.createPortal(children, targetContainer);
};

export default MobileMenu;
