import { useEffect } from "react";
import PropTypes from "prop-types";

const Editor = ({ setMainHeader }) => {
    useEffect(() => {
        setMainHeader("Edytor artykułów");
    }, [setMainHeader]);

    return (
        <>
            <p>W budowie</p>
        </>
    );
};

Editor.propTypes = {
    setMainHeader: PropTypes.func,
};

export default Editor;
