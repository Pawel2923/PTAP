import { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import {EditorContext} from "../../../store/Editor/editor-context.js";
import Toolbar from "../Components/Toolbar/Toolbar";
import Welcome from "../content/Welcome";
import EditorContent from "../content/EditorContent.jsx";
import classes from "./Editor.module.css";

const Editor = ({ setMainHeader }) => {
    const { page, editorStyles } = useContext(EditorContext);

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
            <Toolbar />
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
