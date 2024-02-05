import { useState, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import EditorContext from "/src/store/editor-context";
import Welcome from "./pages/Welcome";
import New from "./pages/New";
import All from "./pages/All";
import Editor from "./pages/Editor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import classes from "./Main.module.css";

const Main = () => {
    const { articleName } = useContext(EditorContext);
    const [mainHeader, setMainHeader] = useState("");

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
            <section>
                <Routes>
                    <Route path="/home" element={<Welcome setMainHeader={setMainHeader} />} />
                    <Route path="/new" element={<New setMainHeader={setMainHeader} />} />
                    <Route path="/all" element={<All setMainHeader={setMainHeader} />} />
                    <Route path="/editor" element={<Editor setMainHeader={setMainHeader} />} />
                    <Route path="*" element={<Welcome setMainHeader={setMainHeader} />} />
                </Routes>
            </section>
        </main>
    );
};

export default Main;
