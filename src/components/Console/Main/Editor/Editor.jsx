import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import ConsoleContext from "../../../../store/console-context";
import Toolbar from "./Toolbar";
import Welcome from "./Sections/Welcome";
import Code from "./Sections/Code";
import classes from "./Editor.module.css";

const Editor = ({ setMainHeader }) => {
    const { editorContent, setEditorContent } = useContext(ConsoleContext);
    const [editorStyles, setEditorStyles] = useState({});

    useEffect(() => {
        setMainHeader("Edytor artykułów");
    }, [setMainHeader]);

    let content = "";
    if (editorContent === "home") {
        content = <Welcome />;
    } else if (editorContent === "edit") {
        content = <Code />;
    } else {
        content = "Wystąpił błąd";
    }

    return (
        <div className={classes.editor} style={editorStyles}>
            <Toolbar setEditorStyles={setEditorStyles} setEditorContent={setEditorContent} />
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