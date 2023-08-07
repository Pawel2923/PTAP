import { useState, useContext } from "react";
import classes from "./Main.module.css";
import ConsoleContext from "../../../store/console-context";
import Home from "./Home/Home";
import Editor from "./Editor/Editor";

const Main = () => {
    const { currentPage } = useContext(ConsoleContext);
    const [mainHeader, setMainHeader] = useState("");
                
    let pageContent = "";
    if (currentPage === "home") {
        pageContent = <Home setMainHeader={setMainHeader} />;
    } else if (currentPage === "editor") {
        pageContent = <Editor setMainHeader={setMainHeader} />;
    }

    return (
        <div className={classes.container}>
            <header>
                <h2>{mainHeader}</h2>
            </header>
            <main className={classes.main}>{pageContent}</main>
        </div>
    );
};

export default Main;
