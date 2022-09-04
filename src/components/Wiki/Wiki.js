import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./Wiki.module.css";
import WidthContext from "../../store/width-context";
import SearchInput from "../Search/SearchInput";

const Wiki = () => {
  const navigate = useNavigate();
  const { width } = useContext(WidthContext);

  useEffect(() => {
    const footer = document.querySelector("footer");

    footer.style.position = "static";
    footer.style.bottom = "initial";
  }, []);

  const searchInputClickHandler = () => {
    navigate('/search');
  };

  return (
    <main className={classes.main}>
      {width <= 480 && <SearchInput onClick={searchInputClickHandler} />}
      <section className={classes.section}>
        <header>
          <h2 id="heli">Śmigłowce</h2>
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
                Lekkie śmigłowce są świetne w szkoleniu początkujących pilotów.
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
                <img src={require("../../img/uh1y.webp")} alt="UH-1Y Venom" />
                <figcaption>
                  Bell UH-1Y Venom - amerykański średni śmigłowiec
                  wielozadaniowy
                </figcaption>
              </figure>
            </li>
            <li>
              <p>Śmigłowce ciężkie</p>
              <p>
                Ciężkie śmigłowce cechują się dużym udźwigiem. Pozwalają na
                wsparcie logistyczne na polu walki. Śmigłowce te także służą do
                transportu piechoty. Ich duże gabaryty uniemożliwiają szybsze
                manewrowanie takie jak w lekkich śmigłowcach. Szczególnie należy
                zwrócić szczególną uwagę przy lądowaniu na terenach zabudowanych
                i zalesionych.
              </p>
              <figure>
                <img src={require("../../img/mi6.webp")} alt="Mi-6 Hook" />
                <figcaption>
                  Mil Mi-6 Hook - radziecki ciężki śmigłowiec transportowy
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
