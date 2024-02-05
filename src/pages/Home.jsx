import { useContext } from "react";
import Footer from "../components/Footer/Footer";
import Video from "../components/UI/Video";
import { ButtonLink } from "../components/UI/Button";
import PageContext from "../store/page-context";
import ptapLogo from "../img/logo.webp";
import autorot from "../img/autorotacja.webp";
import classes from "./Home.module.css";

const Main = () => {
	const { width } = useContext(PageContext);

	return (
		<>
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
							Projekt mający na celu nauczenie graczy Arma 3
							podstaw latania śmigłowcami. Na stronie zapoznasz się 
							z podstawowymi manewrami, które pozwolą Ci na bezpieczne 
							lądowanie i startowanie. Poradniki dotyczące sprzętu jak
							i bardziej szczegółowe opisy są dostępne w sekcji Wiki.
						</p>
					</header>
				</section>
				<section className="section">
					<h2>Autorotacja</h2>
					<p>
						Manewr wykorzystywany do awaryjnego lądowania. Dzięki
						energii z powietrza, łopaty wirnika głównego pobudzane
						są do ruchu co pozwala na opanowanie maszyny i
						bezpieczne posadzenie jej na ziemię.
					</p>
					<figure className={classes.figure}>
						<img
							src={autorot}
							alt="Zdjęcie ukazujące przepływ powietrza podczas autorotacji"
							width="332"
							height="187"
						/>
						<figcaption>
							Przepływ powietrza podczas autorotacji
						</figcaption>
					</figure>
				</section>
				<section className="section">
					<Video
						video={classes.video}
						src="https://www.youtube.com/embed/v8pn1f3ijLI"
						className={classes.iframe}
						header="Autorotacja little birdem"
					></Video>
					<Video
						video={classes.video}
						src="https://www.youtube.com/embed/videoseries?list=PLsQ6ua1LSZQwRoOCiVa-0d1eL9wk0aVGj"
						className={classes.iframe}
						header="Manewry little birdem"
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
