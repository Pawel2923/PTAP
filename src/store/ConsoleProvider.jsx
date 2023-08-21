import { useState } from "react";
import PropTypes from "prop-types";

import ConsoleContext from "./console-context";

const ConsoleProvider = ({ children }) => {
  const defaultPage = sessionStorage.getItem("currentPage") ? sessionStorage.getItem("currentPage") : "home";
  const [currentPage, setCurrentPage] = useState(defaultPage);
  const [editorContent, setEditorContent] = useState("home");
  const [articleCode, setArticleCode] = useState("");
  const value = {
    currentPage,
    editorContent,
    articleCode,
    setCurrentPage,
    setEditorContent,
    setArticleCode,
  };

  return (
    <ConsoleContext.Provider value={value}>{children}</ConsoleContext.Provider>
  );
};

ConsoleProvider.propTypes = {
  children: PropTypes.any,
};

export default ConsoleProvider;
