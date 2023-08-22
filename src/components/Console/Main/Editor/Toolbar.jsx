import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useGetData, setData } from "../../../../hooks/use-db";
import PropTypes from "prop-types";
import PageContext from "../../../../store/page-context";
import classes from "./Editor.module.css";
import toolbarClasses from "./Toolbar.module.css";
import { Dropdown, DropdownOption } from "../../../UI/Dropdown";
import Modal from "../../../UI/Modal";
import { Button } from "../../../UI/Button";
import ConsoleContext from "../../../../store/console-context";

const Toolbar = ({ setEditorStyles, setEditorContent }) => {
    const { fullscreen, setFullscreen } = useContext(PageContext);
    const { data } = useGetData();
    const { articleCode, toolbarButtons, dispatchToolbarButtons } =
        useContext(ConsoleContext);
    const [showSave, setShowSave] = useState(false);
    const [toolbarStyles, setToolbarStyles] = useState({});

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
                zIndex: 5,
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
            setEditorContent("home");
            dispatchToolbarButtons({
                mainButton: "file",
                subButton: ["exit", "save", "export"],
                newState: true,
            });
        } else if (ev.currentTarget.id === "save") {
            setShowSave(true);
        } else {
            setEditorContent(ev.currentTarget.id);
            dispatchToolbarButtons({
                mainButton: "file",
                subButton: ["exit", "save", "export"],
                newState: false,
            });
        }
    };

    const closeModal = () => {
        setShowSave(false);
    };

    const saveChanges = () => {
        setData(articleCode, data);
        closeModal();
    };

    return (
        <>
            {showSave && (
                <Modal title="Zapisywanie artykułu" setShowModal={setShowSave}>
                    Zapisz wszystkie zmiany lub anuluj
                    <div className={toolbarClasses["modal-buttons"]}>
                        <Button highlighted={false} onClick={closeModal}>
                            Anuluj
                        </Button>
                        <Button onClick={saveChanges}>Zapisz</Button>
                    </div>
                </Modal>
            )}
            <nav className={toolbarClasses.toolbar} style={toolbarStyles}>
                <Dropdown title="Plik" className={classes.option}>
                    <DropdownOption
                        id="edit"
                        onClick={dropdownOptionClickHandler}
                        disabled={toolbarButtons.file.new}
                    >
                        Nowy
                    </DropdownOption>
                    <DropdownOption
                        id="edit"
                        onClick={dropdownOptionClickHandler}
                        disabled={toolbarButtons.file.open}
                    >
                        Otwórz
                    </DropdownOption>
                    <DropdownOption
                        id="save"
                        onClick={dropdownOptionClickHandler}
                        disabled={toolbarButtons.file.save}
                    >
                        Zapisz
                    </DropdownOption>
                    <DropdownOption disabled={toolbarButtons.file.import}>
                        Importuj
                    </DropdownOption>
                    <DropdownOption disabled={toolbarButtons.file.export}>
                        Eksportuj
                    </DropdownOption>
                    <DropdownOption
                        id="exit"
                        onClick={dropdownOptionClickHandler}
                        disabled={toolbarButtons.file.exit}
                    >
                        Wyjdź
                    </DropdownOption>
                </Dropdown>
                <button type="button" className={classes.option}>
                    Edytuj
                </button>
                <button type="button" className={classes.option}>
                    Zaznaczenie
                </button>
                <button type="button" className={classes.option}>
                    Widok
                </button>
                <button type="button" className={classes.option}>
                    Podgląd
                </button>
                <button
                    type="button"
                    className={`${toolbarClasses["toolbar-fullscreen"]} ${classes.option}`}
                    title={!fullscreen ? "Pełny ekran" : "Zamknij pełny ekran"}
                    onClick={fullscreenClickHandler}
                >
                    <FontAwesomeIcon
                        icon={
                            !fullscreen
                                ? icon({ name: "maximize", style: "solid" })
                                : icon({ name: "minimize", style: "solid" })
                        }
                    />
                </button>
            </nav>
        </>
    );
};

Toolbar.propTypes = {
    setEditorStyles: PropTypes.func,
    setEditorContent: PropTypes.func,
};

export default Toolbar;
