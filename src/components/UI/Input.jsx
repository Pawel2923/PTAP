import { useEffect, useState, forwardRef } from "react";
import PropTypes from "prop-types";
import classes from "./Input.module.css";

const Input = forwardRef(({ type, placeholder, value, disabled, required, className, style, id, onInput, onChange }, ref) => {
    const [inputValue, setInputValue] = useState(value);

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    const changeHandler = (ev) => {
        ev.target.classList.remove(classes.invalid);
        setInputValue(value);
        onChange && onChange(ev);
    };

    const invalidHandler = (ev) => {
        ev.target.classList.add(classes.invalid);
    };

    const focusHandler = (ev) => {
        ev.target.classList.add(classes.focus);
    };

    const blurHandler = (ev) => {
        ev.target.classList.remove(classes.focus);
    };

    return <input
        type={type ? type : "text"}
        ref={ref}
        id={id}
        placeholder={placeholder}
        value={inputValue}
        disabled={disabled}
        required={required}
        className={`${classes.input} ${className ? className : ""}`}
        style={style ? style : {}}
        onChange={changeHandler}
        onInvalid={invalidHandler}
        onFocus={focusHandler}
        onBlur={blurHandler}
        onInput={onInput ? onInput : () => { }}
    />;
});

Input.displayName = Input;

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.any,
    id: PropTypes.string,
    onInput: PropTypes.func,
    onChange: PropTypes.func,
};

export default Input;