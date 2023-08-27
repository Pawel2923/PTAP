import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import BackArrow from "../components/UI/BackArrow";
import { ButtonLink } from "../components/UI/Button";

const Error404 = () => {

  return (
    <>
      <Nav />
      <main>
        <BackArrow />
        <section className="section">
          <header>
            <h2>Błąd 404</h2>
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
