import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Input from "../components/UI/Input";
import Modal from "../components/UI/Modal";
import { Button } from "../components/UI/Button";
import LoadingScreen from "../components/LoadingScreen";
import useAuth from "../hooks/use-auth";
import classes from "./Signup.module.css";

const defaultModalState = {
	show: false,
	title: "",
	message: "",
};

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const isEmpty = (value) => value.trim() !== "" && value.trim().length >= 3;
const isEmail = (value) => emailRegex.test(value) && value.trim().length >= 3;

const Signup = () => {
	const { createUser } = useAuth();
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [modalState, setModalState] = useState(defaultModalState);
	const [isLoading, setIsLoading] = useState(true);
	const [passwordsMatch, setPasswordsMatch] = useState(false);
	const [isFormInvalid, setIsFormInvalid] = useState(true);

	useEffect(() => {
		if (password === confirmPassword) {
			setPasswordsMatch(true);
			return;
		} 
		
		setPasswordsMatch(false);
	}, [password, confirmPassword]);

	useEffect(() => {
		if (!passwordsMatch) {
			setIsFormInvalid(true);
			return;
		}

		setIsFormInvalid(false);
	}, [passwordsMatch]);

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
		setIsFormInvalid(true);
		setPasswordsMatch(false);
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

		setModalState({
			show: true,
			title: "Wszystko ok",
			message: "Za chwilę nastąpi przejście do logowania.",
		});
		resetForm();
		createUser(email, password).then((response) => {
			console.log(response.user, response.isLogged);
		}).catch(error => console.log(error.message));
		setTimeout(() => {
			navigate("/logowanie", { replace: true });
		}, 3000);
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
								validateInput={(value) => isEmpty(value) && passwordsMatch}
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
								validateInput={(value) => isEmpty(value) && passwordsMatch}
								setIsFormInvalid={setIsFormInvalid}
								required
							/>
						</label>
						<Button type="submit">Zapisz się</Button>
						<p>Masz już konto? <Link to="/logowanie">Zaloguj się</Link></p>
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
