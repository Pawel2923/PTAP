import { useState, useEffect } from "react";

import SearchContext from "./search-context";

const WidthProvider = (props) => {
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
    <SearchContext.Provider value={value}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default WidthProvider;
