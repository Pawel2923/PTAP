import { createContext } from "react";

const ConsoleContext = createContext({
  currentPage: "home",
  editorContent: "home",
  setCurrentPage: () => {},
  setEditorContent: () => {},
});

export default ConsoleContext;
