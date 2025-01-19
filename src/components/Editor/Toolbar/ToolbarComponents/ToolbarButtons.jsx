import {DropdownOption} from "../../../UI/Dropdown.jsx";
import {useContext} from "react";
import {EditorContext} from "/src/store/Editor/editor-context.ts";
import PageContext from "/src/store/page-context.js";

export default function ToolbarButtons({setToolbarStyles}) {
    const {fullscreen, setFullscreen} = useContext(PageContext);
    const {
        setPage,
        article,
        disableToolbarButtons,
        enableToolbarButtons,
        setArticle,
        resetArticle,
    } = useContext(EditorContext);

    const fullscreenClickHandler = () => {
        if (!fullscreen) {
            setFullscreen(true);
            setToolbarStyles({
                borderTopLeftRadius: "unset",
                borderTopRightRadius: "unset",
            });
            setEditorStyles({
                position: "fixed",
                inset: 0,
                zIndex: 50,
                borderRadius: "unset",
            });
        } else {
            setFullscreen(false);
            setToolbarStyles({});
            setEditorStyles({});
        }
    };

    const dropdownOptionClickHandler = (ev) => {
        if (ev.currentTarget.id === "exit") {
            setPage("home");

            disableToolbarButtons("file", ["exit", "save"]);
            disableToolbarButtons("edit", ["copy", "newLine", "cleanCode"]);
        } else if (ev.currentTarget.id === "edit") {
            resetArticle();
            setPage("edit");

            enableToolbarButtons("file", ["exit", "save"]);
            enableToolbarButtons("edit", ["copy", "newLine", "cleanCode"]);
        } else if (ev.currentTarget.id === "save") {
            setShowSave(true);
        } else if (ev.currentTarget.id === "open") {
            setShowOpen(true);

            enableToolbarButtons("file", ["exit", "save"]);
            enableToolbarButtons("edit", ["copy", "newLine", "cleanCode"]);
        } else {
            setPage(ev.currentTarget.id);

            enableToolbarButtons("file", ["exit", "save"]);
            enableToolbarButtons("edit", ["copy", "newLine", "cleanCode"]);
        }
    };

    const insertNewLine = () => {
        const newArticle = article;
        newArticle.content += "<br/>";

        setArticle(newArticle);
    };

    const onCopy = async () => {
        await navigator.clipboard.writeText(article.content);
    };

    const cleanCode = () => {
        const cleanedArticle = article;
        cleanedArticle.content = "";
        setArticle(cleanedArticle);

        disableToolbarButtons("edit", ["copy", "cleanCode"]);
    };

    return buttonsList.map((button, key) => (
        <DropdownOption
            key={key}
            id={button.id}
            onClick={button.onClick}
            disabled={button.disabled}
        >
            {button.children}
        </DropdownOption>
    ));
}