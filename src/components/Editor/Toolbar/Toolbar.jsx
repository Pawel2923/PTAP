import {useContext, useState} from "react";
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {Dropdown, DropdownNested} from "/src/components/UI/Dropdown";
import Save from "./Save";
import Open from "./Open";
import PageContext from "/src/store/page-context";
import {EditorContext} from "/src/store/Editor/editor-context.ts";
import classes from "./Toolbar.module.css";

const Toolbar = () => {
    const {width, fullscreen} = useContext(PageContext);
    const {toolbarButtons} = useContext(EditorContext);
    const [showSave, setShowSave] = useState(false);
    const [showOpen, setShowOpen] = useState(false);
    const [toolbarStyles, setToolbarStyles] = useState({});

    let fileButtonList = undefined;
    if (toolbarButtons.file) {
        fileButtonList = [
            {
                id: "edit",
                onClick: dropdownOptionClickHandler,
                disabled: toolbarButtons.file.get("new"),
                children: "Nowy",
            },
            {
                id: "open",
                onClick: dropdownOptionClickHandler,
                disabled: toolbarButtons.file.get("open"),
                children: "Otwórz",
            },
            {
                id: "save",
                onClick: dropdownOptionClickHandler,
                disabled: toolbarButtons.file.get("save"),
                children: "Zapisz",
            },
            {
                id: "exit",
                onClick: dropdownOptionClickHandler,
                disabled: toolbarButtons.file.get("exit"),
                children: "Wyjdź",
            },
        ];
    }

    let editButtonList = undefined;
    if (toolbarButtons.edit) {
        editButtonList = [
            {
                id: "newLine",
                onClick: insertNewLine,
                disabled: toolbarButtons.edit.get("newLine"),
                children: "Wstaw nową linię",
            },
            {
                id: "copy",
                onClick: onCopy,
                disabled: toolbarButtons.edit.get("copy"),
                children: "Skopiuj kod",
            },
            {
                id: "cleanCode",
                onClick: cleanCode,
                disabled: toolbarButtons.edit.get("cleanCode"),
                children: "Wyczyść zawartość",
            },
        ];
    }

    const fileButtons = getButtons(fileButtonList);
    const editButtons = getButtons(editButtonList);

    return (
        <>
            {showOpen && <Open setShowOpen={setShowOpen}/>}
            {showSave && <Save setShowSave={setShowSave}/>}
            <nav className={classes.toolbar} style={toolbarStyles}>
                {width > 800 ? (
                    <>
                        <Dropdown title="Plik" className={classes.option}>
                            {fileButtons}
                        </Dropdown>
                        <Dropdown title="Edytuj" className={classes.option}>
                            {editButtons}
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
                            {fileButtons}
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
                            {editButtons}
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

Toolbar.propTypes = {
    setEditorStyles: PropTypes.func,
    setPage: PropTypes.func,
};

export default Toolbar;
