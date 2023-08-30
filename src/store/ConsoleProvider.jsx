import { useState, useEffect, useReducer } from "react";
import PropTypes from "prop-types";

import ConsoleContext from "./console-context";

const defaultToolbarBtnProperties = {
    file: {
        main: { disabled: false },
        exit: { disabled: true },
        new: { disabled: false },
        open: { disabled: false },
        save: { disabled: true },
        import: { disabled: false },
        export: { disabled: true },
    }
};

const toolbarButtonsReducer = (state, action) => {
    let newButtons = state;
    if (action.type === "DISABLE") {
        if (action.newState !== null && action.mainButton && action.subButtons) {
            action.subButtons.forEach(
                (subButtonName) =>
                    (newButtons[action.mainButton][subButtonName].disabled = action.newState)
            );
        }
    }
    return newButtons;
};

const ConsoleProvider = ({ children }) => {
    const defaultPage = sessionStorage.getItem("currentPage")
        ? sessionStorage.getItem("currentPage")
        : "home";
    const defaultEditorContent = sessionStorage.getItem("editorContent")
        ? sessionStorage.getItem("editorContent")
        : "home";
    const defaultArticleCode = sessionStorage.getItem("articleCode")
        ? sessionStorage.getItem("articleCode")
        : "";
    const [currentPage, setCurrentPage] = useState(defaultPage);
    const [editorContent, setEditorContent] = useState(defaultEditorContent);
    const [articleCode, setArticleCode] = useState(defaultArticleCode);
    const [toolbarButtons, dispatchToolbarButtons] = useReducer(
        toolbarButtonsReducer,
        defaultToolbarBtnProperties
    );
    const value = {
        currentPage,
        editorContent,
        articleCode,
        toolbarButtons,
        setCurrentPage,
        setEditorContent,
        setArticleCode,
        dispatchToolbarButtons,
    };

    useEffect(() => {
        sessionStorage.setItem("currentPage", currentPage);
    }, [currentPage]);

    useEffect(() => {
        if (currentPage === "editor") {
            sessionStorage.setItem("editorContent", editorContent);
        } else {
            sessionStorage.removeItem("editorContent");
        }
    }, [editorContent, currentPage]);

    useEffect(() => {
        if (currentPage === "editor" && editorContent === "edit") {
            sessionStorage.setItem("articleCode", articleCode);
        } else {
            sessionStorage.removeItem("articleCode");
        }
    }, [articleCode, currentPage, editorContent]);

    return (
        <ConsoleContext.Provider value={value}>
            {children}
        </ConsoleContext.Provider>
    );
};

ConsoleProvider.propTypes = {
    children: PropTypes.any,
};

export default ConsoleProvider;
