import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classes from "../Main.module.css";

const Card = ({ to, children }) => {
    return <Link to={to} className={classes.card}>{children}</Link>;
};

Card.propTypes = {
    to: PropTypes.string,
    children: PropTypes.any,
};

export default Card;
