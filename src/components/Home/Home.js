import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Video from "../UI/Video.js";
import Button from "../UI/Button.js";
import classes from "./Home.module.css";
import WidthContext from "../../store/width-context.js";

const Main = () => {
  const navigate = useNavigate();
  const { width } = useContext(WidthContext);

  const wikiButtonClickHandler = () => {
    navigate("/wiki");
  };

  return (
    <main>
      <section className={`section ${classes["index-banner"]}`}>
        <header>
          {width <= 480 ? (
            <img
              src={require("../../img/logo.webp")}
              alt="Logo"
              width="50"
              height="50"
            />
          ) : (
            ""
          )}
          <h1>PTAP</h1>
          <h2>Pilot Training Arma Project</h2>
          <p>
            PTAP jest to projekt utworzony przez BowiX'a i ArrowX'a w grupie
            ARHD, którego celem było zapewnienie odpowiednich warunków
            szkoleniowych do nauki pilotażu.
          </p>
          <p>
            Obecnie strona służy do zapoznania z ogólnymi zagadnieniami
            lotnictwa w Armie 3. Na tej stronie dowiesz się jak przygotować się
            do lotu jak i znajdziesz pare bardziej zaawansowanych zagadnień.
          </p>
        </header>
      </section>
      <section className="section">
        <h2>Autorotacja</h2>
        <p>
          Manewr wykorzystywany do awaryjnego lądowania. Dzięki energii z
          powietrza, łopaty wirnika głównego pobudzane są do ruchu co pozwala na
          opanowanie maszyny i bezpieczne posadzenie jej na ziemię.
        </p>
        <figure>
          <img
            src={require("../../img/autorotacja.webp")}
            alt="Zdjęcie ukazujące przepływ powietrza podczas autorotacji"
            width="332"
            height="187"
          />
          <figcaption>Przepływ powietrza podczas autorotacji</figcaption>
        </figure>
      </section>
      <section className="section">
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
      <section className="section">
        <h2>Wiki</h2>
        <h3>Zobacz więcej artykułów na wiki</h3>
        <Button onClick={wikiButtonClickHandler}>Przejdź do wiki</Button>
      </section>
    </main>
  );
};

export default Main;
