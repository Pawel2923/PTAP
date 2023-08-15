import { useRef, useState } from "react";
import Prism from "prismjs";
import "/src/css/prism.css";
import classes from "./Edit.module.css";

String.prototype.lines = function () { return this.split("\n"); }
String.prototype.lineCount = function () { return this.lines().length; }

const Edit = () => {
    const codeRef = useRef(null);
    const [lineNumber, setLineNumber] = useState(1);

    const textareaInputHandler = (ev) => {
        let text = ev.target.value;
        setLineNumber(text.lineCount());

        if (text[text.length - 1] == "\n") { // If the last character is a newline character
            text += " "; // Add a placeholder space character to the final line 
        }

        codeRef.current.innerHTML = Prism.highlight(text.replace(new RegExp("&", "g"), "&").replace(new RegExp("<", "g"), "<"), Prism.languages.html, "html");
        
    };

    const textareakeyDownHandler = (ev) => {
        if (ev.key == "Tab") {
            let code = ev.target.value;
            const element = ev.target;

            ev.preventDefault()

            let before_tab = code.slice(0, element.selectionStart); // text before tab
            let after_tab = code.slice(element.selectionEnd, element.value.length); // text after tab
            let cursor_pos = element.selectionEnd + 1; // where cursor moves after tab - moving forward by 1 char to after tab
            element.value = before_tab + "\t" + after_tab; // add tab char
            // move cursor
            element.selectionStart = cursor_pos;
            element.selectionEnd = cursor_pos;
        }
    };

    return (
        <div className={classes.edit}>
            <div className={classes["line-numbers"]}>
                {[...Array(lineNumber)].map((item, key) => <span key={key}></span>)}
            </div>
            <div className={classes.content}>
                <textarea onInput={textareaInputHandler} onKeyDown={textareakeyDownHandler} spellCheck={false}></textarea>
                <pre>
                    <code className="language-html" ref={codeRef}></code>
                </pre>
            </div>
        </div>
    );
};

export default Edit;