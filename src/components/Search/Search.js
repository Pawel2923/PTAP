import { useState, useRef, useEffect } from "react";

import classes from "./Search.module.css";

const Search = () => {
  const searchInput = useRef();
  const [searchValue, setSearchValue] = useState("");
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  useEffect(() => {
    if (searchValue.trim() !== "") {
      setShowPlaceholder(false);
    } else {
      setShowPlaceholder(true);
    }
  }, [searchValue]);

  const placeholderClickHandler = () => {
    searchInput.current.focus();
  };

  const searchChangeHandler = (ev) => {
    setSearchValue(ev.target.value);
  };

  const formResetHandler = () => {
    setSearchValue("");
  };

  return (
    <form className={classes.search} onReset={formResetHandler}>
      <input
        type="search"
        ref={searchInput}
        value={searchValue}
        onChange={searchChangeHandler}
      />
      {showPlaceholder && (
        <div className={classes.placeholder} onClick={placeholderClickHandler}>
          <i className="fa-solid fa-magnifying-glass"></i> Przeszukaj wiki
        </div>
      )}
      {!showPlaceholder && (
        <button type="reset" className={classes.reset}>
          <i className="fa-solid fa-circle-xmark"></i>
        </button>
      )}
    </form>
  );
};

export default Search;
