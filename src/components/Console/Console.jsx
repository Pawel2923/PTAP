import ReactDOM from "react-dom";
import classes from "./Console.module.css";
import Menu from "./Menu/Menu";
import ConsoleProvider from "../../store/ConsoleProvider";
import Main from "./Main/Main";

const Console = () => {
    const overlay = (
        <ConsoleProvider>
            <div className={classes.overlay}>
                <Menu />
                <Main />
            </div>
        </ConsoleProvider>
    );

    return ReactDOM.createPortal(overlay, document.getElementById("overlays"));
};

export default Console;
