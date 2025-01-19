import PropTypes from "prop-types";
import {EditorContext} from "./editor-context.ts";
import {useReducer, useState} from "react";
import {Article, ToolbarButtons} from "./DefaultEditorContext.ts";
import articleReducer, {articleActionTypes} from "./reducers/article-reducer.ts";
import toolbarButtonsReducer, {toolbarButtonsActionTypes} from "./reducers/toolbar-buttons-reducer.ts";

const defaultArticle = new Article();
const defaultToolbarButtons = new ToolbarButtons();

export default function EditorProvider({children}) {
    const [page, setPage] = useState("home");
    const [article, dispatchArticle] = useReducer(articleReducer, defaultArticle, undefined);
    const [toolbarButtons, dispatchToolbarButtons] = useReducer(toolbarButtonsReducer, defaultToolbarButtons, undefined);

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
        setArticle,
        resetArticle,
        disableToolbarButtons,
        enableToolbarButtons,
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
