import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import PropTypes from "prop-types";
import PageContext from "../../../../store/page-context";
import classes from "./Editor.module.css";

const Toolbar = ({ setEditorStyles }) => {
    const { fullscreen, setFullscreen } = useContext(PageContext);
    const [toolbarStyles, setToolbarStyles] = useState({});

    useEffect(() => {
        const exitFullscreen = (ev) => {
            ev.preventDefault();
            setFullscreen(false);
            setToolbarStyles({
                borderTopLeftRadius: "25px",
                borderTopRightRadius: "25px",
            });
            setEditorStyles({
                position: "initial",
                inset: "unset",
                zIndex: "unset",
                borderRadius: "25px",
            });
        };

        window.addEventListener("keydown", exitFullscreen);

        return () => {
            window.removeEventListener("keydown", exitFullscreen);
        };
    }, [setEditorStyles, setToolbarStyles, setFullscreen]);

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
            setToolbarStyles({
                borderTopLeftRadius: "25px",
                borderTopRightRadius: "25px",
            });
            setEditorStyles({
                position: "initial",
                inset: "unset",
                zIndex: "unset",
                borderRadius: "25px",
            });
        }
    };

    return (
        <nav className={classes.toolbar} style={toolbarStyles}>
            <button type="button" className={classes.option}>
                Plik
            </button>
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
                className={`${classes["toolbar-fullscreen"]} ${classes.option}`}
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
};

export default Toolbar;
