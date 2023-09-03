import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import toolbarClasses from "./Toolbar.module.css";
import { Dropdown, DropdownOption, DropdownNested } from "../../../UI/Dropdown";
import Save from "./Save";
import Open from "./Open";
import PageContext from "../../../../store/page-context";
import ConsoleContext from "../../../../store/console-context";
import DropdownProvider from "../../../../store/DropdownProvider";
import classes from "./Editor.module.css";

const copyToClipboard = (text) => {
  // Check for browser support
  if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      return;
  }
  const textArea = document.createElement("textarea");
  textArea.value = text;

  document.body.appendChild(textArea);

  textArea.focus();
  textArea.select();

  document.execCommand('copy');

  document.body.removeChild(textArea);
}

const Toolbar = ({ setEditorStyles, setEditorContent }) => {
  const { width, fullscreen, setFullscreen } = useContext(PageContext);
  const { toolbarButtons, articleCode, resetArticleInfo, enableToolbarButtons, disableToolbarButtons } = useContext(ConsoleContext);
  const [showSave, setShowSave] = useState(false);
  const [showOpen, setShowOpen] = useState(false);
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
      setEditorContent("home");
      disableToolbarButtons("file", ["exit", "save"]);
    } else if (ev.currentTarget.id === "edit") {
      resetArticleInfo();
      setEditorContent("edit");
      enableToolbarButtons("file", ["exit", "save"]);
    } else if (ev.currentTarget.id === "save") {
      setShowSave(true);
    } else if (ev.currentTarget.id === "open") {
      setShowOpen(true);
    } else {
      setEditorContent(ev.currentTarget.id);
      enableToolbarButtons("file", ["exit", "save"]);
    }
  };

  const onCopy = () => {
    copyToClipboard(articleCode);
  };

  const fileButtonList = (
    <>
      <DropdownOption
        id="edit"
        onClick={dropdownOptionClickHandler}
        disabled={toolbarButtons.file.new.disabled}
      >
        Nowy
      </DropdownOption>
      <DropdownOption
        id="open"
        onClick={dropdownOptionClickHandler}
        disabled={toolbarButtons.file.open.disabled}
      >
        Otwórz
      </DropdownOption>
      <DropdownOption
        id="save"
        onClick={dropdownOptionClickHandler}
        disabled={toolbarButtons.file.save.disabled}
      >
        Zapisz
      </DropdownOption>
      <DropdownOption
        id="exit"
        onClick={dropdownOptionClickHandler}
        disabled={toolbarButtons.file.exit.disabled}
      >
        Wyjdź
      </DropdownOption>
    </>
  );

  const editButtonList = (
    <>
      <DropdownOption
        id="copy"
        onClick={onCopy}
        disabled={toolbarButtons.edit.copy.disabled}
      >
        Skopiuj kod
      </DropdownOption>
    </>
  );

  return (
    <>
      {showOpen && <Open setShowOpen={setShowOpen} />}
      {showSave && <Save setShowSave={setShowSave} />}
      <DropdownProvider>
        <nav className={toolbarClasses.toolbar} style={toolbarStyles}>
          {width > 800 ? (
            <>
              <Dropdown title="Plik" className={classes.option}>
                {fileButtonList}
              </Dropdown>
              <Dropdown title="Edytuj" className={classes.option}>
                {editButtonList}
              </Dropdown>
              <button type="button" className={classes.option}>
                Zaznaczenie
              </button>
              <button type="button" className={classes.option}>
                Widok
              </button>
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
                    Plik <FontAwesomeIcon icon={solid("arrow-right")} />
                  </>
                }
              >
                {fileButtonList}
              </DropdownNested>
              <DropdownNested
                title={
                  <>
                    Edytuj <FontAwesomeIcon icon={solid("arrow-right")} />
                  </>
                }
              >
                {editButtonList}
              </DropdownNested>
              <DropdownOption>
                Zaznaczenie
              </DropdownOption>
              <DropdownOption>
                Widok
              </DropdownOption>
            </Dropdown>
          )}
          <button
            type="button"
            className={`${toolbarClasses["toolbar-fullscreen"]} ${classes.option}`}
            title={!fullscreen ? "Pełny ekran" : "Zamknij pełny ekran"}
            onClick={fullscreenClickHandler}
          >
            <FontAwesomeIcon
              icon={!fullscreen ? solid("maximize") : solid("minimize")}
            />
          </button>
        </nav>
      </DropdownProvider>
    </>
  );
};

Toolbar.propTypes = {
  setEditorStyles: PropTypes.func,
  setEditorContent: PropTypes.func,
};

export default Toolbar;
