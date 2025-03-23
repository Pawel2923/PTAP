import { ToolbarOptions, ToolbarOptionsNested } from "./ToolbarOptions";
import classes from "./Toolbar.module.css";
import useToolbarOptions from "../../hooks/use-toolbar-options.jsx";
import { useContext, useEffect, useState } from "react";
import { EditorContext } from "../../../../store/Editor/editor-context.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import PageContext from "../../../../store/page-context.js";
import Open from "./Open.jsx";
import Save from "./Save.jsx";
import { useArticle } from "../../hooks/use-article.jsx";
import { useNavigate } from "react-router-dom";

export default function Toolbar() {
  const navigate = useNavigate();
  const { width, fullscreen, setFullscreen } = useContext(PageContext);
  const { options, updateClickHandler } = useToolbarOptions();
  const { article, setArticle, resetArticle, setEditorStyles } =
    useContext(EditorContext);
  const [showSave, setShowSave] = useState(false);
  const [showOpen, setShowOpen] = useState(false);
  const [toolbarStyles, setToolbarStyles] = useState({});

  const { GetAll } = useArticle();
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    GetAll((data) => {
      setArticles(data);
    });
  }, [GetAll]);

  //todo: dodanie ikon tam gdzie można
  useEffect(() => {
    updateClickHandler("Plik", "new-article", () => {
      resetArticle();
      navigate("/console/editor/edit");
    });

    updateClickHandler("Plik", "open-article", () => {
      setShowOpen(true);
    });

    updateClickHandler("Plik", "save-article", () => {
      setShowSave(true);
    });

    updateClickHandler("Plik", "exit", () => {
      resetArticle();
      navigate("/console/editor/");
    });

    //todo: Dodanie wstawiania paragrafów i innych elementów
    updateClickHandler("Edytuj", "insert-new-line", () => {
      const newArticle = article;
      newArticle.content += "<br/>";

      setArticle(newArticle);
    });

    updateClickHandler("Edytuj", "copy-article-content", async () => {
      await navigator.clipboard.writeText(article.content);
    });

    updateClickHandler("Edytuj", "clean-article-content", () => {
      const cleanedArticle = article;
      cleanedArticle.content = "";
      setArticle(cleanedArticle);
    });
  }, [article, navigate, resetArticle, setArticle, updateClickHandler]);

  function fullscreenClickHandler() {
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
  }

  return (
    <>
      {showOpen && <Open setShowOpen={setShowOpen} articles={articles} />}
      {showSave && <Save setShowSave={setShowSave} />}
      <nav className={classes.toolbar} style={toolbarStyles}>
        {width > 800 ? (
          <ToolbarOptions options={options} />
        ) : (
          <ToolbarOptionsNested options={options} />
        )}
        <button
          type="button"
          className={`${classes["toolbar-fullscreen"]} ${classes.option}`}
          title={!fullscreen ? "Pełny ekran" : "Zamknij pełny ekran"}
          onClick={fullscreenClickHandler}
        >
          <FontAwesomeIcon
            icon={!fullscreen ? solid("maximize") : solid("minimize")}
          />
        </button>
      </nav>
    </>
  );
}
