import classes from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={classes.welcome}>
      <div>
        <h3>Witaj! Zacznij edytować artykuły wybierając jedną z opcji</h3>
        <h4>Edytuj</h4>
        <button type="button" className={classes.option}>
          Nowy...
        </button>
        <button type="button" className={classes.option}>
          Otwórz...
        </button>
      </div>
      <div className={classes.recent}>
        <h4>Najnowsze</h4>
        <ul>
          <li>
            <button type="button" className={classes.option}>
              Artykuł 1
            </button>
          </li>
          <li>
            <button type="button" className={classes.option}>
              Artykuł 2
            </button>
          </li>
          <li>
            <button type="button" className={classes.option}>
              Artykuł 3
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Welcome;
