import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import classes from "./Editor.module.css";
import ConsoleContext from "../../../../store/console-context";
import Toolbar from "./Toolbar";
import Welcome from "./Welcome";
import Edit from "./Edit";

const Editor = ({ setMainHeader }) => {
    const { editorContent, setEditorContent } = useContext(ConsoleContext);
    const [editorStyles, setEditorStyles] = useState({});
    // const [content, setContent] = useState("");

    useEffect(() => {
        setMainHeader("Edytor artykułów");
    }, [setMainHeader]);

    // useEffect(() => {
    //     if (editorContent === "home") {
    //         setContent(<Welcome />);
    //     } else if (editorContent === "edit") {
    //         setContent(<Edit />)
    //     } else {
    //         setContent("Wystąpił błąd");
    //     }
    // }, [editorContent]);

    let content = "";
    if (editorContent === "home") {
        content = <Welcome />;
    } else if (editorContent === "edit") {
        content = <Edit />;
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
