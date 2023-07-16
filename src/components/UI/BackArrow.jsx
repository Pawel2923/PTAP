import { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import PageContext from "../../store/page-context";
import classes from "./BackArrow.module.css";

const BackArrow = (props) => {
  const { width } = useContext(PageContext);

  let enableText = props.enableText ? props.enableText : true;

  if (props.notLink) {
    return (
      <button
        type="button"
        className={
          props.className ? `${classes.back} ${props.className}` : classes.back
        }
        onClick={props.onClick}
      >
        <i className="icon-icon_arrow_left"></i>
        {width > 740 && enableText ? <span>Wróć</span> : ""}
      </button>
    );
  }

  return (
    <Link
      to={-1}
      className={
        props.className ? `${classes.back} ${props.className}` : classes.back
      }
    >
      <i className="icon-icon_arrow_left"></i>
      {width > 740 && enableText ? <span>Wróć</span> : ""}
    </Link>
  );
};

BackArrow.propTypes = {
  enableText: PropTypes.bool,
  notLink: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default BackArrow;
