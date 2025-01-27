import {useContext, useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {Dropdown} from "/src/components/UI/Dropdown";
import {DropdownNested} from "/src/components/UI/DropdownNested.jsx";
import Save from "./Save.jsx";
import Open from "./Open.jsx";
import PageContext from "/src/store/page-context";
import classes from "./Toolbar.module.css";
import ToolbarButtons from "./ToolbarComponents/ToolbarButtons.jsx";
import useToolbarButtons from "../../hooks/use-toolbar-buttons.jsx";
import {EditorContext} from "/src/store/Editor/editor-context.js";

const Toolbar = () => {
    const {toolbarButtons} = useContext(EditorContext);
    const {width, fullscreen} = useContext(PageContext);
    const [showSave, setShowSave] = useState(false);
    const [showOpen, setShowOpen] = useState(false);
    const [toolbarStyles, setToolbarStyles] = useState({});

    const {
        dropdownOptionClickHandler,
        insertNewLine,
        onCopy,
        cleanCode,
        fullscreenClickHandler
    } = useToolbarButtons(setToolbarStyles, setShowSave, setShowOpen);

    const [fileButtonList, setFileButtonList] = useState([]);
    const [editButtonList, setEditButtonList] = useState([]);

    useEffect(() => {
        if (toolbarButtons.file) {
            setFileButtonList([
                {
                    id: "edit",
                    onClick: dropdownOptionClickHandler,
                    disabled: !toolbarButtons.file.get("new"),
                    children: "Nowy",
                },
                {
                    id: "open",
                    onClick: dropdownOptionClickHandler,
                    disabled: !toolbarButtons.file.get("open"),
                    children: "Otwórz",
                },
                {
                    id: "save",
                    onClick: dropdownOptionClickHandler,
                    disabled: !toolbarButtons.file.get("save"),
                    children: "Zapisz",
                },
                {
                    id: "exit",
                    onClick: dropdownOptionClickHandler,
                    disabled: !toolbarButtons.file.get("exit"),
                    children: "Wyjdź",
                },
            ]);
        }

        if (toolbarButtons.edit) {
            setEditButtonList([
                {
                    id: "newLine",
                    onClick: insertNewLine,
                    disabled: !toolbarButtons.edit.get("newLine"),
                    children: "Wstaw nową linię",
                },
                {
                    id: "copy",
                    onClick: onCopy,
                    disabled: !toolbarButtons.edit.get("copy"),
                    children: "Skopiuj kod",
                },
                {
                    id: "cleanCode",
                    onClick: cleanCode,
                    disabled: !toolbarButtons.edit.get("cleanCode"),
                    children: "Wyczyść zawartość",
                },
            ]);
        }
    }, [toolbarButtons, cleanCode, dropdownOptionClickHandler, insertNewLine, onCopy]);

    return (
        <>
            {showOpen && <Open setShowOpen={setShowOpen}/>}
            {showSave && <Save setShowSave={setShowSave}/>}
            <nav className={classes.toolbar} style={toolbarStyles}>
                {width > 800 ? (
                    <>
                        <Dropdown title="Plik" className={classes.option}>
                            <ToolbarButtons buttonsList={fileButtonList} />
                        </Dropdown>
                        <Dropdown title="Edytuj" className={classes.option}>
                            <ToolbarButtons buttonsList={editButtonList} />
                        </Dropdown>
                    </>
                ) : (
                    <Dropdown
                        title={
                            <FontAwesomeIcon
                                icon={solid("bars")}
                                className={classes.option}
                            />
                        }
                    >
                        <DropdownNested
                            title={
                                <>
                                    Plik{" "}
                                    <FontAwesomeIcon
                                        icon={solid("arrow-right")}
                                    />
                                </>
                            }
                        >
                            <ToolbarButtons buttonsList={fileButtonList} />
                        </DropdownNested>
                        <DropdownNested
                            title={
                                <>
                                    Edytuj{" "}
                                    <FontAwesomeIcon
                                        icon={solid("arrow-right")}
                                    />
                                </>
                            }
                        >
                            <ToolbarButtons buttonsList={editButtonList} />
                        </DropdownNested>
                    </Dropdown>
                )}
                <button
                    type="button"
                    className={`${classes["toolbar-fullscreen"]} ${classes.option}`}
                    title={!fullscreen ? "Pełny ekran" : "Zamknij pełny ekran"}
                    onClick={fullscreenClickHandler}
                >
                    <FontAwesomeIcon
                        icon={
                            !fullscreen ? solid("maximize") : solid("minimize")
                        }
                    />
                </button>
            </nav>
        </>
    );
};

export default Toolbar;
