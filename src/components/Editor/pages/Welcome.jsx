import { useEffect } from "react";
import PropTypes from "prop-types";
import Card from "../Components/Card.jsx";
import classes from "../Main.module.css";

const Welcome = ({ setMainHeader }) => {
  useEffect(() => {
    setMainHeader("Przydatne narzędzia");
  }, [setMainHeader]);

  return (
    <div className={classes.welcome}>
      <Card to="/console/new">
        <h3>Najnowsze artykuły</h3>
        <p>Sprawdź najnowsze artykuły</p>
        <p>Zarządzaj najnowszymi</p>
      </Card>
      <Card to="/console/all">
        <h3>Wszystkie artykuły</h3>
        <p>Zarządzaj listą artykułów</p>
        <p>Sprawdzaj dane artykułów</p>
      </Card>
      <Card to="/console/editor">
        <h3>Edytor</h3>
        <p>Twórz nowe artykuły</p>
        <p>Edytuj istniejące artykuły</p>
      </Card>
    </div>
  );
};

Welcome.propTypes = {
  setMainHeader: PropTypes.func,
};

export default Welcome;
