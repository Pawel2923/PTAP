import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import PropTypes from "prop-types";
import PageContext from "../../../../store/page-context";
import classes from "./Editor.module.css";
import toolbarClasses from "./Toolbar.module.css";
import { Dropdown, DropdownOption } from "../../../UI/Dropdown";

const Toolbar = ({ setEditorStyles, setEditorContent }) => {
    const { fullscreen, setFullscreen } = useContext(PageContext);
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
        if (ev.currentTarget.id === "new") {
            setEditorContent("new");
        } else if (ev.currentTarget.id === "exit") {
            setEditorContent("home");
        }
    };

    return (
        <nav className={toolbarClasses.toolbar} style={toolbarStyles}>
            <Dropdown title="Plik" className={classes.option}>
                <DropdownOption id="new" onClick={dropdownOptionClickHandler}>Nowy</DropdownOption>
                <DropdownOption>Otwórz</DropdownOption>
                <DropdownOption>Zapisz</DropdownOption>
                <DropdownOption>Importuj</DropdownOption>
                <DropdownOption>Eksportuj</DropdownOption>
                <DropdownOption id="exit" onClick={dropdownOptionClickHandler}>Wyjdź</DropdownOption>
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
    );
};

Toolbar.propTypes = {
    setEditorStyles: PropTypes.func,
    setEditorContent: PropTypes.func,
};

export default Toolbar;
