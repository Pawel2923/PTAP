import { useEffect } from "react";
import PropTypes from "prop-types";

const New = ({ setMainHeader }) => {
  useEffect(() => {
    setMainHeader("Nowe artykuły");
  }, [setMainHeader]);

  return (
    <div>
      <p>Zmień kolejność artykułów</p>
      <p>Zmień liczbę nowych artykyłów</p>
      <p>Zarządzaj artykułami</p>
    </div>
  );
};

New.propTypes = {
  setMainHeader: PropTypes.func,
};

export default New;
