import {
  useState,
  useRef,
  useEffect,
  useContext,
  useCallback,
  useMemo,
  memo,
} from "react";
import ReactDOM from "react-dom";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

import BackArrow from "../UI/BackArrow/BackArrow.jsx";
import articleList from "../../data/ArticleList.json";
import SearchContext from "../../store/search-context";
import PageContext from "../../store/page-context";
import icons from "../../icons/symbol-defs.svg";
import classes from "./Search.module.css";
import inputClasses from "../UI/Input/Input.module.css";

const matchesQuery = (value, query) => {
  if (value == null) return false;
  if (typeof value === "string") {
    return value.toLowerCase().includes(query);
  }
  if (typeof value === "number") {
    return value.toString().includes(query);
  }
  if (Array.isArray(value)) {
    return value.some((item) => matchesQuery(item, query));
  }
  if (typeof value === "object") {
    return Object.values(value).some((val) => matchesQuery(val, query));
  }
  return false;
};

const getPolishArticlesWord = (count) => {
  if (count === 1) return "artykuł";
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) {
    return "artykuły";
  }
  return "artykułów";
};

export const Search = () => {
  const location = useLocation();
  const dialogRef = useRef(null);
  const searchInput = useRef(null);
  const resultsRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { setIsShown } = useContext(SearchContext);
  const { setCurrentPage } = useContext(PageContext);

  const trimmedSearchTerm = searchTerm.trim().toLowerCase();

  const filteredArticles = useMemo(() => {
    if (!trimmedSearchTerm) {
      return articleList;
    }
    return articleList.filter((article) =>
      matchesQuery(article, trimmedSearchTerm)
    );
  }, [trimmedSearchTerm]);

  const handleClose = useCallback(() => {
    setSearchTerm("");
    setIsShown(false);
    setCurrentPage(location.pathname);
  }, [location.pathname, setCurrentPage, setIsShown]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const previouslyFocused = document.activeElement;

    if (typeof dialog.showModal === "function" && !dialog.open) {
      dialog.showModal();
    }

    searchInput.current?.focus();

    const handleClick = (event) => {
      if (event.target === dialog) {
        handleClose();
      }
    };

    dialog.addEventListener("click", handleClick);

    return () => {
      dialog.removeEventListener("click", handleClick);

      if (typeof dialog.close === "function" && dialog.open) {
        dialog.close();
      }
      if (previouslyFocused && typeof previouslyFocused.focus === "function") {
        previouslyFocused.focus();
      }
    };
  }, [handleClose]);

  const handleCancel = (event) => {
    event.preventDefault();
    handleClose();
  };

  const searchInputHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  const clearSearchHandler = () => {
    setSearchTerm("");
    searchInput.current?.focus();
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  const linkClickHandler = () => {
    setSearchTerm("");
    setIsShown(false);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      const firstLink = resultsRef.current?.querySelector("a");
      if (firstLink) {
        event.preventDefault();
        firstLink.focus();
      }
    }
  };

  const handleResultKeyDown = (event, index) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      const links = resultsRef.current?.querySelectorAll("a");
      if (links && links[index + 1]) {
        links[index + 1].focus();
      }
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      const links = resultsRef.current?.querySelectorAll("a");
      if (links && links[index - 1]) {
        links[index - 1].focus();
      } else {
        searchInput.current?.focus();
      }
    }
  };

  const isSearching = trimmedSearchTerm !== "";
  const headingText = isSearching ? "Pasujące artykuły" : "Wszystkie artykuły";

  let liveRegionText = "";
  if (isSearching) {
    if (filteredArticles.length === 0) {
      liveRegionText = `Brak wyników dla frazy: ${searchTerm.trim()}.`;
    } else {
      liveRegionText = `Znaleziono ${filteredArticles.length} ${getPolishArticlesWord(
        filteredArticles.length
      )}.`;
    }
  }

  const overlaysRoot =
    typeof document !== "undefined"
      ? document.getElementById("overlays") || document.body
      : null;

  if (!overlaysRoot) {
    return null;
  }

  const search = (
    <dialog
      ref={dialogRef}
      className={classes.search}
      aria-label="Wyszukiwarka artykułów"
      onCancel={handleCancel}
    >
      <div className={classes["search-container"]}>
        <BackArrow
          className={classes.back}
          enableText={false}
          notLink={true}
          onClick={handleClose}
          text="Zamknij wyszukiwarkę"
        />
        <form
          role="search"
          className={classes["search-form"]}
          onSubmit={formSubmitHandler}
          aria-label="Wyszukiwanie w wiki"
        >
          <label htmlFor="search-input" className={classes["sr-only"]}>
            Przeszukaj wiki
          </label>
          <div className={classes["input-wrapper"]}>
            <svg
              className={`icon icon-magnifying_glass ${classes["search-icon"]}`}
              aria-hidden="true"
              focusable="false"
            >
              <use xlinkHref={`${icons}#icon-magnifying_glass`}></use>
            </svg>
            <input
              type="search"
              ref={searchInput}
              className={classNames(inputClasses.input, classes.input)}
              id="search-input"
              placeholder="Przeszukaj wiki"
              value={searchTerm}
              onChange={searchInputHandler}
              onKeyDown={handleInputKeyDown}
              autoComplete="off"
              autoCapitalize="none"
              spellCheck="false"
            />
            {searchTerm.length > 0 && (
              <button
                type="button"
                className={classes.reset}
                onClick={clearSearchHandler}
                aria-label="Wyczyść pole wyszukiwania"
              >
                <svg
                  className="icon icon-circle_xmark"
                  aria-hidden="true"
                  focusable="false"
                >
                  <use xlinkHref={`${icons}#icon-circle_xmark`}></use>
                </svg>
              </button>
            )}
          </div>
        </form>
      </div>
      <div className={classes.content} ref={resultsRef}>
        <div
          className={classes["sr-only"]}
          aria-live="polite"
          aria-atomic="true"
        >
          {liveRegionText}
        </div>
        <h2 id="search-results-heading">{headingText}</h2>
        {filteredArticles.length === 0 ? (
          <p className={classes["no-results"]} role="status">
            Nie znaleziono artykułów dla frazy &bdquo;{searchTerm.trim()}
            &rdquo;.
          </p>
        ) : (
          <ul
            className={classes["results-list"]}
            aria-labelledby="search-results-heading"
          >
            {filteredArticles.map((item, index) => (
              <li
                key={item.address || item.name}
                className={classes["result-item"]}
              >
                <Link
                  to={item.address}
                  onClick={linkClickHandler}
                  className={classes["result-link"]}
                  onKeyDown={(e) => handleResultKeyDown(e, index)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </dialog>
  );

  return ReactDOM.createPortal(search, overlaysRoot);
};

export const SearchPlaceholder = memo(() => {
  const { setIsShown, isShown, openSearch } = useContext(SearchContext);
  const { setCurrentPage } = useContext(PageContext);

  const clickHandler = () => {
    if (openSearch) {
      openSearch();
    } else {
      setIsShown(true);
    }
    setCurrentPage("/szukaj");
  };

  return (
    <button
      type="button"
      onClick={clickHandler}
      className={classes["search-placeholder"]}
      aria-label="Przeszukaj wiki"
      aria-haspopup="dialog"
      aria-expanded={Boolean(isShown)}
    >
      <span className={classes.placeholder}>
        <svg
          className="icon icon-magnifying_glass"
          aria-hidden="true"
          focusable="false"
        >
          <use xlinkHref={`${icons}#icon-magnifying_glass`}></use>
        </svg>{" "}
        <span>Przeszukaj wiki</span>
      </span>
    </button>
  );
});

SearchPlaceholder.displayName = "SearchPlaceholder";
