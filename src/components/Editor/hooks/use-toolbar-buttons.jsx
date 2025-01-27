import {useCallback, useContext} from "react";
import PageContext from "/src/store/page-context.js";
import {EditorContext} from "/src/store/Editor/editor-context.js";

/**
 * This hook is responsible for toolbar buttons actions
 * @param {React.Dispatch<React.SetStateAction<object>>} setToolbarStyles
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setShowSave
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setShowOpen
 */
export default function useToolbarButtons(setToolbarStyles, setShowSave, setShowOpen) {
    const {fullscreen, setFullscreen} = useContext(PageContext);
    const {
        setPage,
        article,
        disableToolbarButtons,
        enableToolbarButtons,
        setArticle,
        resetArticle,
        setEditorStyles,
    } = useContext(EditorContext);

    const fullscreenClickHandler = () => {
        if (!fullscreen) {
            setFullscreen(true);
            setToolbarStyles({
                borderTopLeftRadius: "unset",
                borderTopRightRadius: "unset",
            });
            setEditorStyles({
                position: "fixed",
                inset: 0,
                zIndex: 50,
                borderRadius: "unset",
            });
        } else {
            setFullscreen(false);
            setToolbarStyles({});
            setEditorStyles({});
        }
    };

    const dropdownOptionClickHandler = useCallback((ev) => {
        if (ev.currentTarget.id === "exit") {
            setPage("home");

            disableToolbarButtons("file", ["exit", "save"]);
            disableToolbarButtons("edit", ["copy", "newLine", "cleanCode"]);
        } else if (ev.currentTarget.id === "edit") {
            resetArticle();
            setPage("edit");

            enableToolbarButtons("file", ["exit", "save"]);
            enableToolbarButtons("edit", ["copy", "newLine", "cleanCode"]);
        } else if (ev.currentTarget.id === "save") {
            setShowSave(true);
        } else if (ev.currentTarget.id === "open") {
            setShowOpen(true);

            enableToolbarButtons("file", ["exit", "save"]);
            enableToolbarButtons("edit", ["copy", "newLine", "cleanCode"]);
        } else {
            setPage(ev.currentTarget.id);

            enableToolbarButtons("file", ["exit", "save"]);
            enableToolbarButtons("edit", ["copy", "newLine", "cleanCode"]);
        }
    }, [disableToolbarButtons, enableToolbarButtons, resetArticle, setPage, setShowOpen, setShowSave]);

    const insertNewLine = useCallback(() => {
        const newArticle = article;
        newArticle.content += "<br/>";

        setArticle(newArticle);
    }, [article, setArticle]);

    const onCopy = useCallback(async () => {
        await navigator.clipboard.writeText(article.content);
    }, [article.content]);

    const cleanCode = useCallback(() => {
        const cleanedArticle = article;
        cleanedArticle.content = "";
        setArticle(cleanedArticle);

        disableToolbarButtons("edit", ["copy", "cleanCode"]);
    }, [article, disableToolbarButtons, setArticle]);

    return {
        dropdownOptionClickHandler,
        insertNewLine,
        onCopy,
        cleanCode,
        fullscreenClickHandler,
    };
}