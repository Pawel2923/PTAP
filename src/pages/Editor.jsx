import { useState, useContext, useEffect, useRef } from "react";
import Menu from "../components/Editor/Components/Menu/Menu";
import Main from "../components/Editor/Main";
import EditorProvider from "../store/Editor/EditorProvider.jsx";
import PageContext from "../store/page-context";
import classes from "./Editor.module.css";

const Editor = () => {
	const menuRef = useRef(null);
	const { width } = useContext(PageContext);
	const [spacerStyles, setSpacerStyles] = useState({});
	const [isMenuExpanded, setIsMenuExpanded] = useState(false);

	useEffect(() => {
		const menuWidth = menuRef.current.clientWidth;
		if (width <= 740 && !isMenuExpanded) {
			setSpacerStyles({ width: menuWidth, height: "100vh" });
		}
	}, [width, isMenuExpanded]);

	return (
		<>
			<EditorProvider>
				<div
					className={`${
						!isMenuExpanded ? classes["shrink-menu"] : ""
					} ${classes.editor}`}
				>
					{width <= 740 && <div style={spacerStyles}></div>}
					<Menu ref={menuRef} setIsMenuExpanded={setIsMenuExpanded} />
					<Main />
				</div>
			</EditorProvider>
		</>
	);
};

export default Editor;
