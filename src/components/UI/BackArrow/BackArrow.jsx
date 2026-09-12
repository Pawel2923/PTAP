import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const { width } = useContext(PageContext);

  const showText = Boolean(width > 740 && enableText);
  const labelText = text || "Wróć";

  const buttonClasses = className
    ? `${classes.back} ${className}`
    : classes.back;

  const content = (
    <>
      <svg
        className="icon icon-arrow_left"
        aria-hidden="true"
        focusable="false"
      >
        <use xlinkHref={`${icons}#icon-arrow_left`}></use>
      </svg>
      {showText && <span>{labelText}</span>}
    </>
  );

  if (notLink) {
    return (
      <button
        type="button"
        className={buttonClasses}
        onClick={onClick}
        aria-label={labelText}
        {...rest}
      >
        {content}
      </button>
    );
  }

  if (typeof to === "string" && to !== "-1") {
    return (
      <Link
        to={to}
        className={buttonClasses}
        onClick={onClick}
        aria-label={labelText}
        {...rest}
      >
        {content}
      </Link>
    );
  }

  const handleBack = (event) => {
    if (onClick) {
      onClick(event);
    }
    if (!event?.defaultPrevented) {
      navigate(-1);
    }
  };

  return (
    <button
      type="button"
      className={buttonClasses}
      onClick={handleBack}
      aria-label={labelText}
      {...rest}
    >
      {content}
    </button>
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
