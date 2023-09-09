import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Input from "../components/UI/Input";
import Modal from "../components/UI/Modal";
import { Button } from "../components/UI/Button";
import LoadingScreen from "../components/LoadingScreen";
import useForm from "../hooks/use-input";
import classes from "./Signup.module.css";

const defaultModalState = {
	show: false,
	title: "",
	message: "",
};

const isEmpty = (value) => value.trim() !== "" && value.trim().length >= 3;
const hasAt = (value) => value.includes("@") && value.trim().length >= 3;

const Signup = () => {
	const {
		value: name,
		isInvalid: nameIsInvalid,
		changeHandler: nameChangeHandler,
		resetInput: nameClear,
		blurHandler: nameBlurHandler,
	} = useForm(isEmpty);
	const {
		value: email,
		isInvalid: emailIsInvalid,
		changeHandler: emailChangeHandler,
		resetInput: emailClear,
		blurHandler: emailBlurHandler,
	} = useForm(hasAt);
	const {
		value: password,
		isInvalid: passwordIsInvalid,
		changeHandler: passwordChangeHandler,
		resetInput: passwordClear,
		blurHandler: passwordBlurHandler,
	} = useForm(isEmpty);
	const {
		value: confirmPassword,
		isInvalid: confirmPasswordIsInvalid,
		changeHandler: confirmPasswordChangeHandler,
		resetInput: confirmPasswordClear,
		blurHandler: confirmPasswordBlurHandler,
	} = useForm(isEmpty);
	const [modalState, setModalState] = useState(defaultModalState);
	const [isLoading, setIsLoading] = useState(true);

	const submitHandler = (ev) => {
		ev.preventDefault();
		let isValid = false;

		nameBlurHandler();
		emailBlurHandler();
		passwordBlurHandler();
		confirmPasswordBlurHandler();

		const isInputValid = [
			nameIsInvalid,
			emailIsInvalid,
			passwordIsInvalid,
			confirmPasswordIsInvalid,
		];
		const isInputInvalidFound = isInputValid.findIndex(
			(isInvalid) => isInvalid === true
		);

		if (isInputInvalidFound === -1) {
			isValid = true;
		}

		if (!isValid) {
			setModalState({
				show: true,
				title: "Wypełnij formularz",
				message:
					"Sprawdź czy poprawnie wypełniłeś wszystkie pola formularza.",
			});
			return;
		}

		nameClear();
		emailClear();
		passwordClear();
		confirmPasswordClear();
	};

	const modalCloseHandler = () => {
		setModalState(defaultModalState);
	};

	return (
		<>
			{isLoading && (
				<LoadingScreen
					isLoading={isLoading}
					setIsLoading={setIsLoading}
				/>
			)}
			<main className={classes.signup}>
				<section className="section">
					<h1>Zarejestruj się</h1>
					<h2>Wypełnij formularz rejestracyjny</h2>
					<form onSubmit={submitHandler} className={classes.form}>
						<label>
							<p>
								Nazwa{" "}
								<span className={classes.asterisk}>*</span>
							</p>
							<Input
								type="text"
								id="name"
								value={name}
								isInvalid={nameIsInvalid}
								minLength={3}
								onChange={nameChangeHandler}
								onBlur={nameBlurHandler}
								required
							/>
						</label>
						<label>
							<p>
								E-mail{" "}
								<span className={classes.asterisk}>*</span>
							</p>
							<Input
								type="email"
								id="email"
								value={email}
								isInvalid={emailIsInvalid}
								onChange={emailChangeHandler}
								onBlur={emailBlurHandler}
								required
							/>
						</label>
						<label>
							<p>
								Hasło{" "}
								<span className={classes.asterisk}>*</span>
							</p>
							<Input
								type="password"
								id="password"
								value={password}
								isInvalid={passwordIsInvalid}
								minLength={3}
								onChange={passwordChangeHandler}
								onBlur={passwordBlurHandler}
								required
							/>
						</label>
						<label>
							<p>
								Powtórz Hasło{" "}
								<span className={classes.asterisk}>*</span>
							</p>
							<Input
								type="password"
								id="confirmPassword"
								value={confirmPassword}
								isInvalid={confirmPasswordIsInvalid}
								minLength={3}
								onChange={confirmPasswordChangeHandler}
								onBlur={confirmPasswordBlurHandler}
								required
							/>
						</label>
						<Button type="submit">Wyślij</Button>
					</form>
				</section>
				{modalState.show && (
					<Modal
						title={modalState.title}
						setShowModal={modalCloseHandler}
					>
						<p>{modalState.message}</p>
						<Button
							className={classes["modal-button"]}
							onClick={modalCloseHandler}
						>
							Ok
						</Button>
					</Modal>
				)}
			</main>
			<Footer />
		</>
	);
};

export default Signup;
