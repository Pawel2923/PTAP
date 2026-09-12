import Footer from "../components/Footer/Footer";
import BackArrow from "../components/UI/BackArrow/BackArrow.jsx";
import { ButtonLink } from "../components/UI/Button/Button.jsx";

const Error404 = () => {
  return (
    <>
      <main id="main-content" tabIndex="-1">
        <BackArrow />
        <section className="section">
          <header>
            <h1>Błąd 404</h1>
          </header>
          <div>
            <p>Nie znaleziono strony.</p>
            <ButtonLink to="/">Strona główna</ButtonLink>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Error404;
