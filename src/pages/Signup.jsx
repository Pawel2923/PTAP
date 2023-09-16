import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

const Signup = () => {
	const { createUser } = useAuth();
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [modalState, setModalState] = useState(defaultModalState);
	const [passwordsMatch, setPasswordsMatch] = useState(false);
	const [isFormInvalid, setIsFormInvalid] = useState(true);

	useEffect(() => {
		if (password === confirmPassword) {
			setPasswordsMatch(true);
			return;
		}

		setPasswordsMatch(false);
	}, [password, confirmPassword]);

	const nameInputHandler = (ev) => {
		setName(ev.target.value);
	};

	const emailInputHandler = (ev) => {
		setEmail(ev.target.value);
	};

	const passwordInputHandler = (ev) => {
		setPassword(ev.target.value);
	};

	const confirmPasswordInputHandler = (ev) => {
		setConfirmPassword(ev.target.value);
	};

	const resetForm = () => {
		setName("");
		setEmail("");
		setPassword("");
		setConfirmPassword("");
		setIsFormInvalid(false);
		setPasswordsMatch(true);
	};

	const submitHandler = (ev) => {
		ev.preventDefault();

		if (!passwordsMatch) {
			setModalState({
				show: true,
				title: "Hasła się nie zgadzają",
				message:
					"Hasła powinny być takie same w obu polach i powinny mieć co najmniej 6 znaków.",
			});
			return;
		}

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
		createUser(email, password, name)
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
					message:
						"Serwis jest niedostępny. Spróbuj ponownie później",
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
						<label>
							<p>
								Nazwa{" "}
								<span className={classes.asterisk}>*</span>
							</p>
							<Input
								type="text"
								id="name"
								value={name}
								minLength={3}
								onInput={nameInputHandler}
								validateInput={isEmpty}
								setIsFormInvalid={setIsFormInvalid}
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
								minLength={3}
								onInput={emailInputHandler}
								validateInput={isEmail}
								setIsFormInvalid={setIsFormInvalid}
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
								minLength={6}
								onInput={passwordInputHandler}
								validateInput={isEmpty}
								setIsFormInvalid={setIsFormInvalid}
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
								minLength={6}
								onInput={confirmPasswordInputHandler}
								validateInput={isEmpty}
								setIsFormInvalid={setIsFormInvalid}
								required
							/>
						</label>
						<Button type="submit">Zapisz się</Button>
						<p>
							Masz już konto?{" "}
							<Link to="/logowanie">Zaloguj się</Link>
						</p>
					</form>
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

export default Signup;
