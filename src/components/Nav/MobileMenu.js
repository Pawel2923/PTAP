import { useRef } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import classes from "./MobileMenu.module.css";

const targetContainer = document.getElementById("overlays");

const MobileMenu = (props) => {
  const overlay = useRef();

  const closeClickHandler = () => {
    overlay.current.style.animationName = classes.slideOut;

    setTimeout(() => {
        props.onClose();
    }, 200);
  };

  const children = (
    <div className={classes.overlay} ref={overlay}>
      <i className="fa-solid fa-xmark" onClick={closeClickHandler}></i>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/wiki">WIKI</Link></li>
        <li><Link to="/sign-in">ZAPISZ SIĘ</Link></li>
      </ul>
      <footer>Wszelkie prawa zastrzeżone</footer>
    </div>
  );

  return ReactDOM.createPortal(children, targetContainer);
};

export default MobileMenu;
