import { useContext } from "react";
import { PropTypes } from "prop-types";
import classes from "./Option.module.css";
import ConsoleContext from "../../../store/console-context";

const Option = ({ title, onClick, id }) => {
  const { currentPage } = useContext(ConsoleContext);

  return (
    <button
      type="button"
      className={`${classes.option} ${currentPage === id && classes.highlight}`}
      onClick={onClick}
      id={id}
    >
      {title}
    </button>
  );
};

Option.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

export default Option;
