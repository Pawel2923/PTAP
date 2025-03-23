import { useCallback, useReducer } from "react";
import defaultOptions from "../components/Toolbar/assets/optionsConfig.json";

function findParent(state, action) {
  if (!Array.isArray(state)) {
    throw new Error("State is not an array!");
  }

  const compareTitles = (element) =>
    element.title.toLowerCase() === action.parent.toLowerCase();

  const parentIndex = state.findIndex(compareTitles);

  if (parentIndex < 0) {
    throw new Error("Nie znaleziono takiego menu");
  }

  return parentIndex;
}

function optionsReducer(state, action) {
  if (action.type === "disable_button") {
    if (!action.parent || !action.option) {
      throw new Error("Niepoprawny format");
    }

    const parentIndex = findParent(state, action);

    let newState = state;
    newState[parentIndex].subOptions[action.option].disabled = true;

    return newState;
  }

  if (action.type === "enable_button") {
    if (!action.parent || !action.option) {
      throw new Error("Niepoprawny format");
    }

    const parentIndex = findParent(state, action);

    let newState = state;
    newState[parentIndex].subOptions[action.option].disabled = false;

    return newState;
  }

  if (action.type === "update_click_handler") {
    if (!action.parent || !action.option) {
      throw new Error("Niepoprawny format");
    }

    const parentIndex = findParent(state, action);

    let newState = state;
    newState[parentIndex].subOptions[action.option].onClick = action.newHandler;

    return newState;
  }

  return state;
}

export default function useToolbarOptions() {
  const [options, updateOptions] = useReducer(optionsReducer, defaultOptions);

  const disableButton = useCallback((parent, option) => {
    updateOptions({
      type: "disable_button",
      parent,
      option,
    });
  }, []);

  const enableButton = useCallback((parent, option) => {
    updateOptions({
      type: "enable_button",
      parent,
      option,
    });
  }, []);

  const updateClickHandler = useCallback((parent, option, newHandler) => {
    updateOptions({
      type: "update_click_handler",
      parent,
      option,
      newHandler,
    });
  }, []);

  return {
    options,
    updateOptions,
    disableButton,
    enableButton,
    updateClickHandler,
  };
}
