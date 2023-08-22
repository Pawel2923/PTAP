import { useState, useReducer } from "react";
import PropTypes from "prop-types";

import ConsoleContext from "./console-context";

const defaultToolbarButtons = {
    file: {
        main: false,
        exit: true,
        new: false,
        open: false,
        save: false,
        import: false,
        export: false,
    },
};

const toolbarButtonsReducer = (state, action) => {
    let newButtons = state;
    if (action.newState !== null && action.mainButton && action.subButton) {
        newButtons[action.mainButton][action.subButton] = action.newState;
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
        defaultToolbarButtons
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
