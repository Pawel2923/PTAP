import { Link } from "react-router-dom";
import ArticleList from "../../data/ArticleList.json";

const Intro = () => {
  let length = ArticleList.length;
  const articles = ArticleList.slice(length - 3, length)
    .reverse()
    .map((item, key) => (
      <div key={key}>
        <Link to={item.address}>
          {item.name}
        </Link>
      </div>
    ));

  return (
    <section className="section">
      <header>
        <h2>Wiki</h2>
      </header>
      <p>Najnowsze artykuły</p>
      {articles}
    </section>
  );
};

export default Intro;
