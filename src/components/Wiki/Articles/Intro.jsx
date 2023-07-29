import { Link } from "react-router-dom";
import ArticleList from "../../data/ArticleList.json";
import classes from "./Article.module.css";
import { Fragment } from "react";

const Intro = () => {
  let length = ArticleList.length;
  const articles = ArticleList.slice(length - 3, length)
    .reverse()
    .map((item, key) => (
      <div key={key}>
        <Link to={item.address}>{item.name}</Link>
      </div>
    ));

  return (
    <Fragment>
      <header>
        <h2>Wiki</h2>
      </header>
      <div className={classes.content}>
        <h4>Zobacz najnowsze artykuły</h4>
        {articles}
        <h4>Lista wszystkich artykułów</h4>
        {ArticleList.slice(1, length - 3).map((item, key) => (
          <div key={key}>
            <Link to={item.address}>{item.name}</Link>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Intro;
