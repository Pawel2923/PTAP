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
    <div
      className={`${dropdownClasses} ${className ? className : ""}`}
      onClick={openMenu}
      ref={dropdownRef}
    >
      <div>{title}</div>
      {isMenuShown && <div className={classes.menu}>{renderChildren}</div>}
    </div>
  );
};

Dropdown.propTypes = {
  title: PropTypes.any,
  className: PropTypes.string,
  children: PropTypes.any,
};

export const DropdownNested = ({ title, id, disabled, isMenuShown, setIsMenuShown, children }) => {
  const [isDropdownShown, setIsDropdownShown] = useState(false);

  const showDropdown = () => {
    setIsDropdownShown(true);
  };

  const hideDropdown = () => {
    setIsDropdownShown(false);
  };

  const dropdownTouchEndHandler = () => {
    setIsDropdownShown((prevState) => !prevState);
  };

  const renderChildren = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { isMenuShown, setIsMenuShown });
    }
    return child;
  });

  return (
    <div
      id={id}
      className={`${classes["option-horizontral"]} ${classes.option} ${
        disabled ? classes["option-disabled"] : ""
      }`}
      onTouchEnd={dropdownTouchEndHandler}
      onMouseOver={showDropdown}
      onMouseOut={hideDropdown}
    >
      <div>{title}</div>
      {isDropdownShown && (
        <div className={`${classes.menu} ${classes["menu-horizontal"]}`}>
          {renderChildren}
        </div>
      )}
    </div>
  );
};

DropdownNested.propTypes = {
  title: PropTypes.any,
  id: PropTypes.string,
  isMenuShown: PropTypes.bool,
  setIsMenuShown: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.any,
};

export const DropdownOption = ({ id, onClick, disabled, setIsMenuShown, children }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (disabled) {
      buttonRef.current.setAttribute("disabled", "");
    }
  }, [disabled]);

  const optionMouseUpHandler = (ev) => {
    setIsMenuShown(false);
    if (onClick) {
        onClick(ev);
    }
  };

  const optionTouchEndHandler = (ev) => {
    setIsMenuShown(false);
    if (onClick) {
        onClick(ev);
    }
  };

  return (
    <button
      type="button"
      ref={buttonRef}
      id={id}
      className={classes.option}
      onMouseUp={optionMouseUpHandler}
      onTouchEnd={optionTouchEndHandler}
    >
      {children}
    </button>
  );
};

DropdownOption.propTypes = {
  id: PropTypes.string,
  setIsMenuShown: PropTypes.func,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.any,
};
