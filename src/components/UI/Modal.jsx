import PropTypes from "prop-types";
import classes from "./Modal.module.css";
import icons from "../../icons/symbol-defs.svg";

const Modal = ({ title, setShowModal, children }) => {
    const closeClickHandler = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className={classes.backdrop} onClick={closeClickHandler}></div>
            <div className={classes.modal}>
                <h2>{title}</h2>
                {children}
                <div className={classes.close} onClick={closeClickHandler}>
                    <svg className="icon icon-circle_xmark">
                        <use xlinkHref={`${icons}#icon-circle_xmark`}></use>
                    </svg>
                </div>
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
