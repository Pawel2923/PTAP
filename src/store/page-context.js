import { createContext } from "react";

const PageContext = createContext({
  width: 0,
  height: 0,
  currentPage: "/",
  setCurrentPage: () => {}
});

export default PageContext;
