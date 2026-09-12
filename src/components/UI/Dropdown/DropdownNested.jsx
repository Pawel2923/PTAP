import React, { useState, useRef, useId } from "react";
import classes from "./Dropdown.module.css";
import PropTypes from "prop-types";
import classNames from "classnames";

export const DropdownNested = ({
  title,
  id,
  disabled = false,
  className,
  isMenuShown,
  setIsMenuShown,
  children,
  ...rest
}) => {
  const [isDropdownShown, setIsDropdownShown] = useState(false);
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  const generatedId = useId();
  const triggerId = id || `nested-trigger-${generatedId}`;
  const submenuId = `nested-submenu-${generatedId}`;

  const showDropdown = () => {
    if (disabled) return;
    setIsDropdownShown(true);
  };

  const hideDropdown = () => {
    setIsDropdownShown(false);
  };

  const toggleDropdown = () => {
    if (disabled) return;
    setIsDropdownShown((prevState) => !prevState);
  };

  const getSubmenuItems = () => {
    if (!menuRef.current) return [];
    return Array.from(
      menuRef.current.querySelectorAll(
        'button:not([disabled]), [role="menuitem"]:not([disabled])'
      )
    );
  };

  const handleButtonKeyDown = (event) => {
    if (disabled) return;

    if (
      event.key === "ArrowRight" ||
      event.key === "Enter" ||
      event.key === " "
    ) {
      event.preventDefault();
      setIsDropdownShown(true);
      requestAnimationFrame(() => {
        const items = getSubmenuItems();
        items[0]?.focus();
      });
    } else if (event.key === "ArrowLeft" || event.key === "Escape") {
      if (isDropdownShown) {
        event.preventDefault();
        setIsDropdownShown(false);
      }
    }
  };

  const handleMenuKeyDown = (event) => {
    const items = getSubmenuItems();
    const currentIndex = items.indexOf(document.activeElement);

    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (items.length === 0) return;
      const nextIndex =
        currentIndex === -1 ? 0 : (currentIndex + 1) % items.length;
      items[nextIndex]?.focus();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (items.length === 0) return;
      const prevIndex = currentIndex <= 0 ? items.length - 1 : currentIndex - 1;
      items[prevIndex]?.focus();
    } else if (event.key === "ArrowLeft" || event.key === "Escape") {
      event.preventDefault();
      setIsDropdownShown(false);
      buttonRef.current?.focus();
    } else if (event.key === "Home") {
      event.preventDefault();
      items[0]?.focus();
    } else if (event.key === "End") {
      event.preventDefault();
      items[items.length - 1]?.focus();
    } else if (event.key === "Tab") {
      setIsDropdownShown(false);
    }
  };

  const handleContainerBlur = (event) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.relatedTarget)
    ) {
      setIsDropdownShown(false);
    }
  };

  const renderChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { isMenuShown, setIsMenuShown });
    }
    return child;
  });

  return (
    <div
      ref={containerRef}
      className={classNames(classes["nested-container"], {
        [classes["option-disabled"]]: disabled,
      })}
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
      onBlur={handleContainerBlur}
    >
      <button
        type="button"
        ref={buttonRef}
        id={triggerId}
        role="menuitem"
        aria-haspopup="menu"
        aria-expanded={isDropdownShown}
        aria-controls={isDropdownShown ? submenuId : undefined}
        disabled={disabled}
        aria-disabled={disabled ? "true" : undefined}
        className={classNames(
          classes.option,
          classes["option-horizontral"],
          classes["nested-trigger"],
          className,
          { [classes["option-disabled"]]: disabled }
        )}
        onClick={toggleDropdown}
        onKeyDown={handleButtonKeyDown}
        {...rest}
      >
        <div className={classes["nested-title"]}>{title}</div>
      </button>
      {isDropdownShown && (
        <div
          ref={menuRef}
          id={submenuId}
          role="menu"
          tabIndex={-1}
          aria-labelledby={triggerId}
          className={`${classes.menu} ${classes["menu-horizontal"]}`}
          onKeyDown={handleMenuKeyDown}
        >
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
  className: PropTypes.string,
  children: PropTypes.node,
};
