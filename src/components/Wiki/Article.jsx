import { StringToJSX } from "../../scripts/StringToJSX";
import { useArticle } from "../Editor/hooks/use-article.jsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Article = () => {
  const { articleAddress } = useParams();
  const { Open } = useArticle();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const unsubscribe = Open(articleAddress, (data) => {
      setArticle(data);
    });

    return () => unsubscribe?.();
  }, [Open, articleAddress]);

  useEffect(() => {
    if (article?.title) {
      document.title = `${article.title} | Wiki | PTAP`;
    }
  }, [article?.title]);

  return article ? (
    <>
      <header>
        <h1>{article?.title}</h1>
      </header>
      <div className="content">
        <StringToJSX domString={article?.content} />
      </div>
    </>
  ) : (
    <p>Ładowanie...</p>
  );
};

export default Article;
