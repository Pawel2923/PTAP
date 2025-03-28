import { useContext, useEffect, useCallback, useRef } from "react";
import { EditorContext } from "/src/store/Editor/editor-context";
import * as Prism from "prismjs";
import useToolbarOptions from "./use-toolbar-options.jsx";

function useCode() {
  const { enableButton, disableButton } = useToolbarOptions();
  const highlightingContentElement = useRef(null);
  const highlightingElement = useRef(null);

  const { article, setArticleContent } = useContext(EditorContext);

  const updateText = useCallback(
    (inputText) => {
      if (inputText === undefined || inputText === null) {
        return;
      }

      const highlightingContent = highlightingContentElement.current;
      if (!highlightingContent) {
        if (import.meta.env.DEV) {
          throw new Error("HighlightingContent is null");
        }
        console.error("HighlightingContent is null");
        return;
      }

      const text = inputText;

      // Enable or disable cleanCode button
      if (text.length > 0) {
        ["copy-article-content", "clean-article-content"].forEach((button) => {
          enableButton("edytuj", button);
        });
      } else {
        ["copy-article-content", "clean-article-content"].forEach((button) => {
          disableButton("edytuj", button);
        });
      }

      // Replace special characters
      const parsedText = text
        .replace(new RegExp("&", "g"), "&")
        .replace(new RegExp("<", "g"), "<");

      highlightingContent.innerHTML = Prism.highlight(
        parsedText,
        Prism.languages.html,
        "html"
      );

      setArticleContent(parsedText);
    },
    [disableButton, enableButton, setArticleContent]
  );

  useEffect(() => {
    updateText(article.content);
  }, [article.content, updateText]);

  const textareaHandler = useCallback(
    (ev) => {
      updateText(ev.currentTarget.value);
    },
    [updateText]
  );

  const syncScroll = useCallback((ev) => {
    const resultElement = highlightingElement.current;

    if (!resultElement) {
      if (import.meta.env.DEV) {
        throw new Error("ResultElement is null");
      }
      console.error("ResultElement is null");
      return;
    }

    // Get and set x and y
    resultElement.scrollTop = ev.currentTarget.scrollTop;
    resultElement.scrollLeft = ev.target.scrollLeft;
  }, []);

  const checkTab = useCallback(
    (ev) => {
      const code = ev.target.value;

      if (ev.key === "Tab") {
        ev.preventDefault();

        const beforeTab = code.slice(0, ev.target.selectionStart);
        const afterTab = code.slice(
          ev.target.selectionEnd,
          ev.target.value.length
        );
        const cursorPos = ev.target.selectionEnd + 1;

        const updatedCode = `${beforeTab}\t${afterTab}`;

        ev.target.value = updatedCode;
        ev.target.selectionStart = cursorPos;
        ev.target.selectionEnd = cursorPos;
        updateText(updatedCode);
      }
    },
    [updateText]
  );

  return {
    article,
    highlightingContentElement,
    highlightingElement,
    textareaHandler,
    syncScroll,
    checkTab,
  };
}

export default useCode;
