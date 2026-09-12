import { createContext } from "react";

const SearchContext = createContext({
  isShown: false,
  setIsShown: () => {},
  openSearch: () => {},
  closeSearch: () => {},
});

export default SearchContext;
