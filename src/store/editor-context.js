import { createContext } from "react";

const EditorContext = createContext({
	editorContent: "home",
	articleContent: "",
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
			newLine: { disabled: true },
			copy: { disabled: true },
			cleanCode: { disabled: true },
		},
	},
	setEditorContent: () => {},
	setArticleContent: () => {},
	setArticleAddress: () => {},
	setArticleName: () => {},
	resetArticleInfo: () => {},
	disableToolbarButtons: () => {},
	enableToolbarButtons: () => {},
});

export default EditorContext;
