import { useState, useEffect } from "react";

import PageContext from "./page-context";

const WidthProvider = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [currentPage, setCurrentPage] = useState(document.location.pathname);
  const value = { width, height, currentPage, setCurrentPage };

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <PageContext.Provider value={value}>{props.children}</PageContext.Provider>
  );
};

export default WidthProvider;
