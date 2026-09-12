import "/src/css/prism.css";
import "./Code.css";
import classes from "./EditorContent.module.css";
import useCode from "../hooks/use-code.jsx";
import LineNumbers from "./LineNumbers.jsx";
import { useEffect, useState } from "react";

const EditorContent = () => {
  const [articleLength, setArticleLength] = useState(0);

  const {
    textareaHandler,
    syncScroll,
    checkTab,
    article,
    highlightingContentElement,
    highlightingElement,
    tabCaptureAnnouncement,
    handleBlur,
  } = useCode();

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
        <p id="editor-tab-hint" className="sr-only">
          Naciśnij klawisz Escape, aby wyjść z edytora za pomocą klawisza Tab.
        </p>
        <div
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        >
          {tabCaptureAnnouncement}
        </div>
        <textarea
          id="editing"
          onInput={textareaHandler}
          onScroll={syncScroll}
          onKeyDown={checkTab}
          onBlur={handleBlur}
          value={article?.content}
          spellCheck={false}
          aria-label="Edytor kodu artykułu"
          aria-describedby="editor-tab-hint"
        ></textarea>

        <pre
          id="highlighting"
          aria-hidden="true"
          role="presentation"
          ref={highlightingElement}
        >
          <code
            className="language-html"
            id="highlighting-content"
            ref={highlightingContentElement}
          ></code>
        </pre>
      </div>
    </div>
  );
};

export default EditorContent;
