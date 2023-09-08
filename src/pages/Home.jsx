import { useContext, useState } from "react";
import Footer from "../components/Footer/Footer";
import Video from "../components/UI/Video";
import { ButtonLink } from "../components/UI/Button";
import PageContext from "../store/page-context";
import ptapLogo from "../img/logo.webp";
import autorot from "../img/autorotacja.webp";
import classes from "./Home.module.css";
import LoadingScreen from "../components/LoadingScreen";

const Main = () => {
    const { width } = useContext(PageContext);
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            {isLoading && <LoadingScreen isLoading={isLoading} setIsLoading={setIsLoading} />}
            <main>
                <section className={`section ${classes["index-banner"]}`}>
                    <header>
                        {width <= 740 ? (
                            <img
                                src={ptapLogo}
                                alt="Logo"
                                width="100"
                                height="100"
                            />
                        ) : (
                            ""
                        )}
                        <h1>PTAP</h1>
                        <h2>Pilot Training Arma Project</h2>
                        <p>
                            PTAP jest to projekt utworzony przez BowiX&apos;a i ArrowX&apos;a w grupie
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
                            src={autorot}
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
                    <ButtonLink to="/wiki">Przejdź do wiki</ButtonLink>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Main;
