import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useGetData, setData } from "../../../../hooks/use-db";
import PropTypes from "prop-types";
import toolbarClasses from "./Toolbar.module.css";
import { Dropdown, DropdownOption, DropdownNested } from "../../../UI/Dropdown";
import Modal from "../../../UI/Modal";
import { Button } from "../../../UI/Button";
import Input from "../../../UI/Input";
import PageContext from "../../../../store/page-context";
import ConsoleContext from "../../../../store/console-context";
import classes from "./Editor.module.css";

const defaultArticleInfo = { address: null, content: null, name: null };

const Toolbar = ({ setEditorStyles, setEditorContent }) => {
  const { width, fullscreen, setFullscreen } = useContext(PageContext);
  const { data } = useGetData();
  const { articleCode, toolbarButtons, dispatchToolbarButtons } =
    useContext(ConsoleContext);
  const [showSave, setShowSave] = useState(false);
  const [toolbarStyles, setToolbarStyles] = useState({});
  const [articleInfo, setArticleInfo] = useState(defaultArticleInfo);

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
        type: "DISABLE",
        mainButton: "file",
        subButtons: ["exit", "save", "export"],
        newState: true,
      });
    } else if (ev.currentTarget.id === "save") {
      setShowSave(true);
    } else {
      setEditorContent(ev.currentTarget.id);
      dispatchToolbarButtons({
        type: "DISABLE",
        mainButton: "file",
        subButtons: ["exit", "save", "export"],
        newState: false,
      });
    }
  };

  const closeModal = () => {
    setShowSave(false);
  };

  const inputChangeHandler = (ev) => {
    if (ev.currentTarget.name) {
      setArticleInfo((info) => {
        info[ev.currentTarget.name] = ev.currentTarget.value;
        info.content = articleCode;
        return info;
      });
    }
  };

  const saveChanges = (ev) => {
    ev.preventDefault();

    if (articleInfo) {
      setData(articleInfo, data);
    }
    closeModal();
  };

  const buttonList = (
    <>
      <Dropdown title="Plik" className={classes.option}>
        <DropdownOption
          id="edit"
          onClick={dropdownOptionClickHandler}
          disabled={toolbarButtons.file.new.disabled}
        >
          Nowy
        </DropdownOption>
        <DropdownOption
          id="edit"
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
        <DropdownOption disabled={toolbarButtons.file.import.disabled}>
          Importuj
        </DropdownOption>
        <DropdownOption disabled={toolbarButtons.file.export.disabled}>
          Eksportuj
        </DropdownOption>
        <DropdownOption
          id="exit"
          onClick={dropdownOptionClickHandler}
          disabled={toolbarButtons.file.exit.disabled}
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
    </>
  );

  return (
    <>
      {showSave && (
        <Modal title="Zapisywanie artykułu" setShowModal={setShowSave}>
          <span>Zapisz wszystkie zmiany lub anuluj</span>
          <form
            onSubmit={saveChanges}
            onReset={closeModal}
            className={toolbarClasses.form}
          >
            <Input
              type="text"
              name="address"
              placeholder="Adres do artykułu"
              onChange={inputChangeHandler}
              required={true}
            />
            <Input
              type="text"
              name="name"
              placeholder="Nazwa artykułu"
              onChange={inputChangeHandler}
              required={true}
            />
            <div className={toolbarClasses["modal-buttons"]}>
              <Button type="submit">Zapisz</Button>
              <Button type="reset" highlighted={false}>
                Anuluj
              </Button>
            </div>
          </form>
        </Modal>
      )}
      <nav className={toolbarClasses.toolbar} style={toolbarStyles}>
        {width > 800 ? (
          buttonList
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
              <DropdownOption
                id="edit"
                onClick={dropdownOptionClickHandler}
                disabled={toolbarButtons.file.new.disabled}
              >
                Nowy
              </DropdownOption>
              <DropdownOption
                id="edit"
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
              <DropdownOption disabled={toolbarButtons.file.import.disabled}>
                Importuj
              </DropdownOption>
              <DropdownOption disabled={toolbarButtons.file.export.disabled}>
                Eksportuj
              </DropdownOption>
              <DropdownOption
                id="exit"
                onClick={dropdownOptionClickHandler}
                disabled={toolbarButtons.file.exit.disabled}
              >
                Wyjdź
              </DropdownOption>
            </DropdownNested>
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
    </>
  );
};

Toolbar.propTypes = {
  setEditorStyles: PropTypes.func,
  setEditorContent: PropTypes.func,
};

export default Toolbar;
