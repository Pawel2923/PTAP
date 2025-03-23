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
 * @property {((newArticle: Article) => void) | undefined} setArticle
 * @property {((text: string) => void) | undefined} setArticleContent
 * @property {(() => void) | undefined} resetArticle
 * @property {React.Dispatch<React.SetStateAction<object>> | undefined} setEditorStyles
 */
export class DefaultEditorContext {
  article = undefined;
  editorStyles = undefined;
  setArticle = undefined;
  setArticleContent = undefined;
  resetArticle = undefined;
  setEditorStyles = undefined;
}
