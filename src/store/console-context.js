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
            save: true,
            import: false,
            export: true,
        },
    },
    setCurrentPage: () => {},
    setEditorContent: () => {},
    setArticleCode: () => {},
    dispatchToolbarButtons: (
        state,
        action = {
            mainButton: "Button name",
            subButton: ["button name", "button name"],
            newState: true,
        }
    ) => {action},
});

export default ConsoleContext;
