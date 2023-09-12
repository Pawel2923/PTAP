import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/use-auth";
import Footer from "../components/Footer/Footer";

const Logout = () => {
	const { logout } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		logout();
		navigate("/", { replace: true });
	}, [logout, navigate]);

	return <>
    <main>
      <section className="section">
        <header>
          <h2>Błąd 404</h2>
        </header>
        <div>
          <p>Nie znaleziono strony.</p>
        </div>
      </section>
    </main>
    <Footer />
  </>;
};

export default Logout;
