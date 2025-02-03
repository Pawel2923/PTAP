/**
 * @property {Map<string, boolean>} file
 * @property {Map<string, boolean>} edit
 */
export class ToolbarButtons {
    file = new Map([
        ["new", true],
        ["open", true],
        ["save", true],
        ["exit", true],
    ]);
    edit = new Map([
        ["newLine", true],
        ["copy", true],
        ["cleanCode", true],
    ]);
}

/**
 * @property {string | undefined} address
 * @property {string | undefined} title
 * @property {string | undefined} content
 */
export class Article {
    address = undefined;
    title = undefined;
    content = undefined;
}

/**
 * @property {string | undefined} page
 * @property {Article | null | undefined} article
 * @property {ToolbarButtons | undefined} toolbarButtons
 * @property {object | undefined} editorStyles
 * @property {((page: string) => void) | undefined} setPage
 * @property {((newArticle: Article) => void) | undefined} setArticle
 * @property {((text: string) => void) | undefined} setArticleContent
 * @property {(() => void) | undefined} resetArticle
 * @property {((buttonName: string, subButtonNames: string[]) => void) | undefined} disableToolbarButtons
 * @property {((buttonName: string, subButtonNames: string[]) => void) | undefined} enableToolbarButtons
 * @property {React.Dispatch<React.SetStateAction<object>> | undefined} setEditorStyles
 */
export class DefaultEditorContext {
    page = undefined;
    article = undefined;
    toolbarButtons = undefined;
    editorStyles = undefined;
    setPage = undefined;
    setArticle = undefined;
    setArticleContent = undefined;
    resetArticle = undefined;
    disableToolbarButtons = undefined;
    enableToolbarButtons = undefined;
    setEditorStyles = undefined;
}
