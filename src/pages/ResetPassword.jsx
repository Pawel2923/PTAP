import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Input from "../components/UI/Input";
import classes from "./Signup.module.css";
import { Button, ButtonLink } from "../components/UI/Button";
import useAuth from "../hooks/use-auth";
import Modal from "../components/UI/Modal";

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i;
const isEmail = (value) =>
  emailRegex.test(value.toLowerCase()) &&
  value.toLowerCase().trim().length >= 3;

const defaultModalState = {
  show: false,
  title: "",
  message: "",
};

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const { sendResetEmail } = useAuth();
  const [isFormInvalid, setIsFormInvalid] = useState(true);
  const [modalState, setModalState] = useState(defaultModalState);

  const emailInputHandler = (ev) => {
    setEmail(ev.target.value);
  };

  const resetForm = () => {
    setEmail("");
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
    sendResetEmail(email)
      .then(() => {
        setModalState({
          show: true,
          title: "Wysłano link resetujący hasło",
          message: "Sprawdź swoją skrzynkę e-mailową",
          redirect: "/",
        });
      })
      .catch((error) => {
        let modalInfo = {
          show: true,
          title: "Wystąpił błąd",
          message:
            "Serwis w tej chwili jest niedostępny. Spróbuj ponownie później",
        };

        setModalState(modalInfo);
        console.log(error);
      });
  };

  const modalCloseHandler = () => {
    setModalState(defaultModalState);
  };

  return (
    <>
      <main>
        <section className="section">
          <h1>Zresetuj hasło</h1>
          <h2>Podaj adres e-mail</h2>
          <form onSubmit={submitHandler} className={classes.form}>
            <label>
              <p>
                E-mail <span className={classes.asterisk}>*</span>
              </p>
              <Input
                type="email"
                id="email"
                minLength={3}
                value={email}
                onInput={emailInputHandler}
                validateInput={isEmail}
                setIsFormInvalid={setIsFormInvalid}
                required
              />
            </label>
            <Button type="submit" >Wyślij link</Button>
          </form>
        </section>
      </main>
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
      <Footer />
    </>
  );
};

export default ResetPassword;
