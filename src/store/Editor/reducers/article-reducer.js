import { Article } from "../DefaultEditorContext.js";

export const articleActionTypes = Object.freeze({
  UPDATE: Symbol("update"),
  UPDATE_TEXT: Symbol("updateText"),
  RESET: Symbol("reset"),
});

/**
 * @typedef ReducerAction
 * @property {symbol} type
 * @property {Article | string | undefined} payload
 */

/**
 * @param {Article} state
 * @param {ReducerAction} action
 * @returns {Article}
 */
export default function articleReducer(state, action) {
  if (action.type === articleActionTypes.UPDATE_TEXT) {
    return updateArticleContent(state, action.payload);
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

/**
 * @param {Article} state
 * @param {string} payload
 * @returns {Article}
 */
function updateArticleContent(state, payload) {
  return { ...state, content: payload };
}

function resetArticle() {
  return new Article();
}

const actionMap = new Map([
  [articleActionTypes.UPDATE, updateArticle],
  [articleActionTypes.RESET, resetArticle],
]);
