import {DropdownOption} from "/src/components/UI/DropdownOption.jsx";
import PropTypes from "prop-types";

export default function ToolbarButtons({buttonsList, setIsMenuShown}) {
    if (!buttonsList) {
        return <p>
            Wystąpił błąd
        </p>
    }

    return buttonsList.map((button, key) => (
        <DropdownOption
            key={key}
            id={button.id}
            onClick={button.onClick}
            disabled={button.disabled}
            setIsMenuShown={setIsMenuShown}
        >
            {button.children}
        </DropdownOption>
    ));
}

ToolbarButtons.propTypes = {
    buttonsList: PropTypes.arrayOf(PropTypes.shape({})),
    setIsMenuShown: PropTypes.func,
}
