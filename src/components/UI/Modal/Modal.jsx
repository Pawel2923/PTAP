import { useEffect } from "react";
import PropTypes from "prop-types";
import classes from "./Modal.module.css";
import icons from "../../../icons/symbol-defs.svg";

const Modal = ({ title, setShowModal, children }) => {
  const closeClickHandler = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowModal(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setShowModal]);

  return (
    <>
      <div className={classes.backdrop} onClick={closeClickHandler} aria-hidden="true"></div>
      <div className={classes.modal} role="dialog" aria-modal="true" aria-label={title}>
        <h2>{title}</h2>
        {children}
        <button
          type="button"
          className={classes.close}
          onClick={closeClickHandler}
          aria-label="Zamknij okno"
        >
          <svg className="icon icon-circle_xmark" aria-hidden="true">
            <use xlinkHref={`${icons}#icon-circle_xmark`}></use>
          </svg>
        </button>
      </div>
    </>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  setShowModal: PropTypes.func,
  children: PropTypes.any,
};

export default Modal;
