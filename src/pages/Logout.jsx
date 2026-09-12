import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/use-auth";
import Footer from "../components/Footer/Footer";

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout().then(() => {
      navigate("/", { replace: true });
    });
  }, [logout, navigate]);

  return (
    <>
      <main id="main-content" tabIndex="-1">
        <section className="section">
          <header>
            <h1>Wylogowywanie</h1>
          </header>
          <div>
            <p role="status">Trwa wylogowywanie z serwisu...</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Logout;
