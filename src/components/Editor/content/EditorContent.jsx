import "../../../css/prism.css";
import "./Code.css";
import classes from "./EditorContent.module.css";
import useCode from "../hooks/use-code.jsx";

const EditorContent = () => {
    const {textareaHandler, syncScroll, checkTab, lineNumbers, articleContent, highlightingContentElement, highlightingElement} = useCode();

    return (
        <div className={classes.code}>
            <div className={classes["line-numbers"]}>
                {lineNumbers.map((_, index) => (
                    <span key={index}></span>
                ))}
            </div>

            <div className={classes.line}></div>

            <div className={classes.content}>
                <textarea
                    id="editing"
                    onInput={textareaHandler}
                    onScroll={syncScroll}
                    onKeyDown={checkTab}
                    value={articleContent}
                    spellCheck={false}
                    aria-label="Code Editor"
                ></textarea>

                <pre id="highlighting" aria-hidden="true" role="presentation" ref={highlightingElement}>
                    <code className="language-html" id="highlighting-content" ref={highlightingContentElement}></code>
                </pre>
            </div>
        </div>
    );
};

export default EditorContent;
