export const toolbarButtonsActionTypes = Object.freeze({
    ENABLE: Symbol("enable"),
    DISABLE: Symbol("disable"),
});

/**
 * @typedef ActionPayload
 * @property {string} buttonName
 * @property {string[]} subButtonNames
 */

/**
 * @typedef ReducerAction
 * @property {symbol} type
 * @property {ActionPayload | undefined} payload
 */

/**
 * @param {ToolbarButtons} state
 * @param {ReducerAction} action
 * @returns {ToolbarButtons}
 */
export default function toolbarButtonsReducer(state, action) {
    if (!action.payload) {
        return state;
    }

    const mappedAction = actionMap.get(action.type);
    return mappedAction ? mappedAction(state, action.payload) : state;
}

/**
 * @param {ToolbarButtons} state
 * @param {ActionPayload} payload
 * @returns {ToolbarButtons}
 */
function enableToolbarButton(state, payload) {
    const {buttonName, subButtonNames} = payload;

    const button = state[buttonName];

    if (button && Array.isArray(subButtonNames)) {
        subButtonNames.forEach(subButtonName => button.set(subButtonName, true));
    }

    return state;
}

/**
 * @param {ToolbarButtons} state
 * @param {ActionPayload} payload
 * @returns {ToolbarButtons}
 */
function disableToolbarButton(state, payload) {
    const {buttonName, subButtonNames} = payload;

    const button = state[buttonName];

    if (button && Array.isArray(subButtonNames)) {
        subButtonNames.forEach(subButtonName => button.set(subButtonName, false));
    }

    return state;
}

const actionMap = new Map([
    [toolbarButtonsActionTypes.ENABLE, enableToolbarButton],
    [toolbarButtonsActionTypes.DISABLE, disableToolbarButton],
]);
