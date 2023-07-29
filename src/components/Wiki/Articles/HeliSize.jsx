import classes from "./Article.module.css";

const HeliSize = () => {
  return (
    <section className="section">
      <header>
        <h2>Helikoptery ze względu na rozmiar</h2>
      </header>
      <div className={classes.content}>
        <h3>Lekkie śmigłowce</h3>
        <p>
          Śmigłowce lekkie służą do zwiadu lub transportu piechoty. Te
          helikoptery mogą unosić niewielkich rozmiarów ładunek na zawiesiu.
          Śmigłowce lekkie zwykle mają mniej pancerza, co nadrabiają
          manewrowością i niewielkimi gabarytami. Śmigłowce lekkie są idealne
          dla początkujących pilotów do nauki podstawowych manewrów.
        </p>
      </div>
    </section>
  );
};

export default HeliSize;
