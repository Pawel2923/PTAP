import classes from "./EditorContent.module.css";
import PropTypes from "prop-types";

export default function LineNumbers({articleLength}) {
    const lineNumbers = Array.from({length: articleLength}, (_, key) => key);

    return <div className={classes["line-numbers"]}>
        {lineNumbers.length === 0
            ? <span></span>
            : lineNumbers.map((_, index) => (
            <span key={index}></span>
        ))}
    </div>;
}

LineNumbers.propTypes = {
    articleLength: PropTypes.number.isRequired,
};
