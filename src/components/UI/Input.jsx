import { useState, useEffect, useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import classes from "./Input.module.css";

const Input = forwardRef(({ type, placeholder, value, isInvalid: invalidProp, disabled, required, className, style, id, minLength, onInput, onBlur, onFocus, onChange, validateInput, setIsFormInvalid }, ref) => {
    const [isTouched, setIsTouched] = useState(false);
    const [isInvalid, setIsInvalid] = useState(invalidProp !== null ? invalidProp : true);
    const inputRef = useRef(ref);

    useEffect(() => {
        const isValid = validateInput(value);
        setIsInvalid(!isValid && isTouched);
    }, [validateInput, value, isTouched]);

    useEffect(() => {
        if (isInvalid) {
            return;
        } 
        setIsFormInvalid(false);
    }, [isInvalid, setIsFormInvalid]);

    const changeHandler = (ev) => {
        ev.target.classList.remove(classes.invalid);
        value = inputRef.current.value;
        onChange && onChange(ev);
    };

    const invalidHandler = (ev) => {
        ev.target.classList.add(classes.invalid);
        setIsInvalid(true);
    };

    const focusHandler = (ev) => {
        ev.target.classList.add(classes.focus);
        onFocus && onFocus(ev);
    };

    const blurHandler = (ev) => {
        ev.target.classList.remove(classes.focus);
        setIsTouched(true);
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
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    validateInput: PropTypes.func,
    setIsFormInvalid: PropTypes.func,
};

export default Input;