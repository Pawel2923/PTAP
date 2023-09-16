import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import BackArrow from "../components/UI/BackArrow";
import { ButtonLink } from "../components/UI/Button";

const Error403 = () => {
	return (
		<>
			<Nav />
			<main>
				<BackArrow />
				<section className="section">
					<header>
						<h2>Błąd 403</h2>
					</header>
					<div>
						<p>Nie masz dostępu do tej strony.</p>
						<ButtonLink to="/logowanie">Zaloguj się</ButtonLink>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Error403;
