import {useContext, useEffect, useCallback, useMemo, useRef} from "react";
import {EditorContext} from "/src/store/Editor/editor-context";
import * as Prism from "prismjs";

function useCode() {
    const highlightingContentElement = useRef(null);
    const highlightingElement = useRef(null);

    const {
        articleContent,
        setArticleContent,
        enableToolbarButtons,
        disableToolbarButtons,
    } = useContext(EditorContext);

    const lineNumbers = useMemo(
        () => Array.from({ length: articleContent.split("\n").length }, (_, key) => key),
        [articleContent]
    );

    const updateText = useCallback((inputText) => {
        if (inputText === undefined || inputText === null) {
            if (import.meta.env.DEV) {
                throw new Error("Text is missing.");
            }
            console.error("Text is missing.");
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
            enableToolbarButtons("edit", ["copy", "cleanCode"]);
        } else {
            disableToolbarButtons("edit", ["copy", "cleanCode"]);
        }

        // Replace special characters
        const parsedText = text.replace(new RegExp("&", "g"), "&").replace(new RegExp("<", "g"), "<");

        highlightingContent.innerHTML = Prism.highlight(
            parsedText,
            Prism.languages.html,
            "html"
        );
        setArticleContent(parsedText);
    }, [disableToolbarButtons, enableToolbarButtons, setArticleContent]);

    useEffect(() => {
        updateText(articleContent);
    }, [articleContent, updateText]);

    const textareaHandler = useCallback((ev) => {
        updateText(ev.currentTarget.value);
    }, [updateText]);

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

    const checkTab = useCallback((ev) => {
        const code = ev.target.value;

        if (ev.key === "Tab") {
            ev.preventDefault();

            const beforeTab = code.slice(0, ev.target.selectionStart);
            const afterTab = code.slice(ev.target.selectionEnd, ev.target.value.length);
            const cursorPos = ev.target.selectionEnd + 1;

            const updatedCode = `${beforeTab}\t${afterTab}`;

            ev.target.value = updatedCode;
            ev.target.selectionStart = cursorPos;
            ev.target.selectionEnd = cursorPos;
            updateText(updatedCode);
        }
    }, [updateText]);

    return {
        articleContent,
        lineNumbers,
        highlightingContentElement,
        highlightingElement,
        textareaHandler,
        syncScroll,
        checkTab
    };
}

export default useCode;
