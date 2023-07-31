import { useState } from "react";
import PropTypes from "prop-types";

import ConsoleContext from "./console-context";

const ConsoleProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("home");
  const value = {
    currentPage,
    setCurrentPage,
  };

  return (
    <ConsoleContext.Provider value={value}>{children}</ConsoleContext.Provider>
  );
};

ConsoleProvider.propTypes = {
  children: PropTypes.any,
};

export default ConsoleProvider;
