import BackArrow from "../UI/BackArrow";
import { ButtonLink } from "../UI/Button";

const Error404 = () => {

  return (
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
  );
};

export default Error404;
