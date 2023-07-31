import { PropTypes } from "prop-types";
import classes from "./Option.module.css";

const Option = ({ title }) => {
  return (
    <button type="button" className={classes.option}>
      {title}
    </button>
  );
};

Option.propTypes = {
  title: PropTypes.string,
};

export default Option;
