import ReactDOM from "react-dom";
import classes from "./Console.module.css";
import Menu from "./components/Menu/Menu";

const Console = () => {
    const overlay = (
        <div className={classes.overlay}>
            <Menu />
        </div>
    );

    return ReactDOM.createPortal(overlay, document.getElementById("overlays"));
};

export default Console;