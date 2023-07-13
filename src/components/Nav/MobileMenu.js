import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";

import classes from "./MobileMenu.module.css";
import SearchContext from "../../store/search-context";
import PageContext from "../../store/page-context";

const verifyLink = (currentLocation, linkAddress) => {
  let highlightCondition = currentLocation === linkAddress;

  if (currentLocation !== "/") {
    currentLocation = currentLocation.split("/");

    highlightCondition = linkAddress.includes(currentLocation[1]);
  }

  return highlightCondition;
};

const menuList = [
  {
    name: "Główna",
    path: "/",
    icon: "icon-icon_house",
    type: "link",
  },
  {
    name: "Szukaj",
    path: "/szukaj",
    icon: "icon-icon_magnifying_glass",
    type: "button",
  },
  {
    name: "Wiki",
    path: "/wiki",
    icon: "icon-icon_globe",
    type: "link",
  },
  {
    name: "Zapisz się",
    path: "/rejestracja",
    icon: "icon-icon_signup",
    type: "link",
  },
];

const MobileMenu = () => {
  const { setIsShown } = useContext(SearchContext);
  const { currentPage, setCurrentPage } = useContext(PageContext);

  const linkClickHandler = (path) => {
    setCurrentPage(path);
    setIsShown(false);
  };

  const buttonClickHandler = () => {
    setIsShown(true);
    setCurrentPage("/szukaj");
  };

  const nav = (
    <nav className={classes.menu}>
      <ul>
        {menuList.map((option) => (
          <li key={option.name}>
            {option.type === "link" ? (
              <NavLink
                to={option.path}
                className={
                  verifyLink(currentPage, option.path) ? classes.highlight : ""
                }
                onClick={() => {
                  linkClickHandler(option.path);
                }}
              >
                {verifyLink(currentPage, option.path) ? (
                  <i className={`${option.icon}_solid`}></i>
                ) : (
                  <i className={option.icon}></i>
                )}
                {option.name}
              </NavLink>
            ) : (
              <div
                onClick={buttonClickHandler}
                to={option.path}
                className={
                  verifyLink(currentPage, option.path) ? classes.highlight : ""
                }
              >
                {verifyLink(currentPage, option.path) ? (
                  <i className={`${option.icon}_solid`}></i>
                ) : (
                  <i className={option.icon}></i>
                )}
                {option.name}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );

  return ReactDOM.createPortal(nav, document.getElementById("overlays"));
};

export default React.memo(MobileMenu);
