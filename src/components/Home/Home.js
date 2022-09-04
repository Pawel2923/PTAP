import { useEffect } from "react";

import classes from "./Home.module.css";

const Main = () => {
  useEffect(() => {
    const footer = document.querySelector("footer");

    footer.style.position = "absolute";
    footer.style.bottom = 0;
  }, []);

  return (
    <main className={classes.main}>
      <header>
        <h1>Śmigłowce</h1>
        <p>Typy śmigłowców</p>
      </header>
    </main>
  );
};

export default Main;
