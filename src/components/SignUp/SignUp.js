import useForm from "../../hooks/use-form";
import useFooterPos from "../../hooks/use-footerpos";
import classes from "./SignUp.module.css";

const SignUp = () => {
  useFooterPos(true);

  const {
    value: name,
    isValid: nameIsValid,
    isInvalid: nameIsInvalid,
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    resetInput: nameResetInput,
  } = useForm((value) => value.trim() !== "");

  const {
    value: email,
    isValid: emailIsValid,
    isInvalid: emailIsInvalid,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    resetInput: emailResetInput,
  } = useForm((value) => value.includes("@"));

  const {
    value: password,
    isValid: passwordIsValid,
    isInvalid: passwordIsInvalid,
    changeHandler: passwordChangeHandler,
    blurHandler: passwordBlurHandler,
    resetInput: passwordResetInput,
  } = useForm((value) => value.trim() !== "");

  const {
    value: passwordConfirm,
    isValid: passwordConfirmIsValid,
    isInvalid: passwordConfirmIsInvalid,
    changeHandler: passwordConfirmChangeHandler,
    blurHandler: passwordConfirmBlurHandler,
    resetInput: passwordConfirmResetInput,
  } = useForm((value) => value.trim() !== "");

  let formIsValid = false;
  let passwordsMatch = false;

  if (password.trim() === passwordConfirm.trim()) {
    passwordsMatch = true;
  }

  if (
    nameIsValid &&
    emailIsValid &&
    passwordIsValid &&
    passwordConfirmIsValid &&
    passwordsMatch
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = (ev) => {
    ev.preventDefault();

    nameBlurHandler();
    emailBlurHandler();
    passwordBlurHandler();
    passwordConfirmBlurHandler();

    if (!formIsValid) {
      return;
    }

    console.log(
      `Wszystko działa! Wartości: ${name}, ${email}, ${password}, ${passwordConfirm}`
    );

    nameResetInput();
    emailResetInput();
    passwordResetInput();
    passwordConfirmResetInput();
  };

  const nameInputClasses = nameIsInvalid ? classes.invalid : "";
  const emailInputClasses = emailIsInvalid ? classes.invalid : "";
  const passwordInputClasses = passwordIsInvalid ? classes.invalid : "";
  const passwordConfirmInputClasses = passwordConfirmIsInvalid
    ? classes.invalid
    : "";

  let errorText = <p className={classes["error-text"]}>Wypełnij to pole</p>;

  return (
    <main className={classes.main}>
      <header>
        <h2>Zapisz się</h2>
      </header>
      <form onSubmit={formSubmitHandler}>
        <div className={classes["input-block"]}>
          <label htmlFor="name">Nazwa</label>
          <input
            type="text"
            id="name"
            className={nameInputClasses}
            value={name}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameIsInvalid && errorText}
        </div>
        <div className={classes["input-block"]}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            className={emailInputClasses}
            value={email}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailIsInvalid && errorText}
        </div>
        <div className={classes["input-block"]}>
          <label htmlFor="password">Hasło</label>
          <input
            type="password"
            id="password"
            className={passwordInputClasses}
            value={password}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
          {passwordIsInvalid && errorText}
          {!passwordsMatch && passwordIsValid && (
            <p className={classes["error-text"]}>Hasła nie pasują</p>
          )}
        </div>
        <div className={classes["input-block"]}>
          <label htmlFor="passsword-confirm">Powtórz hasło</label>
          <input
            type="password"
            id="password-confirm"
            className={passwordConfirmInputClasses}
            value={passwordConfirm}
            onChange={passwordConfirmChangeHandler}
            onBlur={passwordConfirmBlurHandler}
          />
          {passwordConfirmIsInvalid && errorText}
          {!passwordsMatch && passwordConfirmIsValid && (
            <p className={classes["error-text"]}>Hasła nie pasują</p>
          )}
        </div>
        <button type="submit">Zarejestruj się</button>
      </form>
    </main>
  );
};

export default SignUp;
