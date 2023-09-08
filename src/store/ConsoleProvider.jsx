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
    },
    edit: {
        copy: { disabled: true },
    },
};

const toolbarButtonsReducer = (state, action) => {
    let newButtons = state;
    if (action.type === "DISABLE") {
        if (action.newState !== null && action.mainButton && Array.isArray(action.subButtons)) {
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
    const defaultArticleAddress = sessionStorage.getItem("articleAddress")
        ? sessionStorage.getItem("articleAddress")
        : "";
    const defaultArticleName = sessionStorage.getItem("articleName")
    ? sessionStorage.getItem("articleName")
    : "";
    const [currentPage, setCurrentPage] = useState(defaultPage);
    const [editorContent, setEditorContent] = useState(defaultEditorContent);
    const [articleCode, setArticleCode] = useState(defaultArticleCode);
    const [articleAddress, setArticleAddress] = useState(defaultArticleAddress);
    const [articleName, setArticleName] = useState(defaultArticleName);
    const [toolbarButtons, dispatchToolbarButtons] = useReducer(
        toolbarButtonsReducer,
        defaultToolbarBtnProperties
    );
    
    const disableToolbarButtons = (mainButton, subButtons) => {
        const newState = true;

        dispatchToolbarButtons({
            type: "DISABLE",
            mainButton,
            subButtons,
            newState,
        });

        return newState;
      };
    
      const enableToolbarButtons = (mainButton, subButtons) => {
        const newState = false;

        dispatchToolbarButtons({
            type: "DISABLE",
            mainButton,
            subButtons,
            newState,
        });

        return newState;
      };

    const resetArticleInfo = () => {
        setArticleCode("");
        setArticleAddress("");
        setArticleName("");
    };

    const value = {
        currentPage,
        editorContent,
        articleCode,
        articleAddress,
        articleName,
        toolbarButtons,
        setCurrentPage,
        setEditorContent,
        setArticleCode,
        setArticleAddress,
        setArticleName,
        resetArticleInfo,
        disableToolbarButtons,
        enableToolbarButtons,
    };

    useEffect(() => {
        if (currentPage.length > 0) {
            sessionStorage.setItem("currentPage", currentPage);
        } else {
            sessionStorage.removeItem("currentPage");
        }
    }, [currentPage]);

    useEffect(() => {
        if (currentPage === "editor") {
            sessionStorage.setItem("editorContent", editorContent);
            
            if (editorContent !== "home") {
                enableToolbarButtons("file", ["exit", "save"]);
            }
        } else {
            sessionStorage.removeItem("editorContent");
            setEditorContent("home");
        }
    }, [editorContent, currentPage]);

    useEffect(() => {
        if (currentPage === "editor" && editorContent === "edit") {
            sessionStorage.setItem("articleCode", articleCode);
            sessionStorage.setItem("articleAddress", articleAddress);
            sessionStorage.setItem("articleName", articleName);
        } else {
            sessionStorage.removeItem("articleCode");
            setArticleCode("");
            sessionStorage.removeItem("articleAddress");
            setArticleAddress("");
            sessionStorage.removeItem("articleName");
            setArticleName("");
        }
    }, [articleCode, articleAddress, articleName, currentPage, editorContent]);

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
