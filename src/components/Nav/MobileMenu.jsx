import { useContext, memo } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";

import classes from "./MobileMenu.module.css";
import SearchContext from "../../store/search-context";
import PageContext from "../../store/page-context";
import icons from "../../icons/symbol-defs.svg";
import useAuth from "../../hooks/use-auth";

const verifyLink = (currentLocation, linkAddress) => {
  let highlightCondition = currentLocation === linkAddress;

  if (currentLocation !== "/") {
    currentLocation = currentLocation.split("/");

    highlightCondition = linkAddress.includes(currentLocation[1]);
  }

  return highlightCondition;
};

const MobileMenu = memo(() => {
  const { uid } = useAuth();
  const { setIsShown } = useContext(SearchContext);
  const { currentPage, setCurrentPage } = useContext(PageContext);

  const menuList = [
    {
      name: "Główna",
      path: "/",
      icon: "icon-house",
      type: "link",
    },
    {
      name: "Szukaj",
      path: "/szukaj",
      icon: "icon-magnifying_glass",
      type: "button",
    },
    {
      name: "Wiki",
      path: "/wiki",
      icon: "icon-globe",
      type: "link",
    },
    {
      name: uid ? "Wyloguj się" : "Zaloguj się",
      path: uid ? "/wylogowanie" : "/logowanie",
      icon: uid ? "icon-signout" : "icon-signup",
      type: "link",
    },
  ];

  const linkClickHandler = () => {
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
                  linkClickHandler();
                }}
              >
                {verifyLink(currentPage, option.path) ? (
                  <svg className={`icon ${classes.icon} ${option.icon}_solid`}>
                    <use xlinkHref={`${icons}#${option.icon}_solid`}></use>
                  </svg>
                ) : (
                  <svg className={`icon ${classes.icon} ${option.icon}`}>
                    <use xlinkHref={`${icons}#${option.icon}`}></use>
                  </svg>
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
                  <svg className={`icon ${classes.icon} ${option.icon}_solid`}>
                    <use xlinkHref={`${icons}#${option.icon}_solid`}></use>
                  </svg>
                ) : (
                  <svg className={`icon ${classes.icon} ${option.icon}`}>
                    <use xlinkHref={`${icons}#${option.icon}`}></use>
                  </svg>
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
});

MobileMenu.displayName = "MobileMenu";

export default MobileMenu;
