import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import classes from "./Dropdown.module.css";

export const Dropdown = ({ title, className, children }) => {
    const dropdownRef = useRef(null);
    const [showMenu, setShowMenu] = useState(false);
    const [dropdownClasses, setDropdownClasses] = useState(classes.dropdown);

    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setShowMenu(false);
                setDropdownClasses(classes.dropdown);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const dropdownClickHandler = () => {
        setShowMenu((prevState) => {
            if (prevState) {
                setDropdownClasses(classes.dropdown);
                return false;
            }

            setDropdownClasses(`${classes.dropdown} ${classes.active}`);
            return true;
        });
    };

    return (
        <div
            className={`${dropdownClasses} ${className}`}
            onClick={dropdownClickHandler}
            ref={dropdownRef}
        >
            <span>{title}</span>
            {showMenu && <div className={classes.menu}>{children}</div>}
        </div>
    );
};

Dropdown.propTypes = {
    title: PropTypes.any,
    className: PropTypes.string,
    children: PropTypes.any,
};

export const DropdownOption = ({ id, onClick, disabled, children }) => {
    const buttonRef = useRef(null);

    useEffect(() => {
        if (disabled) {
            buttonRef.current.setAttribute("disabled", "");
        }
    }, [disabled]);

    return (
        <button
            type="button"
            ref={buttonRef}
            id={id}
            className={classes.option}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

DropdownOption.propTypes = {
    id: PropTypes.string,
    orientation: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    children: PropTypes.any,
};
