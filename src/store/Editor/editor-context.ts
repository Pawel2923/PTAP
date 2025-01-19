import { createContext } from "react";
import {DefaultEditorContext} from "./DefaultEditorContext";

export const EditorContext = createContext<DefaultEditorContext>(new DefaultEditorContext());
