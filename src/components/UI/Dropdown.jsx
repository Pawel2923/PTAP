import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import classes from "./Dropdown.module.css";

export const Dropdown = ({ title, className, children }) => {
    const dropdownRef = useRef(null);
    const [showMenu, setShowMenu] = useState(false);
    const [dropdownStyle, setDropdownStyle] = useState({});

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
                setDropdownStyle({});
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
                setDropdownStyle({});
                return false;
            }

            setDropdownStyle({ backgroundColor: "#343434" });
            return true;
        });
    };

    return (
        <div
            className={`${classes.dropdown} ${className}`}
            style={dropdownStyle}
            onClick={dropdownClickHandler}
            ref={dropdownRef}
        >
            <span>{title}</span>
            {showMenu && <div className={classes.menu}>{children}</div>}
        </div>
    );
};

Dropdown.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.any,
};

export const DropdownOption = ({ id, onClick, children }) => {
    return (
        <button type="button" className={classes.option} onClick={onClick} id={id}>
            {children}
        </button>
    );
};

DropdownOption.propTypes = {
    id: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.any,
};
