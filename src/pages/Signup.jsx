import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Input from "../components/UI/Input/Input.jsx";
import Modal from "../components/UI/Modal/Modal.jsx";
import { Button, ButtonLink } from "../components/UI/Button/Button.jsx";
import useAuth from "../hooks/use-auth";
import classes from "./Signup.module.css";

const defaultModalState = {
  show: false,
  title: "",
  message: "",
};

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i;
const isEmpty = (value) => value.trim() !== "" && value.trim().length >= 3;
const isEmail = (value) =>
  emailRegex.test(value.toLowerCase()) &&
  value.toLowerCase().trim().length >= 3;
const areTermsAccepted = (value) => value === true;

const Signup = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [modalState, setModalState] = useState(defaultModalState);
  const [isFormInvalid, setIsFormInvalid] = useState(true);

  const nameInputHandler = (ev) => {
    setName(ev.target.value);
  };

  const emailInputHandler = (ev) => {
    setEmail(ev.target.value);
  };

  const passwordInputHandler = (ev) => {
    setPassword(ev.target.value);
  };

  const termsInputHandler = (ev) => {
    setTerms(ev.target.checked);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setTerms(false);
    setIsFormInvalid(false);
  };

  const submitHandler = (ev) => {
    ev.preventDefault();

    if (isFormInvalid) {
      setModalState({
        show: true,
        title: "Wypełnij formularz",
        message: "Sprawdź czy poprawnie wypełniłeś wszystkie pola formularza.",
      });
      return;
    }

    resetForm();

    let username = name;
    if (username.trim().length < 3) {
      username = email.substring(0, email.indexOf("@"));
    }

    createUser(email, password, username)
      .then(() => {
        setModalState({
          show: true,
          title: "Zarejestrowano",
          message: "Za chwilę nastąpi przejście do strony głównej.",
          redirect: "/",
        });
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 5000);
      })
      .catch((error) => {
        let modalInfo = {
          show: true,
          title: "Wystąpił błąd",
          message: "Serwis jest niedostępny. Spróbuj ponownie później",
        };

        if (error.message === "auth/email-already-in-use") {
          modalInfo.message = "Podany e-mail jest już zajęty";
        }

        if (error.message === "auth/weak-password") {
          modalInfo.message =
            "Podane hasło jest za słabe. Hasło powinno mieć co najmniej 6 znaków.";
        }

        setModalState(modalInfo);
        console.log(error);
      });
  };

  const modalCloseHandler = () => {
    setModalState(defaultModalState);
  };

  return (
    <>
      <main className={classes.container}>
        <section className="section">
          <h1>Zarejestruj się</h1>
          <h2>Wypełnij formularz rejestracyjny</h2>
          <form onSubmit={submitHandler} className={classes.form}>
            <div className={classes["form-field"]}>
              <label htmlFor="name">Nazwa użytkownika</label>
              <Input
                type="text"
                id="name"
                name="name"
                value={name}
                minLength={3}
                onInput={nameInputHandler}
                setIsFormInvalid={setIsFormInvalid}
                autoComplete="username"
              />
            </div>
            <div className={classes["form-field"]}>
              <label htmlFor="email">
                E-mail <span className={classes.asterisk}>*</span>
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={email}
                minLength={3}
                onInput={emailInputHandler}
                validateInput={isEmail}
                setIsFormInvalid={setIsFormInvalid}
                autoComplete="email"
                required
              />
            </div>
            <div className={classes["form-field"]}>
              <label htmlFor="password">
                Hasło <span className={classes.asterisk}>*</span>
              </label>
              <Input
                type="password"
                id="password"
                name="password"
                value={password}
                minLength={6}
                onInput={passwordInputHandler}
                validateInput={isEmpty}
                setIsFormInvalid={setIsFormInvalid}
                autoComplete="new-password"
                required
              />
            </div>
            <div
              className={`${classes["form-field"]} ${classes["checkbox-field"]}`}
            >
              <Input
                type="checkbox"
                id="terms"
                name="terms"
                checked={terms}
                onChange={termsInputHandler}
                validateInput={areTermsAccepted}
                required
              />
              <label htmlFor="terms">
                Akceptuję{" "}
                <Link
                  to="/regulamin"
                  title="Otwórz regulamin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  regulamin
                </Link>{" "}
                i{" "}
                <Link
                  to="/polityka-prywatnosci"
                  title="Otwórz politykę prywatności"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  politykę prywatności
                </Link>
              </label>
            </div>
            <Button type="submit">Zarejestruj się</Button>
            <p>
              Masz już konto? <Link to="/logowanie">Zaloguj się</Link>
            </p>
          </form>
        </section>
        {modalState.show && (
          <Modal title={modalState.title} setShowModal={modalCloseHandler}>
            <p>{modalState.message}</p>
            {modalState.redirect ? (
              <ButtonLink
                to={modalState.redirect}
                className={classes["modal-button"]}
                onClick={modalCloseHandler}
              >
                Ok
              </ButtonLink>
            ) : (
              <Button
                className={classes["modal-button"]}
                onClick={modalCloseHandler}
              >
                Ok
              </Button>
            )}
          </Modal>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Signup;
