import { forwardRef } from "react";
import classes from "./Dropdown.module.css";
import PropTypes from "prop-types";
import classNames from "classnames";

export const DropdownOption = forwardRef(
  (
    {
      id,
      onClick,
      disabled = false,
      setIsMenuShown,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    const clickHandler = (ev) => {
      if (disabled) return;
      if (setIsMenuShown) {
        setIsMenuShown(false);
      }
      if (onClick) {
        onClick(ev);
      }
    };

    return (
      <button
        type="button"
        ref={ref}
        id={id}
        role="menuitem"
        disabled={disabled}
        aria-disabled={disabled ? "true" : undefined}
        className={classNames(classes.option, className, {
          [classes["option-disabled"]]: disabled,
        })}
        onClick={clickHandler}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

DropdownOption.displayName = "DropdownOption";

DropdownOption.propTypes = {
  id: PropTypes.string,
  setIsMenuShown: PropTypes.func,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};
