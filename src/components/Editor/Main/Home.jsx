import { useEffect } from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const Home = ({ setMainHeader }) => {
    useEffect(() => {
        setMainHeader("Przydatne narzędzia");
    }, [setMainHeader]);

    return (
        <>
            <Card>
                <h3>Najnowsze artykuły</h3>
                <p>Sprawdź najnowsze artykuły</p>
                <p>Zmień liczbę wyświetlanych najnowszych artykułów</p>
            </Card>
            <Card>
                <h3>Artykuły</h3>
                <p>Zarządzaj listą artykułów</p>
                <p>Sprawdzaj dane artykułów</p>
            </Card>
            <Card>
                <h3>Edytor</h3>
                <p>Twórz nowe artykuły</p>
                <p>Edytuj istniejące artykuły</p>
            </Card>
        </>
    );
};

Home.propTypes = {
    setMainHeader: PropTypes.func,
};

export default Home;
