import { useState, useContext, useEffect } from "react";
import classes from "./Main.module.css";
import ConsoleContext from "../../../store/console-context";
import Home from "./Pages/Home";
import Editor from "./Pages/Editor";

const Main = () => {
    const { currentPage } = useContext(ConsoleContext);
    const [mainHeader, setMainHeader] = useState("");
    const [pageContent, setPageContent] = useState("");

    useEffect(() => {
        if (currentPage === "home") {
            setPageContent(<Home setMainHeader={setMainHeader} />);
        } else if (currentPage === "editor") {
            setPageContent(<Editor setMainHeader={setMainHeader} />);
        }
    }, [currentPage]);

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
