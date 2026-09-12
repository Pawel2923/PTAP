import React, { useState, useEffect, useRef, useId } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import classes from "./Dropdown.module.css";

export const Dropdown = ({
  title,
  className,
  children,
  ariaLabel,
  ...rest
}) => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);

  const buttonId = useId();
  const menuId = useId();

  // click outside handler
  useEffect(() => {
    if (!isMenuShown) return;

    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuShown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuShown]);

  const toggleMenu = () => {
    setIsMenuShown((prev) => !prev);
  };

  const getFocusableItems = () => {
    if (!menuRef.current) return [];
    return Array.from(
      menuRef.current.querySelectorAll(
        'button:not([disabled]), [role="menuitem"]:not([disabled])'
      )
    );
  };

  const handleTriggerKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setIsMenuShown(true);
      requestAnimationFrame(() => {
        const items = getFocusableItems();
        items[0]?.focus();
      });
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setIsMenuShown(true);
      requestAnimationFrame(() => {
        const items = getFocusableItems();
        items[items.length - 1]?.focus();
      });
    } else if (event.key === "Escape" && isMenuShown) {
      event.preventDefault();
      setIsMenuShown(false);
    }
  };

  const handleMenuKeyDown = (event) => {
    const items = getFocusableItems();
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
    } else if (event.key === "Home") {
      event.preventDefault();
      items[0]?.focus();
    } else if (event.key === "End") {
      event.preventDefault();
      items[items.length - 1]?.focus();
    } else if (event.key === "Escape") {
      event.preventDefault();
      setIsMenuShown(false);
      triggerRef.current?.focus();
    } else if (event.key === "Tab") {
      setIsMenuShown(false);
    }
  };

  const handleBlur = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.relatedTarget)
    ) {
      setIsMenuShown(false);
    }
  };

  // clone children to share isMenuShown state with set function
  const renderChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { isMenuShown, setIsMenuShown });
    }
    return child;
  });

  return (
    <div
      className={classNames(classes.dropdown, {
        [classes.active]: isMenuShown,
      })}
      ref={dropdownRef}
      onBlur={handleBlur}
      {...rest}
    >
      <button
        ref={triggerRef}
        id={buttonId}
        type="button"
        className={className || ""}
        onClick={toggleMenu}
        onKeyDown={handleTriggerKeyDown}
        aria-haspopup="menu"
        aria-expanded={isMenuShown}
        aria-controls={isMenuShown ? menuId : undefined}
        aria-label={ariaLabel}
      >
        <span>{title}</span>
      </button>
      {isMenuShown && (
        <div
          ref={menuRef}
          id={menuId}
          role="menu"
          tabIndex={-1}
          aria-labelledby={buttonId}
          className={classes.menu}
          onKeyDown={handleMenuKeyDown}
        >
          {renderChildren}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  title: PropTypes.any,
  className: PropTypes.string,
  children: PropTypes.node,
  ariaLabel: PropTypes.string,
};
