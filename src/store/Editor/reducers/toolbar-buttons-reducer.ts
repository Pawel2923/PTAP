import {ToolbarButtons} from "../DefaultEditorContext";

export const toolbarButtonsActionTypes = Object.freeze({
    ENABLE: Symbol("enable"),
    DISABLE: Symbol("disable"),
});

type ActionPayload = {
    buttonName: string;
    subButtonNames: string[];
};

type ReducerAction = {
    type: symbol,
    payload?: ActionPayload,
};

export default function toolbarButtonsReducer(state: ToolbarButtons, action: ReducerAction): ToolbarButtons {
    if (!action.payload) {
        return state;
    }

    const mappedAction = actionMap.get(action.type);
    return mappedAction ? mappedAction(state, action.payload) : state;
}

function enableToolbarButton(state: ToolbarButtons, { buttonName, subButtonNames }: ActionPayload) {
    const button = state[buttonName as keyof ToolbarButtons];
    if (!button) {
        throw new Error(`Unknown toolbarButton ${buttonName}`);
    }

    subButtonNames.forEach(subButtonName => button.set(subButtonName, true));
    return state;
}

function disableToolbarButton(state: ToolbarButtons, { buttonName, subButtonNames }: ActionPayload) {
    const button = state[buttonName as keyof ToolbarButtons];
    if (!button) {
        throw new Error(`Unknown toolbarButton ${buttonName}`);
    }

    subButtonNames.forEach(subButtonName => button.set(subButtonName, false));
    return state;
}

const actionMap = new Map([
    [toolbarButtonsActionTypes.ENABLE, enableToolbarButton],
    [toolbarButtonsActionTypes.DISABLE, disableToolbarButton],
]);
