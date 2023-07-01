import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../UI/Button";
import classes from "./Error404.module.css";

const Error404 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const footer = document.querySelector("footer");

    footer.style.position = "absolute";
    footer.style.bottom = 0;
  }, []);

  const buttonClickHandler = () => {
    navigate("/");
  };

  return (
    <main className={classes.main}>
      <header>
        <h2>Błąd 404</h2>
      </header>
      <div>
        <p>Nie znaleziono strony.</p>
        <Button onClick={buttonClickHandler}>Strona główna</Button>
      </div>
    </main>
  );
};

export default Error404;
