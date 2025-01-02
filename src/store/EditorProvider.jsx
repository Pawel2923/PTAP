import { useState, useEffect, useReducer } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import EditorContext from "./editor-context";

const defaultToolbarBtnProperties = {
	file: {
		main: { disabled: false },
		exit: { disabled: true },
		new: { disabled: false },
		open: { disabled: false },
		save: { disabled: true },
	},
	edit: {
		newLine: { disabled: true },
		copy: { disabled: true },
		cleanCode: { disabled: true },
	},
};

/**
 * Disable or enable toolbar main buttons and sub buttons
 * @param state
 * @param action
 * @returns {*}
 */
const toolbarButtonsReducer = (state, action) => {
	let newButtons = state;
	if (action.type === "DISABLE") {
		if (action.mainButton && Array.isArray(action.subButtons)) {
			action.subButtons.forEach(
				(subButtonName) =>
					(newButtons[action.mainButton][
						subButtonName
					].disabled = true)
			);
		}
	}

	if (action.type === "ENABLE") {
		if (action.mainButton && Array.isArray(action.subButtons)) {
			action.subButtons.forEach(
				(subButtonName) =>
					(newButtons[action.mainButton][
						subButtonName
					].disabled = false)
			);
		}
	}

	return newButtons;
};

const EditorProvider = ({ children }) => {
	const location = useLocation();
	const defaultEditorContent = sessionStorage.getItem("editorContent")
		? sessionStorage.getItem("editorContent")
		: "home";
	const defaultArticleContent = sessionStorage.getItem("articleContent")
		? sessionStorage.getItem("articleContent")
		: "";
	const defaultArticleAddress = sessionStorage.getItem("articleAddress")
		? sessionStorage.getItem("articleAddress")
		: "";
	const defaultArticleName = sessionStorage.getItem("articleName")
		? sessionStorage.getItem("articleName")
		: "";
	const [editorContent, setEditorContent] = useState(defaultEditorContent);
	const [articleContent, setArticleContent] = useState(defaultArticleContent);
	const [articleAddress, setArticleAddress] = useState(defaultArticleAddress);
	const [articleName, setArticleName] = useState(defaultArticleName);
	const [toolbarButtons, dispatchToolbarButtons] = useReducer(
		toolbarButtonsReducer,
		defaultToolbarBtnProperties
	);

	const disableToolbarButtons = (mainButton, subButtons) => {
		dispatchToolbarButtons({
			type: "DISABLE",
			mainButton,
			subButtons,
		});
	};

	const enableToolbarButtons = (mainButton, subButtons) => {
		dispatchToolbarButtons({
			type: "ENABLE",
			mainButton,
			subButtons,
		});
	};

	const resetArticleInfo = () => {
		setArticleContent("");
		setArticleAddress("");
		setArticleName("");
	};

	const value = {
		editorContent,
		articleContent,
		articleAddress,
		articleName,
		toolbarButtons,
		setEditorContent,
		setArticleContent,
		setArticleAddress,
		setArticleName,
		resetArticleInfo,
		disableToolbarButtons,
		enableToolbarButtons,
	};

	useEffect(() => {
		if (location.pathname.includes("/editor") && editorContent === "edit") {
			sessionStorage.setItem("editorContent", editorContent);
			enableToolbarButtons("file", ["exit", "save"]);
			enableToolbarButtons("edit", ["newLine"]);
		} else {
			disableToolbarButtons("file", ["exit", "save"]);
			disableToolbarButtons("edit", ["newLine"]);
			sessionStorage.removeItem("editorContent");
			setEditorContent("home");
		}
	}, [editorContent, location.pathname]);

	useEffect(() => {
		if (location.pathname.includes("/editor") && editorContent === "edit") {
			sessionStorage.setItem("articleContent", articleContent);
			sessionStorage.setItem("articleAddress", articleAddress);
			sessionStorage.setItem("articleName", articleName);
		} else {
			sessionStorage.removeItem("articleContent");
			setArticleContent("");
			sessionStorage.removeItem("articleAddress");
			setArticleAddress("");
			sessionStorage.removeItem("articleName");
			setArticleName("");
		}
	}, [
		articleContent,
		articleAddress,
		articleName,
		editorContent,
		location.pathname,
	]);

	return (
		<EditorContext.Provider value={value}>
			{children}
		</EditorContext.Provider>
	);
};

EditorProvider.propTypes = {
	children: PropTypes.any,
};

export default EditorProvider;
