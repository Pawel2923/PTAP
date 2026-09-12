import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";

import classes from "./Button.module.css";

export const ButtonLink = ({
  to,
  className,
  highlighted = true,
  disabled = false,
  onClick,
  children,
  ...rest
}) => {
  const handleClick = (ev) => {
    if (disabled) {
      ev.preventDefault();
      return;
    }
    if (onClick) {
      onClick(ev);
    }
  };

  return (
    <Link
      to={to}
      className={classNames(classes["button-link"], className, {
        [classes.highlight]: highlighted,
        [classes.disabled]: disabled,
      })}
      onClick={handleClick}
      aria-disabled={disabled ? "true" : undefined}
      tabIndex={disabled ? -1 : undefined}
      {...rest}
    >
      {children}
    </Link>
  );
};

ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  highlighted: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export const Button = ({
  to,
  className,
  highlighted = true,
  type = "button",
  disabled = false,
  onClick,
  children,
  ...rest
}) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (to) {
      navigate(to, { replace: true });
    }
  };

  const handleClick = (ev) => {
    if (disabled) {
      ev.preventDefault();
      return;
    }
    if (to) {
      handleNavigation();
    }
    if (onClick) {
      onClick(ev);
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      aria-disabled={disabled ? "true" : undefined}
      className={classNames(classes.button, className, {
        [classes.highlight]: highlighted,
      })}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
  highlighted: PropTypes.bool,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};
