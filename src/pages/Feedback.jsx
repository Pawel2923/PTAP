import Input from "../components/UI/Input/Input";
import classes from "./forms.module.css";
import { Button } from "../components/UI/Button/Button";
import { ButtonLink } from "../components/UI/Button/Button";
import Footer from "../components/Footer/Footer";
import Modal from "../components/UI/Modal/Modal";
import { useState } from "react";

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

const Feedback = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [modalState, setModalState] = useState(defaultModalState);
  const [isFormInvalid, setIsFormInvalid] = useState(true);

  const emailInputHandler = (ev) => {
    setEmail(ev.target.value);
  };

  const messageInputHandler = (ev) => {
    setMessage(ev.target.value);
  };

  const resetForm = () => {
    setEmail("");
    setMessage("");
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

    console.log("Feedback submitted:", { email, message });
    setModalState({
      show: true,
      title: "Dziękujemy za zgłoszenie",
      message:
        "Twoje zgłoszenie zostało przesłane. Postaramy się jak najszybciej rozwiązać problem.",
    });

    resetForm();
  };

  const modalCloseHandler = () => {
    setModalState(defaultModalState);
  };

  return (
    <>
      <main>
        <section className="section" style={{ overflow: "inherit" }}>
          <h1>Zgłoś błąd na stronie</h1>
          <h2>Opisz dokładnie problem, aby pomóc nam go naprawić</h2>
          <form onSubmit={submitHandler} className={classes.form}>
            <div className={classes["form-field"]}>
              <label htmlFor="email">
                E-mail <span className={classes.asterisk}>*</span>
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={emailInputHandler}
                validateInput={isEmail}
                setIsFormInvalid={setIsFormInvalid}
                autoComplete="email"
                required
              />
            </div>
            <div className={classes["form-field"]}>
              <label htmlFor="message">
                Opis <span className={classes.asterisk}>*</span>
              </label>
              <Input
                id="message"
                name="message"
                rows="10"
                cols="50"
                asTextarea
                value={message}
                onChange={messageInputHandler}
                validateInput={isEmpty}
                setIsFormInvalid={setIsFormInvalid}
                required
              />
            </div>
            <Button type="submit">Wyślij</Button>
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

export default Feedback;
