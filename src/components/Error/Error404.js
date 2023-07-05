import { useNavigate } from "react-router-dom";

import Button from "../UI/Button";

const Error404 = () => {
  const navigate = useNavigate();

  const buttonClickHandler = () => {
    navigate("/");
  };

  return (
    <main>
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
