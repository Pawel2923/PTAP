import { useState, useEffect, useRef, useContext } from "react";
import PropTypes from "prop-types";
import DropdownContext from "../../store/dropdown-context-";
import classes from "./Dropdown.module.css";

export const Dropdown = ({ title, className, children }) => {
  const { isMenuShown, setIsMenuShown } = useContext(DropdownContext);
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

  const dropdownClickHandler = () => {
    setIsMenuShown(true);
  };

  return (
    <div
      className={`${dropdownClasses} ${className ? className : ""}`}
      ref={dropdownRef}
    >
      <span onClick={dropdownClickHandler}>{title}</span>
      {isMenuShown && <div className={classes.menu}>{children}</div>}
    </div>
  );
};

Dropdown.propTypes = {
  title: PropTypes.any,
  className: PropTypes.string,
  children: PropTypes.any,
};

export const DropdownNested = ({ title, id, disabled, children }) => {
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
      <span>{title}</span>
      {isDropdownShown && (
        <div className={`${classes.menu} ${classes["menu-horizontal"]}`}>
          {children}
        </div>
      )}
    </div>
  );
};

DropdownNested.propTypes = {
  title: PropTypes.any,
  id: PropTypes.string,
  orientation: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.any,
};

export const DropdownOption = ({ id, onClick, disabled, children }) => {
  const buttonRef = useRef(null);
  const { setIsMenuShown } = useContext(DropdownContext);

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
  orientation: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.any,
};
