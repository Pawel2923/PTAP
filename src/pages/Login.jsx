import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Input from "../components/UI/Input";
import Modal from "../components/UI/Modal";
import { Button, ButtonLink } from "../components/UI/Button";
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

const Login = () => {
	const { uid, loginWithEmail } = useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [modalState, setModalState] = useState(defaultModalState);
	const [isFormInvalid, setIsFormInvalid] = useState(true);

	const emailInputHandler = (ev) => {
		setEmail(ev.target.value);
	};

	const passwordInputHandler = (ev) => {
		setPassword(ev.target.value);
	};

	const resetForm = () => {
		setEmail("");
		setPassword("");
		setIsFormInvalid(false);
	};

	const submitHandler = (ev) => {
		ev.preventDefault();

		if (isFormInvalid) {
			setModalState({
				show: true,
				title: "Wypełnij formularz",
				message:
					"Sprawdź czy poprawnie wypełniłeś wszystkie pola formularza.",
			});
			return;
		}
		resetForm();
		loginWithEmail(email, password)
			.then(() => {
				setModalState({
					show: true,
					title: "Zalogowano",
					message: "Logowanie zakończyło się sukcesem.",
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

				if (error.message === "auth/invalid-credential") {
					modalInfo.message = "Podano błędny e-mail lub hasło";
				}

				setModalState(modalInfo);
				console.log(error);
			});
	};

	const modalCloseHandler = () => {
		setModalState(defaultModalState);
	};

	const loginForm = (
		<form onSubmit={submitHandler} className={classes.form}>
			<label>
				<p>
					E-mail <span className={classes.asterisk}>*</span>
				</p>
				<Input
					type="email"
					id="email"
					value={email}
					minLength={3}
					onInput={emailInputHandler}
					validateInput={isEmail}
					setIsFormInvalid={setIsFormInvalid}
					required
				/>
			</label>
			<label>
				<p>
					Hasło <span className={classes.asterisk}>*</span>
				</p>
				<Input
					type="password"
					id="password"
					value={password}
					minLength={3}
					onInput={passwordInputHandler}
					validateInput={isEmpty}
					setIsFormInvalid={setIsFormInvalid}
					required
				/>
			</label>
			<Button type="submit">Zaloguj się</Button>
			<p>
				Nie masz jeszcze konta?{" "}
				<Link to="/rejestracja">Zapisz się</Link>
			</p>
		</form>
	);

	const header = uid ? "Jesteś już zalogowany" : "Zaloguj się";
	const formHeader = uid
		? "Wyloguj się i zaloguj na inne konto lub przejdź na inną stronę"
		: "Wypełnij formularz logowania";

	return (
		<>
			<main className={classes.container}>
				<section className="section">
					<h1>{header}</h1>
					<h2>{formHeader}</h2>
					{uid ? (
						<div>
							<ButtonLink to="/wylogowanie">
								Wyloguj się
							</ButtonLink>
						</div>
					) : (
						loginForm
					)}
				</section>
				{modalState.show && (
					<Modal
						title={modalState.title}
						setShowModal={modalCloseHandler}
					>
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

export default Login;
