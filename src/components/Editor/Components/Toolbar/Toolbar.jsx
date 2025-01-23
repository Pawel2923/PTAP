import {useContext, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {Dropdown, DropdownNested} from "/src/components/UI/Dropdown";
import Save from "./Save.jsx";
import Open from "./Open.jsx";
import PageContext from "/src/store/page-context";
import classes from "./Toolbar.module.css";
import ToolbarButtons from "./ToolbarComponents/ToolbarButtons.jsx";
import useToolbarButtons from "../../hooks/use-toolbar-buttons.jsx";

const Toolbar = () => {
    const {width, fullscreen} = useContext(PageContext);
    const [showSave, setShowSave] = useState(false);
    const [showOpen, setShowOpen] = useState(false);
    const [toolbarStyles, setToolbarStyles] = useState({});

    const {
        fileButtonList,
        editButtonList,
        fullscreenClickHandler
    } = useToolbarButtons(setToolbarStyles, setShowSave, setShowOpen);

    console.log(`fileButtonList: ${fileButtonList}`);
    console.log(`editButtonList: ${editButtonList}`);

    return (
        <>
            {showOpen && <Open setShowOpen={setShowOpen}/>}
            {showSave && <Save setShowSave={setShowSave}/>}
            <nav className={classes.toolbar} style={toolbarStyles}>
                {width > 800 ? (
                    <>
                        <Dropdown title="Plik" className={classes.option}>
                            <ToolbarButtons buttonsList={fileButtonList} setToolbarStyles={setToolbarStyles}/>
                        </Dropdown>
                        <Dropdown title="Edytuj" className={classes.option}>
                            <ToolbarButtons buttonsList={editButtonList} setToolbarStyles={setToolbarStyles}/>
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
                            <ToolbarButtons buttonsList={fileButtonList} setToolbarStyles={setToolbarStyles}/>
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
                            <ToolbarButtons buttonsList={editButtonList} setToolbarStyles={setToolbarStyles}/>
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
