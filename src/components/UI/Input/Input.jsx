import {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import classes from "./Input.module.css";

const Input = forwardRef(
  (
    {
      type = "text",
      placeholder,
      value,
      checked,
      disabled,
      required,
      className,
      style,
      id,
      name,
      minLength,
      maxLength,
      onInput,
      onFocus,
      onBlur,
      onChange,
      validateInput,
      setIsFormInvalid,
      autoComplete,
      asTextarea = false,
      rows,
      cols,
      errorMessage = "Poprawnie wypełnij to pole",
      "aria-invalid": ariaInvalidProp,
      "aria-required": ariaRequiredProp,
      ...rest
    },
    ref
  ) => {
    const [isInvalid, setIsInvalid] = useState(false);
    const inputRef = useRef(null);

    useImperativeHandle(ref, () => inputRef.current);

    useEffect(() => {
      if (!inputRef.current) return;

      if (isInvalid) {
        inputRef.current.setCustomValidity(errorMessage);
        if (setIsFormInvalid) {
          setIsFormInvalid(true);
        }
        return;
      }
      inputRef.current.setCustomValidity("");
      if (setIsFormInvalid) {
        setIsFormInvalid(false);
      }
    }, [isInvalid, setIsFormInvalid, errorMessage]);

    const changeHandler = (ev) => {
      if (isInvalid) {
        setIsInvalid(false);
      }
      if (onChange) {
        onChange(ev);
      }
    };

    const inputHandler = (ev) => {
      if (isInvalid) {
        setIsInvalid(false);
      }
      if (onInput) {
        onInput(ev);
      }
    };

    const blurHandler = (ev) => {
      if (validateInput) {
        const isCheckbox = type === "checkbox" || ev.target.type === "checkbox";
        const val = isCheckbox
          ? (checked ?? ev.target.checked)
          : (value ?? ev.target.value);
        setIsInvalid(!validateInput(val));
      }
      if (onBlur) {
        onBlur(ev);
      }
    };

    const ariaInvalid =
      ariaInvalidProp !== undefined
        ? ariaInvalidProp
        : isInvalid
          ? "true"
          : undefined;

    const ariaRequired =
      ariaRequiredProp !== undefined
        ? ariaRequiredProp
        : required
          ? "true"
          : undefined;

    const errorId = id ? `${id}-error` : undefined;
    const combinedDescribedBy =
      [rest["aria-describedby"], isInvalid && errorId ? errorId : undefined]
        .filter(Boolean)
        .join(" ") || undefined;

    const properties = {
      ...rest,
      ref: inputRef,
      id,
      name,
      placeholder,
      disabled,
      required,
      className: classNames(
        classes.input,
        { [classes.invalid]: isInvalid },
        className
      ),
      onChange: changeHandler,
      onFocus,
      onBlur: blurHandler,
      onInput: inputHandler,
      autoComplete,
      "aria-invalid": ariaInvalid,
      "aria-required": ariaRequired,
      "aria-disabled": disabled ? "true" : undefined,
      "aria-describedby": combinedDescribedBy,
      "aria-errormessage": isInvalid && errorId ? errorId : undefined,
    };

    if (style !== undefined) properties.style = style;
    if (value !== undefined) properties.value = value;
    if (checked !== undefined) properties.checked = checked;
    if (minLength !== undefined) properties.minLength = minLength;
    if (maxLength !== undefined) properties.maxLength = maxLength;

    const inputElement = asTextarea ? (
      <textarea {...properties} rows={rows} cols={cols} />
    ) : (
      <input {...properties} type={type} />
    );

    if (isInvalid && errorId) {
      return (
        <>
          {inputElement}
          <span id={errorId} className={classes.errorText} role="alert">
            {errorMessage}
          </span>
        </>
      );
    }

    return inputElement;
  }
);

Input.displayName = "Input";

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  onInput: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  validateInput: PropTypes.func,
  setIsFormInvalid: PropTypes.func,
  autoComplete: PropTypes.string,
  checked: PropTypes.bool,
  asTextarea: PropTypes.bool,
  rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  cols: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorMessage: PropTypes.string,
  "aria-invalid": PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  "aria-required": PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  "aria-disabled": PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  "aria-label": PropTypes.string,
  "aria-labelledby": PropTypes.string,
  "aria-describedby": PropTypes.string,
  "aria-errormessage": PropTypes.string,
};

export default Input;
