import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classes from "./Editor.module.css";
import Toolbar from "./Toolbar";
import Welcome from "./Welcome";

const Editor = ({ setMainHeader }) => {
    const [editorStyles, setEditorStyles] = useState({});

    useEffect(() => {
        setMainHeader("Edytor artykułów");
    }, [setMainHeader]);

    return (
        <div className={classes.editor} style={editorStyles}>
            <Toolbar setEditorStyles={setEditorStyles} />
            <div className={classes["workspace-container"]}>
                <Welcome />
            </div>
        </div>
    );
};

Editor.propTypes = {
    setMainHeader: PropTypes.func,
};

export default Editor;
