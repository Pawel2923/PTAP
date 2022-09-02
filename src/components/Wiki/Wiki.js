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
              <figure>
                <img
                  src={require("../../img/mh6lb.webp")}
                  alt="Hughes MH-6 Little Bird"
                />
                <figcaption>
                  Hughes MH-6 Little Bird - amerykański lekki śmigłowiec
                  wielozadaniowy
                </figcaption>
              </figure>
            </li>
            <li>
              <p>Śmigłowce średnie</p>
              <p>
                Śmigłowce te pozwalają na transport piechoty, amunicji,
                medykamentów. Do śmigłowców średnich zaliczają się również
                śmigłowce szturmowe. Średnie śmigłowce wykorzystywane są także
                do wsparcia.
              </p>
              <figure>
                <img src={require("../../img/uh1y.webp")} alt="UH-1Y Venom"/>
                <figcaption>
                  Bell UH-1Y Venom - amerykański średni śmigłowiec wielozadaniowy
                </figcaption>
              </figure>
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
};

export default Wiki;
