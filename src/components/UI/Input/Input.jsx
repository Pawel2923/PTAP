import {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useLayoutEffect,
} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import classes from "./Input.module.css";

const Input = forwardRef(
  (
    {
      type,
      placeholder,
      value,
      disabled,
      required,
      className,
      style,
      id,
      minLength,
      onInput,
      onFocus,
      onBlur,
      onChange,
      validateInput,
      setIsFormInvalid,
      autoComplete,
      checked,
    },
    ref
  ) => {
    const [isInvalid, setIsInvalid] = useState(false);
    const inputRef = useRef(ref ?? null);

    useLayoutEffect(() => {
      if (!isInvalid) {
        inputRef.current.classList.remove(classes.invalid);
        return;
      }

      inputRef.current.classList.add(classes.invalid);
    }, [isInvalid]);

    useEffect(() => {
      if (isInvalid) {
        inputRef.current.setCustomValidity("Poprawnie wypełnij to pole");
        return;
      }
      inputRef.current.setCustomValidity("");
      if (setIsFormInvalid) {
        setIsFormInvalid(false);
      }
    }, [isInvalid, setIsFormInvalid]);

    const changeHandler = (ev) => {
      setIsInvalid(false);
      if (onChange) {
        onChange(ev);
      }
    };

    const focusHandler = (ev) => {
      if (onFocus) {
        onFocus(ev);
      }
    };

    const blurHandler = (ev) => {
      if (validateInput) {
        setIsInvalid(!validateInput(value));
      }
      if (onBlur) {
        onBlur(ev);
      }
    };

    return (
      <input
        type={type ? type : "text"}
        ref={inputRef}
        id={id}
        placeholder={placeholder}
        value={value}
        checked={checked}
        disabled={disabled}
        required={required}
        className={classNames(classes.input, className)}
        style={style ? style : {}}
        minLength={minLength ? minLength : ""}
        onChange={changeHandler}
        onFocus={focusHandler}
        onBlur={blurHandler}
        onInput={onInput ? onInput : () => {}}
        autoComplete={autoComplete}
      />
    );
  }
);

Input.displayName = "Input";

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
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
  autoComplete: PropTypes.string,
  checked: PropTypes.bool,
};

export default Input;
