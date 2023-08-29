import { useState } from "react";
import PropTypes from "prop-types";
import DropdownContext from "./dropdown-context-";

const DropdownProvider = ({ children }) => {
    const [isMenuShown, setIsMenuShown] = useState(false);

    const value = {isMenuShown, setIsMenuShown};

    return (
        <DropdownContext.Provider value={value}>
            {children}
        </DropdownContext.Provider>
    );
};

DropdownProvider.propTypes = {
    children: PropTypes.any,
}

export default DropdownProvider;