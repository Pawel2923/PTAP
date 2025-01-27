import PropTypes from "prop-types";
import {EditorContext} from "./editor-context.js";
import {useEffect, useReducer, useState} from "react";
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

    useEffect(() => {
        if (location.pathname.includes("/editor") && page === "edit") {
            enableToolbarButtons("file", ["exit", "save"]);
            enableToolbarButtons("edit", ["newLine", "copy", "cleanCode"]);
        } else {
            disableToolbarButtons("file", ["exit", "save"]);
            disableToolbarButtons("edit", ["newLine", "copy", "cleanCode"]);
            setPage("home");
        }
    }, [page, location.pathname]);

    function setArticle(article) {
        dispatchArticle({
            type: articleActionTypes.UPDATE,
            payload: article,
        });
    }

    function resetArticle() {
        dispatchArticle({
            type: articleActionTypes.RESET,
        });
    }

    function disableToolbarButtons(buttonName, subButtonNames) {
        dispatchToolbarButtons({
            type: toolbarButtonsActionTypes.DISABLE,
            payload: {buttonName, subButtonNames},
        })
    }

    function enableToolbarButtons(buttonName, subButtonNames) {
		dispatchToolbarButtons({
            type: toolbarButtonsActionTypes.ENABLE,
            payload: {buttonName, subButtonNames},
        });
    }

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
