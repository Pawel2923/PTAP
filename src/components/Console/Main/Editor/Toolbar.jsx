import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Dropdown, DropdownOption, DropdownNested } from "../../../UI/Dropdown";
import Save from "./Save";
import Open from "./Open";
import PageContext from "../../../../store/page-context";
import ConsoleContext from "../../../../store/console-context";
import toolbarClasses from "./Toolbar.module.css";
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

	document.execCommand("copy");

	document.body.removeChild(textArea);
};

const Toolbar = ({ setEditorStyles, setEditorContent }) => {
	const { width, fullscreen, setFullscreen } = useContext(PageContext);
	const {
		toolbarButtons,
		articleCode,
		resetArticleInfo,
		enableToolbarButtons,
		disableToolbarButtons,
	} = useContext(ConsoleContext);
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
			disableToolbarButtons("edit", ["copy"]);
		} else if (ev.currentTarget.id === "edit") {
			resetArticleInfo();
			setEditorContent("edit");
			enableToolbarButtons("file", ["exit", "save"]);
			enableToolbarButtons("edit", ["copy"]);
		} else if (ev.currentTarget.id === "save") {
			setShowSave(true);
		} else if (ev.currentTarget.id === "open") {
			setShowOpen(true);
		} else {
			setEditorContent(ev.currentTarget.id);
			enableToolbarButtons("file", ["exit", "save"]);
			enableToolbarButtons("edit", ["copy"]);
		}
	};

	const onCopy = () => {
		copyToClipboard(articleCode);
	};

  const getButtons = (buttonsList) => {
    return buttonsList.map((button, key) => 
      <DropdownOption
        key={key}
        id={button.id}
        onClick={button.onClick}
        disabled={button.disabled}
      >
        {button.children}
      </DropdownOption>
    );
  };

const fileButtonList = [
  {
    id: "edit",
    onClick: dropdownOptionClickHandler,
    disabled: toolbarButtons.file.new.disabled,
    children: "Nowy"
  },
  {
    id: "open",
    onClick: dropdownOptionClickHandler,
    disabled: toolbarButtons.file.open.disabled,
    children: "Otwórz"
  }, 
  {
    id: "save",
    onClick: dropdownOptionClickHandler,
    disabled: toolbarButtons.file.save.disabled,
    children: "Zapisz"
  },
  {
    id: "exit",
    onClick: dropdownOptionClickHandler,
    disabled: toolbarButtons.file.exit.disabled,
    children: "Wyjdź"
  }
];
  
const editButtonList = [
  {
    id: "copy",
    onClick: onCopy,
    disabled: toolbarButtons.edit.copy.disabled,
    children: "Skopiuj kod"
  }
];

	const fileButtons = getButtons(fileButtonList);

	const editButtons = getButtons(editButtonList);

	return (
		<>
			{showOpen && <Open setShowOpen={setShowOpen} />}
			{showSave && <Save setShowSave={setShowSave} />}
			<nav className={toolbarClasses.toolbar} style={toolbarStyles}>
				{width > 800 ? (
					<>
						<Dropdown title="Plik" className={classes.option}>
							{fileButtons}
						</Dropdown>
						<Dropdown title="Edytuj" className={classes.option}>
							{editButtons}
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
						<DropdownOption>Zaznaczenie</DropdownOption>
						<DropdownOption>Widok</DropdownOption>
					</Dropdown>
				)}
				<button
					type="button"
					className={`${toolbarClasses["toolbar-fullscreen"]} ${classes.option}`}
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
	setEditorContent: PropTypes.func,
};

export default Toolbar;
