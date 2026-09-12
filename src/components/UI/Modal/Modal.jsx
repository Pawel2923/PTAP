import { useEffect, useRef, useId } from "react";
import PropTypes from "prop-types";
import classes from "./Modal.module.css";
import icons from "../../../icons/symbol-defs.svg";

const Modal = ({
  title,
  setShowModal,
  role,
  ariaLabel,
  ariaDescribedBy,
  className,
  children,
  ...rest
}) => {
  const dialogRef = useRef(null);
  const titleId = useId();
  const hasTitle = Boolean(title && title.trim());

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const previouslyFocused = document.activeElement;

    if (!dialog.open) {
      dialog.showModal();
    }

    let mouseDownTarget = null;

    const handleMouseDown = (event) => {
      mouseDownTarget = event.target;
    };

    const handleClick = (event) => {
      if (mouseDownTarget === dialog && event.target === dialog) {
        const rect = dialog.getBoundingClientRect();
        const isInDialog =
          rect.top <= event.clientY &&
          event.clientY <= rect.bottom &&
          rect.left <= event.clientX &&
          event.clientX <= rect.right;

        if (!isInDialog) {
          setShowModal(false);
        }
      }
    };

    dialog.addEventListener("mousedown", handleMouseDown);
    dialog.addEventListener("click", handleClick);

    return () => {
      dialog.removeEventListener("mousedown", handleMouseDown);
      dialog.removeEventListener("click", handleClick);

      if (dialog.open) {
        dialog.close();
      }
      if (previouslyFocused && typeof previouslyFocused.focus === "function") {
        previouslyFocused.focus();
      }
    };
  }, [setShowModal]);

  const closeClickHandler = () => {
    setShowModal(false);
  };

  const handleCancel = (event) => {
    event.preventDefault();
    setShowModal(false);
  };

  return (
    <dialog
      ref={dialogRef}
      className={className ? `${classes.modal} ${className}` : classes.modal}
      role={role}
      aria-labelledby={hasTitle ? titleId : undefined}
      aria-label={!hasTitle ? ariaLabel || "Okno dialogowe" : ariaLabel}
      aria-describedby={ariaDescribedBy}
      onCancel={handleCancel}
      {...rest}
    >
      {hasTitle && <h2 id={titleId}>{title}</h2>}
      {children}
      <button
        type="button"
        className={classes.close}
        onClick={closeClickHandler}
        aria-label="Zamknij okno"
      >
        <svg
          className="icon icon-circle_xmark"
          aria-hidden="true"
          focusable="false"
        >
          <use xlinkHref={`${icons}#icon-circle_xmark`}></use>
        </svg>
      </button>
    </dialog>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  setShowModal: PropTypes.func.isRequired,
  role: PropTypes.string,
  ariaLabel: PropTypes.string,
  ariaDescribedBy: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Modal;
