import { useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import classes from "./Input.module.css";

const Input = forwardRef(({ type, placeholder, value, isInvalid, disabled, required, className, style, id, minLength, onInput, onBlur, onChange }, ref) => {
    const inputRef = useRef(ref);

    const changeHandler = (ev) => {
        ev.target.classList.remove(classes.invalid);
        value = inputRef.current.value;
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
        onBlur && onBlur(ev);
    };

    return <input
        type={type ? type : "text"}
        ref={inputRef}
        id={id}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        required={required}
        className={`${classes.input} ${className ? className : ""} ${isInvalid ? classes.invalid : ""}`}
        style={style ? style : {}}
        minLength={minLength ? minLength : ""}
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
    isInvalid: PropTypes.bool,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.any,
    id: PropTypes.string,
    minLength: PropTypes.number,
    onInput: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
};

export default Input;