import { Link, useNavigate as navigate } from "react-router-dom";
import PropTypes from "prop-types";

import classes from "./Button.module.css";

export const ButtonLink = ({ to, children }) => {
  return (
    <Link to={to} className={classes["button-link"]}>
      {children}
    </Link>
  );
};

ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any
};

export const Button = ({ to, type, children }) => {
  const clickHandler = () => {
    navigate(to);
  };

  return (
    <button
      type={type ? type : "button"}
      onClick={to ? clickHandler : () => {}}
      className={classes.button}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  to: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.any
};