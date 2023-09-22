import { useEffect } from "react";
import PropTypes from "prop-types";

const All = ({ setMainHeader }) => {
    useEffect(() => {
        setMainHeader("Wszystkie artykuły");
    }, [setMainHeader]);

    return (
        <div>
            Lista wszystkich artykuły
        </div>
    );
};

All.propTypes = {
    setMainHeader: PropTypes.func,
};

export default All;