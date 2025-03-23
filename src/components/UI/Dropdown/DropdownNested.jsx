import React, { useState } from "react";
import classes from "./Dropdown.module.css";
import PropTypes from "prop-types";

export const DropdownNested = ({
  title,
  id,
  disabled,
  isMenuShown,
  setIsMenuShown,
  children,
}) => {
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

  const renderChildren = React.Children.map(children, (child) => {
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
