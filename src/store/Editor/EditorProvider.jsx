import PropTypes from "prop-types";
import { EditorContext } from "./editor-context.js";
import { useCallback, useEffect, useReducer, useState } from "react";
import { Article } from "./DefaultEditorContext.js";
import articleReducer, {
  articleActionTypes,
} from "./reducers/article-reducer.js";
import { useLocation } from "react-router-dom";
import useToolbarOptions from "../../components/Editor/hooks/useToolbarOptions.jsx";

const defaultArticle = new Article();

export default function EditorProvider({ children }) {
  const { enableButton, disableButton } = useToolbarOptions();
  const location = useLocation();
  const [page, setPage] = useState("home");
  const [editorStyles, setEditorStyles] = useState({});
  const [article, dispatchArticle] = useReducer(
    articleReducer,
    defaultArticle,
    undefined
  );

  const setArticle = useCallback((article) => {
    dispatchArticle({
      type: articleActionTypes.UPDATE,
      payload: article,
    });
  }, []);

  const setArticleContent = useCallback((text) => {
    dispatchArticle({
      type: articleActionTypes.UPDATE_TEXT,
      payload: text,
    });
  }, []);

  const resetArticle = useCallback(() => {
    dispatchArticle({
      type: articleActionTypes.RESET,
    });
  }, []);

  const enableEditButtons = useCallback(() => {
    ["exit", "save-article"].forEach((button) => {
      enableButton("plik", button);
    });
    enableButton("edytuj", "insert-new-line");
  }, [enableButton]);

  const disableEditButtons = useCallback(() => {
    ["exit", "save-article"].forEach((button) => {
      disableButton("plik", button);
    });
    ["copy-article-content", "insert-new-line", "clean-article-content"].forEach((button) => {
      disableButton("edytuj", button);
    });
  }, [disableButton]);

  useEffect(() => {
    if (location.pathname.includes("/editor") && page === "edit") {
      enableEditButtons();
    } else {
      disableEditButtons();
      setPage("home");
    }
  }, [page, location.pathname, enableEditButtons, disableEditButtons]);

  /**
   * @type {DefaultEditorContext}
   */
  const ctxValue = {
    page,
    article,
    setPage,
    editorStyles,
    setArticle,
    setArticleContent,
    resetArticle,
    setEditorStyles,
  };

  return (
    <EditorContext.Provider value={ctxValue}>{children}</EditorContext.Provider>
  );
}

EditorProvider.propTypes = {
  children: PropTypes.any,
};
