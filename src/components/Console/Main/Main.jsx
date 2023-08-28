import { useState, useContext } from "react";
import classes from "./Main.module.css";
import ConsoleContext from "../../../store/console-context";
import Welcome from "./Welcome/Welcome";
import Editor from "./Editor/Editor";

const Main = () => {
    const { currentPage } = useContext(ConsoleContext);
    const [mainHeader, setMainHeader] = useState("");
                
    let pageContent = "";
    if (currentPage === "home") {
        pageContent = <Welcome setMainHeader={setMainHeader} />;
    } else if (currentPage === "editor") {
        pageContent = <Editor setMainHeader={setMainHeader} />;
    }

    return (
        <main className={classes.main}>
            <header>
                <h2>{mainHeader}</h2>
            </header>
            <section>{pageContent}</section>
        </main>
    );
};

export default Main;
