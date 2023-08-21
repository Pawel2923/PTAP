import { createContext } from "react";

const ConsoleContext = createContext({
  currentPage: "home",
  editorContent: "home",
  articleCode: "",
  setCurrentPage: () => {},
  setEditorContent: () => {},
  setArticleCode: () => {},
});

export default ConsoleContext;
