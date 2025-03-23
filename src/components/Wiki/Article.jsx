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

  return article ? (
    <>
      <header>
        <h2>{article?.title}</h2>
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
