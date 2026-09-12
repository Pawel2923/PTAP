import Footer from "../components/Footer/Footer";
import BackArrow from "../components/UI/BackArrow/BackArrow.jsx";
import { ButtonLink } from "../components/UI/Button/Button.jsx";

const Error403 = () => {
  return (
    <>
      <main id="main-content" tabIndex="-1">
        <BackArrow to={"/"} text="Wróć na stronę główną" />
        <section className="section">
          <header>
            <h1>Błąd 403</h1>
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
