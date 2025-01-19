export class ToolbarButtons {
    file: SubButton | undefined;
    edit: SubButton | undefined;
}

export class DefaultEditorContext {
    page: string | undefined;
    article: Article | null | undefined;
    toolbarButtons: ToolbarButtons | undefined;
    setPage: ((page: string) => void) | undefined;
    setArticle: ((article: Article) => void) | undefined;
    resetArticle: (() => void) | undefined;
    disableToolbarButtons: ((buttonName: string, subButtonNames: string[]) => void) | undefined;
    enableToolbarButtons: ((buttonName: string, subButtonNames: string[]) => void) | undefined;
}

export class Article {
    address: string | undefined;
    title: string | undefined;
    content: string | undefined;
}

type SubButton = Map<string, boolean>;
