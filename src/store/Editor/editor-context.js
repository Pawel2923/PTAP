import { createContext } from "react";
import { DefaultEditorContext } from "./DefaultEditorContext";

export const EditorContext = createContext(new DefaultEditorContext());
