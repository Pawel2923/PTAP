import { useState, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import {EditorContext} from "../../store/Editor/editor-context.ts";
import Welcome from "./pages/Welcome";
import New from "./pages/New";
import All from "./pages/All";
import Editor from "./pages/Editor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import classes from "./Main.module.css";

const Main = () => {
    const { articleTitle } = useContext(EditorContext);
    const [mainHeader, setMainHeader] = useState("");

    return (
        <main className={classes.main}>
            <header>
                <h2>
                    {mainHeader}
                    {articleTitle && " "}
                    {articleTitle && <FontAwesomeIcon icon={solid("angle-right")} />}
                    {articleTitle && " "}
                    {articleTitle && articleTitle}
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
