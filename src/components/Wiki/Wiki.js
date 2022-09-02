import classes from "./Wiki.module.css";

const Wiki = () => {
  return (
    <main className={classes.main}>
      <section className={classes.section}>
        <header>
          <h2>Śmigłowce</h2>
        </header>
        <div className={classes.content}>
          <h3>Typy śmigłowców</h3>
          <p>
            Wyróżniamy rózne rodzaje śmigłowców, ze względu na ich rozmiar, czy
            rolę.
          </p>
          <ol>
            <li>
              <p>Śmigłowce lekkie</p>
              <p>
                Są to śmigłowce, które służą do zwiadu lub transportu piechoty.
                Na zawiesiu mogą unieść bardzo lekki ładunek. Mała waga pozwala
                na łatwe manewrowanie maszyny w trudno dostępnych miejscach.
                Lekkie śmigłowce będą świetnym rozwiązaniem dla początkujących
                pilotów.
              </p>
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
};

export default Wiki;
