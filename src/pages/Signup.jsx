import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Input from "../components/UI/Input";
import Modal from "../components/UI/Modal";
import { Button } from "../components/UI/Button";
import LoadingScreen from "../components/LoadingScreen";
import classes from "./Signup.module.css";

const defaultModalState = {
	show: false,
	title: "",
	message: "",
};

const Signup = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [isInputValid, setIsInputValid] = useState(new Array(4).fill(false));
	const [modalState, setModalState] = useState(defaultModalState);
    const [isLoading, setIsLoading] = useState(true);

	const inputChangeHandler = (ev, inputId) => {
		if (inputId === "name") {
			setName(ev.target.value);
		} else if (inputId === "email") {
			setEmail(ev.target.value);
		} else if (inputId === "password") {
			setPassword(ev.target.value);
		} else if (inputId === "confirmPassword") {
			setConfirmPassword(ev.target.value);
		}
	};

	const submitHandler = (ev) => {
		ev.preventDefault();
		let isValid = false;

		const falseIndex = isInputValid.findIndex((val) => val === false);
		if (falseIndex === -1) {
			isValid = true;
		}

		if (!isValid) {
			setModalState({
				show: true,
				title: "Wypełnij formularz",
				message: "Sprawdź czy poprawnie wypełniłeś wszystkie pola formularza.",
			});
			return;
		}

		setName("");
		setEmail("");
		setPassword("");
		setConfirmPassword("");
		setIsInputValid(new Array(4).fill(false));
	};

	const modalCloseHandler = () => {
		setModalState(defaultModalState);
	};

	const inputValidateHandler = (isValid, index) => {
		if (index !== -1) {
			setIsInputValid((prevState) => {
				let updatedState = prevState;
				updatedState[index] = isValid;
				return updatedState;
			});
			return;
		}
		setIsInputValid(new Array(4).fill(false));
	};

	return (
		<>
			{isLoading && <LoadingScreen isLoading={isLoading} setIsLoading={setIsLoading} />}
			<main className={classes.signup}>
				<section className="section">
					<h1>Zarejestruj się</h1>
					<h2>
						<span>Wypełnij formularz rejestracyjny</span>
					</h2>
					<form onSubmit={submitHandler} className={classes.form}>
						<label>
							<p>
								Nazwa{" "}
								<span className={classes.asterisk}>*</span>
							</p>
							<Input
								attributes={{
									type: "text",
									id: "name",
									value: name,
									minLength: "3",
									required: true,
								}}
								onChange={inputChangeHandler}
								onValidate={inputValidateHandler}
							/>
						</label>
						<label>
							<p>
								E-mail{" "}
								<span className={classes.asterisk}>*</span>
							</p>
							<Input
								attributes={{
									type: "email",
									id: "email",
									value: email,
									required: true,
								}}
								onChange={inputChangeHandler}
								onValidate={inputValidateHandler}
							/>
						</label>
						<label>
							<p>
								Hasło{" "}
								<span className={classes.asterisk}>*</span>
							</p>
							<Input
								attributes={{
									type: "password",
									id: "password",
									value: password,
									minLength: "3",
									required: true,
								}}
								onChange={inputChangeHandler}
								onValidate={inputValidateHandler}
							/>
						</label>
						<label>
							<p>
								Powtórz Hasło{" "}
								<span className={classes.asterisk}>*</span>
							</p>
							<Input
								attributes={{
									type: "password",
									id: "confirmPassword",
									value: confirmPassword,
									minLength: "3",
									required: true,
								}}
								onChange={inputChangeHandler}
								onValidate={inputValidateHandler}
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
						<p>
							{modalState.message}
						</p>
						<Button className={classes["modal-button"]} onClick={modalCloseHandler}>Ok</Button>
					</Modal>
				)}
			</main>
			<Footer />
		</>
	);
};

export default Signup;
