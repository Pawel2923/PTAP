import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import {
	Dropdown,
	DropdownOption,
	DropdownNested,
} from "/src/components/UI/Dropdown";
import Save from "./Save";
import Open from "./Open";
import PageContext from "/src/store/page-context";
import EditorContext from "/src/store/editor-context";
import classes from "./Toolbar.module.css";

const Toolbar = ({ setEditorStyles, setEditorContent }) => {
	const { width, fullscreen, setFullscreen } = useContext(PageContext);
	const {
		toolbarButtons,
		articleContent,
		resetArticleInfo,
		enableToolbarButtons,
		disableToolbarButtons,
		setArticleContent,
	} = useContext(EditorContext);
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
			disableToolbarButtons("edit", ["copy", "newLine", "cleanCode"]);
		} else if (ev.currentTarget.id === "edit") {
			resetArticleInfo();
			setEditorContent("edit");
			enableToolbarButtons("file", ["exit", "save"]);
			enableToolbarButtons("edit", ["copy", "newLine", "cleanCode"]);
		} else if (ev.currentTarget.id === "save") {
			setShowSave(true);
		} else if (ev.currentTarget.id === "open") {
			setShowOpen(true);
			enableToolbarButtons("file", ["exit", "save"]);
			enableToolbarButtons("edit", ["copy", "newLine", "cleanCode"]);
		} else {
			setEditorContent(ev.currentTarget.id);
			enableToolbarButtons("file", ["exit", "save"]);
			enableToolbarButtons("edit", ["copy", "newLine", "cleanCode"]);
		}
	};

	const insertNewLine = () => {
		setArticleContent((content) => {
			content += "<br/>";
			return content;
		});
	};

	const onCopy = async () => {
		await navigator.clipboard.writeText(articleContent);
	};

	const cleanCode = () => {
		setArticleContent("");
		disableToolbarButtons("edit", ["copy", "cleanCode"]);
	};

	const getButtons = (buttonsList) => {
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
	};

	const fileButtonList = [
		{
			id: "edit",
			onClick: dropdownOptionClickHandler,
			disabled: toolbarButtons.file.new.disabled,
			children: "Nowy",
		},
		{
			id: "open",
			onClick: dropdownOptionClickHandler,
			disabled: toolbarButtons.file.open.disabled,
			children: "Otwórz",
		},
		{
			id: "save",
			onClick: dropdownOptionClickHandler,
			disabled: toolbarButtons.file.save.disabled,
			children: "Zapisz",
		},
		{
			id: "exit",
			onClick: dropdownOptionClickHandler,
			disabled: toolbarButtons.file.exit.disabled,
			children: "Wyjdź",
		},
	];

	const editButtonList = [
		{
			id: "newLine",
			onClick: insertNewLine,
			disabled: toolbarButtons.edit.newLine.disabled,
			children: "Wstaw nową linię",
		},
		{
			id: "copy",
			onClick: onCopy,
			disabled: toolbarButtons.edit.copy.disabled,
			children: "Skopiuj kod",
		},
		{
			id: "cleanCode",
			onClick: cleanCode,
			disabled: toolbarButtons.edit.cleanCode.disabled,
			children: "Wyczyść zawartość",
		},
	];

	const fileButtons = getButtons(fileButtonList);

	const editButtons = getButtons(editButtonList);

	return (
		<>
			{showOpen && <Open setShowOpen={setShowOpen} />}
			{showSave && <Save setShowSave={setShowSave} />}
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
	setEditorContent: PropTypes.func,
};

export default Toolbar;
