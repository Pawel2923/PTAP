import { createContext } from "react";

const ConsoleContext = createContext({
  currentPage: "home",
  setCurrentPage: () => {},
});

export default ConsoleContext;
