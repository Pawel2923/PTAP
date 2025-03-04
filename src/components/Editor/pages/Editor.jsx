import { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { EditorContext } from "../../../store/Editor/editor-context.js";
import Toolbar from "../Components/Toolbar/Toolbar";
import classes from "./Editor.module.css";
import { Outlet } from "react-router-dom";

const Editor = ({ setMainHeader }) => {
  const { editorStyles } = useContext(EditorContext);

  useEffect(() => {
    setMainHeader("Edytor artykułów");
  }, [setMainHeader]);

  return (
    <div className={classes.editor} style={editorStyles}>
      <Toolbar />
      <div className={classes["workspace-container"]}>
        <Outlet />
      </div>
    </div>
  );
};

Editor.propTypes = {
  setMainHeader: PropTypes.func,
};

export default Editor;
