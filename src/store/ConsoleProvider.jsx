import { useState, useReducer } from "react";
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
    const [currentPage, setCurrentPage] = useState(defaultPage);
    const [editorContent, setEditorContent] = useState("home");
    const [articleCode, setArticleCode] = useState("");
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
