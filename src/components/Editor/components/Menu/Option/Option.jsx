import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";
import classes from "./Option.module.css";

const Option = ({ className, onClick, to, replace, title, children }) => {
  return to ? (
    <NavLink
      to={to}
      replace={replace ? replace : false}
      className={`${className ? className : ""} ${classes.option}`}
      onClick={onClick}
      title={title ? title : ""}
    >
      {children}
    </NavLink>
  ) : (
    <button
      type="button"
      className={`${className ? className : ""} ${classes.option}`}
      onClick={onClick}
      title={title ? title : ""}
    >
      {children}
    </button>
  );
};

Option.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string,
  replace: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.any,
};

export default Option;
