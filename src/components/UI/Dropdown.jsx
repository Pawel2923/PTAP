import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import classes from "./Dropdown.module.css";

export const Dropdown = ({ title, className, children }) => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const dropdownRef = useRef(null);
  const [dropdownClasses, setDropdownClasses] = useState(classes.dropdown);

  useEffect(() => {
    if (isMenuShown) {
      setDropdownClasses(`${classes.dropdown} ${classes.active}`);
    } else {
      setDropdownClasses(`${classes.dropdown}`);
    }
  }, [isMenuShown]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuShown(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsMenuShown]);

  const openMenu = () => {
    setIsMenuShown(true);
  };

  const renderChildren = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { isMenuShown, setIsMenuShown });
    }
    return child;
  });

  return (
    <div className={dropdownClasses} ref={dropdownRef}>
      <button
          className={`${className ? className : ""}`}
          onClick={openMenu}
      >
        <span>{title}</span>
      </button>
      {isMenuShown && <div className={classes.menu}>{renderChildren}</div>}
    </div>
  );
};

Dropdown.propTypes = {
  title: PropTypes.any,
  className: PropTypes.string,
  children: PropTypes.any,
};
