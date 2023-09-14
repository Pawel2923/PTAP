import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import classes from "./Button.module.css";

export const ButtonLink = ({ to, className, highlighted, onClick, children }) => {
    if (highlighted == null) {
        highlighted = true;
    }

    return (
        <Link
            to={to}
            className={`${classes["button-link"]} ${className ? className : ""} ${
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
    className: PropTypes.string,
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
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate(to, { replace: true });
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
