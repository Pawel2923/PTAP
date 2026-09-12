import { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import PageContext from "../../../store/page-context";
import classes from "./BackArrow.module.css";
import icons from "../../../icons/symbol-defs.svg";

const BackArrow = ({
  to,
  text = "Wróć",
  enableText = true,
  notLink = false,
  className,
  onClick,
  ...rest
}) => {
  const { width } = useContext(PageContext);

  const showText = Boolean(width > 740 && enableText);
  const labelText = text || "Wróć";

  const buttonClasses = className
    ? `${classes.back} ${className}`
    : classes.back;

  if (notLink) {
    return (
      <button
        type="button"
        className={buttonClasses}
        onClick={onClick}
        aria-label={labelText}
        {...rest}
      >
        <svg
          className="icon icon-arrow_left"
          aria-hidden="true"
          focusable="false"
        >
          <use xlinkHref={`${icons}#icon-arrow_left`}></use>
        </svg>
        {showText && <span>{labelText}</span>}
      </button>
    );
  }

  return (
    <Link
      to={to ?? -1}
      className={buttonClasses}
      onClick={onClick}
      aria-label={labelText}
      {...rest}
    >
      <svg
        className="icon icon-arrow_left"
        aria-hidden="true"
        focusable="false"
      >
        <use xlinkHref={`${icons}#icon-arrow_left`}></use>
      </svg>
      {showText && <span>{labelText}</span>}
    </Link>
  );
};

BackArrow.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  text: PropTypes.string,
  enableText: PropTypes.bool,
  notLink: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default BackArrow;
