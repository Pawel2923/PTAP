import { createContext } from "react";

const DropdownContext = createContext({
    isMenuShown: false,
    setIsMenuShown: () => {},
});

export default DropdownContext;
