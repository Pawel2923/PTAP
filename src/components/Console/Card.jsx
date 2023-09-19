import PropTypes from "prop-types";
import classes from "./pages/Main.module.css";

const Card = ({ children }) => {
    return <div className={classes.card}>{children}</div>;
};

Card.propTypes = {
    children: PropTypes.any,
};

export default Card;
