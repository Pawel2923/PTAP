import React, { useState, useRef, useEffect, useContext, useCallback } from "react";
import ReactDOM from "react-dom";
import { Link, useLocation } from "react-router-dom";

import BackArrow from "../UI/BackArrow";
import articleList from "../data/ArticleList.json";
import SearchContext from "../../store/search-context";
import classes from "./Search.module.css";
import PageContext from "../../store/page-context";

export const Search = () => {
  const location = useLocation();
  const searchInput = useRef();
  const searchHeader = useRef();
  const [searchTerm, setSearchTerm] = useState("");
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [articles, setArticles] = useState(articleList);
  const { setIsShown } = useContext(SearchContext);
  const { setCurrentPage } = useContext(PageContext);

  const filterArticles = useCallback(() => {
    return articleList.filter((user) => {
      let isFound = false;
      Object.values(user).forEach((value) => {
        if (!isFound) {
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
            ? (isFound = true)
            : (isFound = false);
        }
      });
  
      return isFound;
    });
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      setShowPlaceholder(false);
      searchHeader.current.innerText = "Pasujące artykuły"
    } else {
      searchHeader.current.innerText = "Wszystkie artykuły"
      setShowPlaceholder(true);
    }

    setArticles(filterArticles());
  }, [searchTerm, filterArticles]);

  useEffect(() => {
    searchInput.current.focus();
  }, []);

  const placeholderClickHandler = () => {
    searchInput.current.focus();
  };

  const searchInputHandler = (ev) => {
    setSearchTerm(ev.target.value);
  };

  const formResetHandler = (ev) => {
    setSearchTerm("");
    ev.target.firstElementChild.focus();
  };

  const formSubmitHandler = (ev) => {
    ev.preventDefault();
  };

  const backArrowClickHandler = () => {
    setSearchTerm("");
    setIsShown(false);
    setCurrentPage(location.pathname);
  };

  const linkClickHandler = (ev) => {
    setIsShown(false);
    setCurrentPage(ev.currentTarget.getAttribute("href"));
  };

  const search = (
    <nav className={classes.search}>
      <div className={classes["search-container"]}>
        <BackArrow
          className={classes.back}
          enableText="false"
          notLink="true"
          onClick={backArrowClickHandler}
        />
        <form onReset={formResetHandler} onSubmit={formSubmitHandler}>
          <input
            type="search"
            ref={searchInput}
            id="search"
            value={searchTerm}
            onInput={searchInputHandler}
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
          <h2 ref={searchHeader}>Wszystkie artykuły</h2>
          {articles.map((item, key) => (
            <Link key={key} to={item.address} onClick={linkClickHandler}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );

  return ReactDOM.createPortal(search, document.getElementById("overlays"));
};

export const SearchPlaceholder = React.memo(() => {
  const { setIsShown } = useContext(SearchContext);
  const { setCurrentPage } = useContext(PageContext);

  const clickHandler = () => {
    setIsShown(true);
    setCurrentPage("/szukaj")
  };

  return (
    <button
      type="button"
      onClick={clickHandler}
      className={classes["search-placeholder"]}
    >
      <div className={classes.placeholder}>
        <i className="fa-solid fa-magnifying-glass"></i> Przeszukaj wiki
      </div>
    </button>
  );
});