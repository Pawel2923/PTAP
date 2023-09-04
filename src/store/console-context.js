import { createContext } from "react";

const ConsoleContext = createContext({
	currentPage: "home",
	editorContent: "home",
	articleCode: "",
	articleAddress: "",
	articleName: "",
	toolbarButtons: {
		file: {
			main: { disabled: false },
			exit: { disabled: true },
			new: { disabled: false },
			open: { disabled: false },
			save: { disabled: true },
			import: { disabled: false },
			export: { disabled: true },
		},
		edit: {
			copy: { disabled: true },
		},
	},
	setCurrentPage: () => {},
	setEditorContent: () => {},
	setArticleCode: () => {},
	setArticleAddress: () => {},
	setArticleName: () => {},
	resetArticleInfo: () => {},
	dispatchToolbarButtons: (
		action = {
			type: "DISABLE",
			mainButton: "Button name",
			subButtons: ["button name", "button name"],
			newState: true,
		}
	) => {
		action;
	},
	disableToolbarButtons: (mainButton, subButtons) => {
		const newState = true;
		mainButton, subButtons;
		return newState;
	},
	enableToolbarButtons: (mainButton, subButtons) => {
		const newState = false;
		mainButton, subButtons;
		return newState;
	},
});

export default ConsoleContext;
