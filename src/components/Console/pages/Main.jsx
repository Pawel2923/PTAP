import { useState, useContext } from "react";
import ConsoleContext from "/src/store/console-context";
import Welcome from "./Welcome";
import Editor from "./Editor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import classes from "./Main.module.css";

const Main = () => {
    const { currentPage, articleName } = useContext(ConsoleContext);
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
                <h2>
                    {mainHeader}
                    {articleName && " "}
                    {articleName && <FontAwesomeIcon icon={solid("angle-right")} />}
                    {articleName && " "}
                    {articleName && articleName}
                </h2>
            </header>
            <section>{pageContent}</section>
        </main>
    );
};

export default Main;
