import {useEffect, useRef} from "react";
import classes from "./Dropdown.module.css";
import PropTypes from "prop-types";

export const DropdownOption = ({ id, onClick, disabled, setIsMenuShown, children }) => {
    const buttonRef = useRef(null);

    useEffect(() => {
        if (disabled) {
            buttonRef.current.setAttribute("disabled", "");
        }
    }, [disabled]);

    const optionMouseUpHandler = (ev) => {
        setIsMenuShown(false);
        if (onClick) {
            onClick(ev);
        }
    };

    const optionTouchEndHandler = (ev) => {
        setIsMenuShown(false);
        if (onClick) {
            onClick(ev);
        }
    };

    return (
        <button
            type="button"
            ref={buttonRef}
            id={id}
            className={classes.option}
            onMouseUp={optionMouseUpHandler}
            onTouchEnd={optionTouchEndHandler}
        >
            {children}
        </button>
    );
};

DropdownOption.propTypes = {
    id: PropTypes.string,
    setIsMenuShown: PropTypes.func,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    children: PropTypes.any,
};