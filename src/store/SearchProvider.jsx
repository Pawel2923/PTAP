import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import SearchContext from "./search-context";

const WidthProvider = ({ children }) => {
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

WidthProvider.propTypes = {
  children: PropTypes.any,
};

export default WidthProvider;
