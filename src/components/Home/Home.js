import useFooterPos from "../../hooks/use-footerpos";
import classes from "./Home.module.css";

const Main = () => {
  useFooterPos(true);

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
