import { useState, useEffect, useMemo, useCallback } from "react";
import PropTypes from "prop-types";

import SearchContext from "./search-context";

const SearchProvider = ({ children }) => {
  const [isShown, setIsShown] = useState(false);

  const openSearch = useCallback(() => setIsShown(true), []);
  const closeSearch = useCallback(() => setIsShown(false), []);

  const value = useMemo(
    () => ({
      isShown: Boolean(isShown),
      setIsShown,
      openSearch,
      closeSearch,
    }),
    [isShown, openSearch, closeSearch]
  );

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (isShown) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isShown]);

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

SearchProvider.propTypes = {
  children: PropTypes.node,
};

export default SearchProvider;
