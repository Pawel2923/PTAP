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
    const defaultArticleContent = sessionStorage.getItem("articleContent")
        ? sessionStorage.getItem("articleContent")
        : "";
    const defaultArticleAddress = sessionStorage.getItem("articleAddress")
        ? sessionStorage.getItem("articleAddress")
        : "";
    const defaultArticleName = sessionStorage.getItem("articleName")
    ? sessionStorage.getItem("articleName")
    : "";
    const [currentPage, setCurrentPage] = useState(defaultPage);
    const [editorContent, setEditorContent] = useState(defaultEditorContent);
    const [articleContent, setArticleContent] = useState(defaultArticleContent);
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
        setArticleContent("");
        setArticleAddress("");
        setArticleName("");
    };

    const value = {
        currentPage,
        editorContent,
        articleContent,
        articleAddress,
        articleName,
        toolbarButtons,
        setCurrentPage,
        setEditorContent,
        setArticleContent,
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
            sessionStorage.setItem("articleContent", articleContent);
            sessionStorage.setItem("articleAddress", articleAddress);
            sessionStorage.setItem("articleName", articleName);
        } else {
            sessionStorage.removeItem("articleContent");
            setArticleContent("");
            sessionStorage.removeItem("articleAddress");
            setArticleAddress("");
            sessionStorage.removeItem("articleName");
            setArticleName("");
        }
    }, [articleContent, articleAddress, articleName, currentPage, editorContent]);

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
