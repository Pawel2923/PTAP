import { createContext } from "react";

const ConsoleContext = createContext({
    currentPage: "home",
    editorContent: "home",
    articleCode: "",
    toolbarButtons: {
        file: {
            main: false,
            exit: true,
            new: false,
            open: false,
            save: false,
            import: false,
            export: false,
        },
    },
    setCurrentPage: () => {},
    setEditorContent: () => {},
    setArticleCode: () => {},
    dispatchToolbarButtons: (
        state,
        action = {
            mainButton: "Button name",
            subButton: "Button name",
            newState: true,
        }
    ) => {action},
});

export default ConsoleContext;
