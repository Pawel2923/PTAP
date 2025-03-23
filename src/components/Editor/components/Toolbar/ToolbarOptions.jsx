import { Dropdown } from "../../../UI/Dropdown/Dropdown.jsx";
import { DropdownOption } from "../../../UI/Dropdown/DropdownOption.jsx";

import classes from "./Toolbar.module.css";
import PropTypes from "prop-types";
import { DropdownNested } from "../../../UI/Dropdown/DropdownNested.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export function ToolbarOptions({ options }) {
  return (
    <>
      {options.map((option, index) => (
        <Dropdown key={index} title={option.title} className={classes.option}>
          <SubOptions subOptions={option.subOptions} />
        </Dropdown>
      ))}
    </>
  );
}

ToolbarOptions.propTypes = {
  options: PropTypes.array,
};

export function ToolbarOptionsNested({ options }) {
  return (
    <>
      {options.map((option, index) => (
        <DropdownNested
          key={index}
          title={
            <>
              {option.title}
              <FontAwesomeIcon icon={solid("arrow-right")} />
            </>
          }
          className={classes.option}
        >
          <SubOptions subOptions={option.subOptions} />
        </DropdownNested>
      ))}
    </>
  );
}

ToolbarOptionsNested.propTypes = {
  options: PropTypes.array,
};

export function SubOptions({ subOptions, setIsMenuShown }) {
  return (
    <>
      {Object.entries(subOptions).map(([key, option]) => (
        <DropdownOption
          key={key}
          setIsMenuShown={setIsMenuShown}
          id={key}
          disabled={option.disabled}
          onClick={option.onClick}
        >
          {option.title}
        </DropdownOption>
      ))}
    </>
  );
}

SubOptions.propTypes = {
  subOptions: PropTypes.object,
  setIsMenuShown: PropTypes.func,
};
