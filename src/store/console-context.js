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
