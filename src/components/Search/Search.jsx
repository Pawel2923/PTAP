import {
  useState,
  useRef,
  useEffect,
  useContext,
  useCallback,
  memo,
} from "react";
import ReactDOM from "react-dom";
import { Link, useLocation } from "react-router-dom";

import BackArrow from "../UI/BackArrow/BackArrow.jsx";
import articleList from "../../data/ArticleList.json";
import SearchContext from "../../store/search-context";
import PageContext from "../../store/page-context";
import icons from "../../icons/symbol-defs.svg";
import classes from "./Search.module.css";
import inputClasses from "../UI/Input/Input.module.css";

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
          isFound = value
            .toString()
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        }
      });

      return isFound;
    });
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      setShowPlaceholder(false);
      searchHeader.current.innerText = "Pasujące artykuły";
    } else {
      searchHeader.current.innerText = "Wszystkie artykuły";
      setShowPlaceholder(true);
    }

    setArticles(filterArticles());
  }, [searchTerm, filterArticles]);

  useEffect(() => {
    searchInput.current.focus();
  }, []);

  useEffect(() => {
    const handleKeyDown = (ev) => {
      if (ev.key === "Escape" || ev.keyCode === 27) {
        setSearchTerm("");
        setIsShown(false);
        setCurrentPage(location.pathname);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [location.pathname, setCurrentPage, setIsShown]);

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

  const linkClickHandler = () => {
    setSearchTerm("");
    setIsShown(false);
  };

  const search = (
    <nav className={classes.search} aria-label="Wyszukiwarka">
      <div className={classes["search-container"]}>
        <BackArrow
          className={classes.back}
          enableText={false}
          notLink={true}
          onClick={backArrowClickHandler}
        />
        <form onReset={formResetHandler} onSubmit={formSubmitHandler}>
          <input
            type="search"
            ref={searchInput}
            className={inputClasses.input}
            id="search"
            aria-label="Przeszukaj wiki"
            value={searchTerm}
            onInput={searchInputHandler}
          />
          {showPlaceholder && (
            <label
              htmlFor="search"
              className={classes.placeholder}
            >
              <svg className="icon icon-magnifying_glass" aria-hidden="true">
                <use xlinkHref={`${icons}#icon-magnifying_glass`}></use>
              </svg>{" "}
              <span>Przeszukaj wiki</span>
            </label>
          )}
          {!showPlaceholder && (
            <button
              type="reset"
              className={classes.reset}
              aria-label="Wyczyść wyszukiwanie"
            >
              <svg className="icon icon-circle_xmark" aria-hidden="true">
                <use xlinkHref={`${icons}#icon-circle_xmark`}></use>
              </svg>
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

export const SearchPlaceholder = memo(() => {
  const { setIsShown } = useContext(SearchContext);
  const { setCurrentPage } = useContext(PageContext);

  const clickHandler = () => {
    setIsShown(true);
    setCurrentPage("/szukaj");
  };

  return (
    <button
      type="button"
      onClick={clickHandler}
      className={classes["search-placeholder"]}
      aria-label="Przeszukaj wiki"
    >
      <div className={classes.placeholder}>
        <svg className="icon icon-magnifying_glass" aria-hidden="true">
          <use xlinkHref={`${icons}#icon-magnifying_glass`}></use>
        </svg>{" "}
        <span>Przeszukaj wiki</span>
      </div>
    </button>
  );
});

SearchPlaceholder.displayName = "SearchPlaceholder";
