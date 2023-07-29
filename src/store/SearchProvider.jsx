import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import SearchContext from "./search-context";

const SearchProvider = ({ children }) => {
  const [isShown, setIsShown] = useState();
  const value = { isShown, setIsShown };

  useEffect(() => {
    if (isShown) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.removeAttribute("style");
    }
  }, [isShown]);

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

SearchProvider.propTypes = {
  children: PropTypes.any,
};

export default SearchProvider;
