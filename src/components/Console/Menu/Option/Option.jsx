import { useContext } from "react";
import { PropTypes } from "prop-types";
import classes from "./Option.module.css";
import ConsoleContext from "../../../../store/console-context";

const Option = ({ className, onClick, id, title, children }) => {
  const { currentPage } = useContext(ConsoleContext);

  return (
    <button
      type="button"
      className={`${className ? className : ""} ${classes.option} ${currentPage === id ? classes.highlight : ""}`}
      onClick={onClick}
      id={id}
      title={title ? title : ""}
    >
      {children}
    </button>
  );
};

Option.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.any,
};

export default Option;
