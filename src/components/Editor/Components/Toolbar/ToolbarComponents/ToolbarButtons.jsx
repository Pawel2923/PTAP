import {DropdownOption} from "/src/components/UI/Dropdown.jsx";
import PropTypes from "prop-types";

export default function ToolbarButtons({buttonsList}) {
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
        >
            {button.children}
        </DropdownOption>
    ));
}

ToolbarButtons.propTypes = {
    buttonsList: PropTypes.arrayOf(PropTypes.shape({}))
}
