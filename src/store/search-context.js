import { createContext } from "react";

const SearchContext = createContext({
    isShown: false,
    setIsShown: () => {}
});

export default SearchContext;