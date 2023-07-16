import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import PageContext from "./page-context";

const WidthProvider = ({ children }) => {
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

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

WidthProvider.propTypes = {
  children: PropTypes.any
};

export default WidthProvider;
