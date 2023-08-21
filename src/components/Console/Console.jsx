import { useState } from "react";
import ReactDOM from "react-dom";
import classes from "./Console.module.css";
import Menu from "./Menu/Menu";
import ConsoleProvider from "../../store/ConsoleProvider";
import Main from "./Main/Main";
import Modal from "../UI/Modal";

const Console = () => {
    const [showModal, setShowModal] = useState(true);

    const overlay = (
        <ConsoleProvider>
            <div className={classes.overlay}>
                <Menu />
                <Main />
            </div>
            {showModal && <Modal title="Test" setShowModal={setShowModal}>Wiadomość</Modal>}
        </ConsoleProvider>
    );

    return ReactDOM.createPortal(overlay, document.getElementById("overlays"));
};

export default Console;
