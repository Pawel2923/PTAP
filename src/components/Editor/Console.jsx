import ReactDOM from "react-dom";
import classes from "./Console.module.css";
import Menu from "./Menu/Menu";
import ConsoleProvider from "../../store/ConsoleProvider";

const Console = () => {
  const overlay = (
    <ConsoleProvider>
      <div className={classes.overlay}>
        <Menu />
      </div>
    </ConsoleProvider>
  );

  return ReactDOM.createPortal(overlay, document.getElementById("overlays"));
};

export default Console;
