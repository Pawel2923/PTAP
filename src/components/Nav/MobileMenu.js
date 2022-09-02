import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Link, useLocation } from "react-router-dom";

import classes from "./MobileMenu.module.css";

const targetContainer = document.getElementById("overlays");

const linksList = [
  {
    name: "Home",
    path: "/",
    icon: "icon-icon_house",
  },
  {
    name: "Wiki",
    path: "/wiki",
    icon: "icon-icon_globe",
  },
  {
    name: "Zapisz się",
    path: "/sign-up",
    icon: "icon-icon_signup",
  },
];

const MobileMenu = () => {
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState("");

  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location]);

  const nav = (
    <nav className={classes.menu}>
      <ul>
        {linksList.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className={currentLocation === link.path ? classes.highlight : ""}
            >
              {currentLocation === link.path ? (
                <i className={`${link.icon}_solid`}></i>
              ) : (
                <i className={link.icon}></i>
              )}
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );

  return ReactDOM.createPortal(nav, targetContainer);
};

export default MobileMenu;
