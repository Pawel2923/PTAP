import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import BackArrow from "../UI/BackArrow";
import articleList from "../data/ArticleList.json";
import classes from "./Search.module.css";

const Search = () => {
  const searchInput = useRef();
  const [searchQuery, setSearchQuery] = useState("");
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      setShowPlaceholder(false);
    } else {
      setShowPlaceholder(true);
    }
  }, [searchQuery]);

  useEffect(() => {
    searchInput.current.focus();
  }, []);

  const placeholderClickHandler = () => {
    searchInput.current.focus();
  };

  const searchChangeHandler = (ev) => {
    setSearchQuery(ev.target.value);
  };

  const formResetHandler = (ev) => {
    setSearchQuery("");
    ev.target.firstElementChild.focus();
  };

  return (
    <div className={classes.search}>
        <BackArrow className={classes.back} enableText="false" />
        <form onReset={formResetHandler}>
          <input
            type="search"
            ref={searchInput}
            value={searchQuery}
            onChange={searchChangeHandler}
          />
          {showPlaceholder && (
            <div
              className={classes.placeholder}
              onClick={placeholderClickHandler}
            >
              <i className="fa-solid fa-magnifying-glass"></i> Przeszukaj wiki
            </div>
          )}
          {!showPlaceholder && (
            <button type="reset" className={classes.reset}>
              <i className="fa-solid fa-circle-xmark"></i>
            </button>
          )}
        </form>
      <div className={classes.content}>
        {articleList.map((item, key) => (
          <Link key={key} to={item.address}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
