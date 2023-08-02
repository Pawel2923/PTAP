import { useContext } from "react";
import { PropTypes } from "prop-types";
import classes from "./Option.module.css";
import ConsoleContext from "../../../../store/console-context";

const Option = ({ children, onClick, id }) => {
  const { currentPage } = useContext(ConsoleContext);

  return (
    <button
      type="button"
      className={`${classes.option} ${currentPage === id && classes.highlight}`}
      onClick={onClick}
      id={id}
    >
      {children}
    </button>
  );
};

Option.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

export default Option;
