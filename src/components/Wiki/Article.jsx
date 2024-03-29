import PropTypes from "prop-types";
import { StringToJSX } from "../../scripts/StringToJSX";

const Article = ({item}) => {
    return (item.content && item.name) && (
        <>
            <header>
                <h2>{item.name}</h2>
            </header>
            <div className="content">
                <StringToJSX domString={item.content} />
            </div>
        </>
    );
};

Article.propTypes = {
    item: PropTypes.any,
};

export default Article;