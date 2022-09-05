import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import classes from "./Search.module.css";

const searchList = [
  {
    name: "Śmigłowce",
    address: "/wiki/heli-light",
  },
  {
    name: "Samoloty",
    address: "/planes",
  },
];

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
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

  const placeholderClickHandler = () => {
    searchInput.current.focus();
  };

  const searchChangeHandler = (ev) => {
    setSearchQuery(ev.target.value);
  };

  const backClickHandler = () => {
    navigate(-1);
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
    setSearchQuery("");
  };

  return (
    <div className={classes.search}>
      <div className={classes.back} onClick={backClickHandler}>
        <i className="fa-solid fa-arrow-left"></i>
      </div>
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
        {searchList.map((item, index) => (
          <Link key={index} to={item.address}>{item.name}</Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
