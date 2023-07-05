import { useNavigate } from "react-router-dom";

import BackArrow from "../UI/BackArrow";
import Button from "../UI/Button";

const Error404 = () => {
  const navigate = useNavigate();

  const buttonClickHandler = () => {
    navigate("/");
  };

  return (
    <main>
      <BackArrow />
      <section className="section">
        <header>
          <h2>Błąd 404</h2>
        </header>
        <div>
          <p>Nie znaleziono strony.</p>
          <Button onClick={buttonClickHandler}>Strona główna</Button>
        </div>
      </section>
    </main>
  );
};

export default Error404;
