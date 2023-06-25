import { useNavigate } from "react-router-dom";

import Video from "../UI/Video.js";
import Button from "../UI/Button.js";
import classes from "./Home.module.css";

const Main = () => {
  const navigate = useNavigate();

  const wikiButtonClickHandler = () => {
    navigate("/wiki");
  };

  return (
    <main>
      <section className={`${classes.section} ${classes["index-banner"]}`}>
        <header>
          <h1>PTAP</h1>
          <h2>Pilot Training Arma Project</h2>
          <p>
            PTAP jest to projekt utworzony przez BowiX'a i ArrowX'a w grupie
            ARHD, którego celem było zapewnienie odpowiednich warunków
            szkoleniowych do nauki pilotażu. Obecnie strona służy do zapoznania
            z ogólnymi zagadnieniami lotnictwa w Armie 3. Na tej stronie dowiesz
            się jak przygotować się do lotu jak i znajdziesz pare bardziej
            zaawansowanych zagadnień.
          </p>
        </header>
      </section>
      <section className={classes.section}>
        <h2>Wiki</h2>
        <h3>Nasza wiki odpowie na wszystkie twoje pytania</h3>
        <Button onClick={wikiButtonClickHandler}>Przejdź do wiki</Button>
      </section>
      <section className={classes.section}>
        <h2>Autorotacja</h2>
        <p>
          Jest to zjawisko polegające na samoczynnym obrocie wirnika nośnego,
          wywołane ruchem powietrza. Manewr autorotacji wykorzystywany jest do
          awarayjnego lądowania kiedy nasz silnik nie jest w stanie wytworzyć
          odpowiednich obrotów wirnika nośnego. Dzięki energi pobieranej od
          powietrza, łopaty wirnika głównego (nośnego) pobudzane są do ruchu co
          pozwala na wyhamowanie gwałtownego opadania w dół i bezpieczne
          posadzenie śmigłowca na ziemi.
        </p>
        <figure>
          <img
            src={require("../../img/autorot.webp")}
            alt="Zdjęcie ukazujące przepływ powietrza podczas autorotacji"
          />
          <figcaption>
            Zdjęcie pokazuje jak przepływa powietrze przez wirnik nośny podczas
            lotu normalnego i autorotacji
          </figcaption>
        </figure>
      </section>
      <section className={classes.section}>
        <Video
          video={classes.video}
          src="https://www.youtube.com/embed/v8pn1f3ijLI"
          className={classes.iframe}
          header="Manewry Little Birdem - autorotacja"
        ></Video>
        <Video
          video={classes.video}
          src="https://www.youtube.com/embed/videoseries?list=PLsQ6ua1LSZQwRoOCiVa-0d1eL9wk0aVGj"
          className={classes.iframe}
          header="MH-6/AH-6 Little Bird - lądowania"
        ></Video>
      </section>
    </main>
  );
};

export default Main;
