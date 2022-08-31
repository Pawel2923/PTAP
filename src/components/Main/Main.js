import { useState } from "react";

import About from "./About";
import classes from "./Main.module.css";

const Main = () => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <main className={classes.main}>
      {!isLogged && <About />}
      <div className={classes.helicopters}>
        <header>
          <h2>Śmigłowce</h2>
        </header>
      </div>
    </main>
  );
};

export default Main;
