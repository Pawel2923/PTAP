import "/src/css/prism.css";
import "./Code.css";
import classes from "./EditorContent.module.css";
import useCode from "../hooks/use-code.jsx";
import LineNumbers from "./LineNumbers.jsx";
import {useEffect, useState} from "react";

const EditorContent = () => {
    const [articleLength, setArticleLength] = useState(0);

    const {textareaHandler, syncScroll, checkTab, article, highlightingContentElement, highlightingElement} = useCode();

    useEffect(() => {
        const articleLinesCount = article.content?.split("\n").length;

        if (articleLength !== articleLinesCount) {
            setArticleLength(articleLinesCount);
        }
    }, [article.content, articleLength]);

    return (
        <div className={classes.code}>
            <LineNumbers articleLength={articleLength} />
            <div className={classes.line}></div>
            <div className={classes.content}>
                <textarea
                    id="editing"
                    onInput={textareaHandler}
                    onScroll={syncScroll}
                    onKeyDown={checkTab}
                    value={article?.content}
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
