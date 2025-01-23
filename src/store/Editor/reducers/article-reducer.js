import {Article} from "../DefaultEditorContext.js";

export const articleActionTypes = Object.freeze({
    UPDATE: Symbol("update"),
    RESET: Symbol("reset"),
});

/**
 * @typedef ReducerAction
 * @property {symbol} type
 * @property {Article | undefined} payload
 */

/**
 * @param {Article} state
 * @param {ReducerAction} action
 * @returns {Article}
 */
export default function articleReducer(state, action) {
    if (!action.payload) {
        return state;
    }

    const mappedAction = actionMap.get(action.type);
    return mappedAction ? mappedAction(action.payload) : state;
}

/**
 * @param {Article} payload
 * @returns {Article}
 */
function updateArticle(payload) {
    return payload;
}

function resetArticle() {
    return new Article;
}

const actionMap = new Map([
    [articleActionTypes.UPDATE, updateArticle],
    [articleActionTypes.RESET, resetArticle],
]);
