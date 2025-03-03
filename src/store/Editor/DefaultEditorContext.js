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
 * @property {object | undefined} editorStyles
 * @property {((page: string) => void) | undefined} setPage
 * @property {((newArticle: Article) => void) | undefined} setArticle
 * @property {((text: string) => void) | undefined} setArticleContent
 * @property {(() => void) | undefined} resetArticle
 * @property {React.Dispatch<React.SetStateAction<object>> | undefined} setEditorStyles
 */
export class DefaultEditorContext {
  page = undefined;
  article = undefined;
  editorStyles = undefined;
  setPage = undefined;
  setArticle = undefined;
  setArticleContent = undefined;
  resetArticle = undefined;
  setEditorStyles = undefined;
}
