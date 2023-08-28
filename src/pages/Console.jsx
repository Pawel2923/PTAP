import Menu from "../components/Console/Menu/Menu";
import ConsoleProvider from "../store/ConsoleProvider";
import Main from "../components/Console/Main/Main";
import classes from "./Console.module.css";

const Console = () => {
    return (
        <ConsoleProvider>
            <div className={classes.container}>
                <Menu />
                <Main />
            </div>
        </ConsoleProvider>
    );
};

export default Console;
