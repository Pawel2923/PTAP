import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {EditorContext} from "../../../store/Editor/editor-context.ts";
import Toolbar from "../Toolbar/Toolbar";
import Welcome from "../content/Welcome";
import EditorContent from "../content/EditorContent.jsx";
import classes from "./Editor.module.css";

const Editor = ({ setMainHeader }) => {
    const { page } = useContext(EditorContext);
    const [editorStyles, setEditorStyles] = useState({});

    useEffect(() => {
        setMainHeader("Edytor artykułów");
    }, [setMainHeader]);

    let content = "";
    if (page === "home") {
        content = <Welcome />;
    } else if (page === "edit") {
        content = <EditorContent />;
    } else {
        content = "Wystąpił błąd";
    }

    return (
        <div className={classes.editor} style={editorStyles}>
            <Toolbar setEditorStyles={setEditorStyles} />
            <div className={classes["workspace-container"]}>
                {content}
            </div>
        </div>
    );
};

Editor.propTypes = {
    setMainHeader: PropTypes.func,
};

export default Editor;
