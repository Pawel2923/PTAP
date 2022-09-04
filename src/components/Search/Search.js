import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import classes from "./Search.module.css";

const Search = () => {
  const location = useLocation();
  const searchInput = useRef();
  const [searchValue, setSearchValue] = useState("");
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    if (searchValue.trim() !== "") {
      setShowPlaceholder(false);
    } else {
      setShowPlaceholder(true);
    }
  }, [searchValue]);

  useEffect(() => {
    if (!showSearch) {
      document.querySelector(`.${classes.search}`).style.gridTemplateColumns =
        "1fr";
    } else {
      document.querySelector(`.${classes.search}`).style.gridTemplateColumns =
        "min-content 1fr";
    }
  }, [showSearch]);

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    const target = document.getElementById(hash);

    if (target) {
      const posY = target.clientTop;

      window.scrollTo({
        top: posY,
        left: 0,
      });
    }
  }, [location.hash]);

  if (showSearch) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }

  const placeholderClickHandler = () => {
    searchInput.current.focus();
  };

  const searchChangeHandler = (ev) => {
    setSearchValue(ev.target.value);
  };

  const searchFocusHandler = () => {
    setShowSearch(true);
  };

  const backClickHandler = () => {
    document.querySelector(`.${classes.overlay}`).style.animationName =
      classes.slideOut;

    setTimeout(() => {
      setSearchValue("");
      setShowSearch(false);
    }, 200);
  };

  const linkClickHandler = (ev) => {
    const hash = ev.target.hash.replace("#", "");
    const target = document.getElementById(hash);

    if (target) {
      const posY = target.clientTop;

      window.scrollTo({
        top: posY,
        left: 0,
      });

      backClickHandler();
    }
  };

  const formResetHandler = () => {
    setSearchValue("");
  };

  return (
    <div className={classes.search}>
      {showSearch && (
        <div className={classes.back} onClick={backClickHandler}>
          <i className="fa-solid fa-arrow-left"></i>
        </div>
      )}
      <form onReset={formResetHandler}>
        <input
          type="search"
          ref={searchInput}
          value={searchValue}
          onChange={searchChangeHandler}
          onFocus={searchFocusHandler}
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
      {showSearch && (
        <div className={classes.overlay}>
          <div>
            <ol>
              <li>
                <p>
                  <Link to="#heli" onClick={linkClickHandler}>
                    Śmigłowce
                  </Link>
                </p>
                <ul>
                  <li>
                    <p>Typy śmigłowców:</p>
                    <ul>
                      <li>Lekkie</li>
                      <li>Średnie</li>
                      <li>Ciężkie</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
