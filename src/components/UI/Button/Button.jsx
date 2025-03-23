import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";

import classes from "./Button.module.css";

export const ButtonLink = ({
  to,
  className,
  highlighted,
  onClick,
  children,
}) => {
  if (highlighted == null) {
    highlighted = true;
  }

  return (
    <Link
      to={to}
      className={`${classes["button-link"]} ${className ? className : ""} ${
        highlighted ? classes.highlight : ""
      }`}
      onClick={onClick ? onClick : () => {}}
    >
      {children}
    </Link>
  );
};

ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  highlighted: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.any,
};

export const Button = ({
  to,
  className,
  highlighted = true,
  type = "button",
  onClick,
  children,
}) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (to) {
      navigate(to, { replace: true });
    }
  };

  const handleClick = () => {
    if (to) {
      handleNavigation();
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={classNames(classes.button, className, {
        [classes.highlight]: highlighted,
      })}
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
  onClick: PropTypes.func,
  children: PropTypes.any,
};
