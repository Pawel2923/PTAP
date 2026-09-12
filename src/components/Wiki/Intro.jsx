import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import useDatabase from "../../hooks/use-db";
import classes from "./Article.module.css";

const Intro = () => {
  const { data, response } = useDatabase();

  const latestArticles = useMemo(() => {
    if (!response.isSuccess || !data || !data.length) {
      return [];
    }
    const length = data.length;
    return data.slice(Math.max(0, length - 3), length).reverse();
  }, [data, response]);

  const allArticles = useMemo(() => {
    if (!response.isSuccess || !data || !data.length) {
      return [];
    }
    const length = data.length;
    return data.slice(1, Math.max(1, length - 3));
  }, [data, response]);

  return (
    <React.Fragment>
      <header>
        <h1>Wiki</h1>
      </header>
      <div className={classes.content}>
        <h2>Zobacz najnowsze artykuły</h2>
        <ul className={classes.articleList}>
          {latestArticles.map((item, key) => (
            <li key={item.address || key} className={classes.articleItem}>
              <Link to={item.address}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <h2>Lista wszystkich artykułów</h2>
        <ul className={classes.articleList}>
          {allArticles.map((item, key) => (
            <li key={item.address || key} className={classes.articleItem}>
              <Link to={item.address}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Intro;
