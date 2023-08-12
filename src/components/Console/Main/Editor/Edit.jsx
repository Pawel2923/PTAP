import { useState } from "react";
// import Prism from "prismjs";
import classes from "./Edit.module.css";

String.prototype.lines = function () { return this.split("\n"); }
String.prototype.lineCount = function () { return this.lines().length; }

const Edit = () => {
    const [lineNumber, setLineNumber] = useState(1);

    const textareaChangeHandler = (ev) => {
        setLineNumber(ev.target.value.lineCount());
    };

    const textareakeyDownHandler = (ev) => {
        if (ev.key == "Tab") {
            ev.preventDefault()

            const start = ev.target.selectionStart
            const end = ev.target.selectionEnd

            ev.target.value = ev.target.value.substring(0, start) + '\t' + ev.target.value.substring(end)
        }
    };

    return (
        <div className={classes.edit}>
            <div className={classes["line-numbers"]}>
                {[...Array(lineNumber)].map((item, key) => <span key={key}></span>)}
            </div>
            <textarea onChange={textareaChangeHandler} onKeyDown={textareakeyDownHandler} spellCheck={false}></textarea>
        </div>
    );
};

export default Edit;