import { useEffect } from "react";
import PropTypes from "prop-types";
import classes from "./Editor.module.css";

const Editor = ({ setMainHeader }) => {
    useEffect(() => {
        setMainHeader("Edytor artykułów");
    }, [setMainHeader]);

    return (
        <div className={classes.editor}>

        </div>
    );
};

Editor.propTypes = {
    setMainHeader: PropTypes.func,
};

export default Editor;
