import { Link, useNavigate as navigate } from "react-router-dom";
import PropTypes from "prop-types";

import classes from "./Button.module.css";

export const ButtonLink = ({ to, highlighted, onClick, children }) => {
    if (highlighted == null) {
        highlighted = true;
    }

    return (
        <Link
            to={to}
            className={`${classes["button-link"]} ${
                highlighted ? classes.highlight : ""
            }`}
            onClick={onClick ? onClick : () => {}}
        >
            {children}
        </Link>
    );
};

ButtonLink.propTypes = {
    to: PropTypes.string.isRequired,
    highlighted: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.any,
};

export const Button = ({
    to,
    className,
    highlighted,
    type,
    onClick,
    children,
}) => {
    const clickHandler = () => {
        navigate(to);
    };

    if (highlighted == null) {
        highlighted = true;
    }

    return (
        <button
            type={type ? type : "button"}
            onClick={() => {
                to && clickHandler();
                onClick && onClick();
            }}
            className={`${classes.button} ${className ? className : ""} ${
                highlighted ? classes.highlight : ""
            }`}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    to: PropTypes.string,
    className: PropTypes.string,
    highlighted: PropTypes.bool,
    type: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.any,
};
