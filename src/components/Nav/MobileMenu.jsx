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
  const { isShown: isSearchShown, setIsShown: setIsSearchShown } = useContext(SearchContext);
  const { currentPage } = useContext(PageContext);

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
    setIsSearchShown(false);
  };

  const buttonClickHandler = () => {
    setIsSearchShown(true);
  };

  const nav = (
    <nav className={classes.menu}>
      <ul>
        {menuList.map((option) => {
          const isActive =
            option.type === "button"
              ? isSearchShown
              : verifyLink(currentPage, option.path) && !isSearchShown;

          return (
            <li key={option.name}>
              {option.type === "link" ? (
                <NavLink
                  to={option.path}
                  className={isActive ? classes.highlight : ""}
                  onClick={linkClickHandler}
                >
                  <svg
                    className={`icon ${classes.icon} ${isActive ? `${option.icon}_solid` : option.icon}`}
                  >
                    <use
                      xlinkHref={`${icons}#${isActive ? `${option.icon}_solid` : option.icon}`}
                    ></use>
                  </svg>
                  {option.name}
                </NavLink>
              ) : (
                <button
                  type="button"
                  onClick={buttonClickHandler}
                  className={isActive ? classes.highlight : ""}
                >
                  <svg
                    className={`icon ${classes.icon} ${isActive ? `${option.icon}_solid` : option.icon}`}
                  >
                    <use
                      xlinkHref={`${icons}#${isActive ? `${option.icon}_solid` : option.icon}`}
                    ></use>
                  </svg>
                  {option.name}
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );

  return ReactDOM.createPortal(nav, document.getElementById("overlays"));
});

MobileMenu.displayName = "MobileMenu";

export default MobileMenu;
