import {Article} from "../DefaultEditorContext.js";

export const articleActionTypes = Object.freeze({
    UPDATE: Symbol("update"),
    RESET: Symbol("reset"),
});

type ReducerAction = {
    type: symbol,
    payload?: Article;
};

export default function articleReducer(state: Article, action: ReducerAction): Article {
    if (!action.payload) {
        return state;
    }

    const mappedAction = actionMap.get(action.type);
    return mappedAction ? mappedAction(action.payload) : state;
}

function updateArticle(payload: Article) {
    return payload;
}

function resetArticle() {
    return new Article;
}

const actionMap = new Map([
    [articleActionTypes.UPDATE, updateArticle],
    [articleActionTypes.RESET, resetArticle],
]);
