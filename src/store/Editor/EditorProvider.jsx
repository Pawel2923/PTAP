import PropTypes from "prop-types";
import {EditorContext} from "./editor-context.js";
import {useCallback, useEffect, useReducer, useState} from "react";
import {Article, ToolbarButtons} from "./DefaultEditorContext.js";
import articleReducer, {articleActionTypes} from "./reducers/article-reducer.js";
import toolbarButtonsReducer, {toolbarButtonsActionTypes} from "./reducers/toolbar-buttons-reducer.js";
import {useLocation} from "react-router-dom";

const defaultArticle = new Article();
const defaultToolbarButtons = new ToolbarButtons();

export default function EditorProvider({children}) {
    const location = useLocation();
    const [page, setPage] = useState("home");
    const [editorStyles, setEditorStyles] = useState({});
    const [article, dispatchArticle] = useReducer(articleReducer, defaultArticle, undefined);
    const [toolbarButtons, dispatchToolbarButtons] = useReducer(toolbarButtonsReducer, defaultToolbarButtons, undefined);

    const setArticle = useCallback((article) => {
        dispatchArticle({
            type: articleActionTypes.UPDATE,
            payload: article,
        });
    }, []);

    const setArticleContent = useCallback((text) => {
        dispatchArticle({
            type: articleActionTypes.UPDATE_TEXT,
            payload: text,
        });
    }, []);

    const resetArticle = useCallback(() => {
        dispatchArticle({
            type: articleActionTypes.RESET,
        });
    }, []);

    const disableToolbarButtons = useCallback((buttonName, subButtonNames) => {
        dispatchToolbarButtons({
            type: toolbarButtonsActionTypes.DISABLE,
            payload: {buttonName, subButtonNames},
        })
    }, []);

    const enableToolbarButtons = useCallback((buttonName, subButtonNames) => {
        dispatchToolbarButtons({
            type: toolbarButtonsActionTypes.ENABLE,
            payload: {buttonName, subButtonNames},
        });
    }, []);

    useEffect(() => {
        if (location.pathname.includes("/editor") && page === "edit") {
            enableToolbarButtons("file", ["exit", "save"]);
            enableToolbarButtons("edit", ["newLine", "copy", "cleanCode"]);
        } else {
            disableToolbarButtons("file", ["exit", "save"]);
            disableToolbarButtons("edit", ["newLine", "copy", "cleanCode"]);
            setPage("home");
        }
    }, [page, location.pathname, enableToolbarButtons, disableToolbarButtons]);

    /**
     * @type {DefaultEditorContext}
     */
    const ctxValue = {
        page,
        article,
        toolbarButtons,
        setPage,
        editorStyles,
        setArticle,
        setArticleContent,
        resetArticle,
        disableToolbarButtons,
        enableToolbarButtons,
        setEditorStyles,
    };

    return (
        <EditorContext.Provider value={ctxValue}>
            {children}
        </EditorContext.Provider>
    );
}

EditorProvider.propTypes = {
    children: PropTypes.any,
};
