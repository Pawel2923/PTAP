import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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

const Login = () => {
	const navigate = useNavigate();
	const { loginWithEmail } = useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [modalState, setModalState] = useState(defaultModalState);
	const [isLoading, setIsLoading] = useState(true);
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
		setIsFormInvalid(true);
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
			message: "Zalogowano.",
		});
		setTimeout(() => {
			navigate("/", { replace: true });
		}, 3000);
		resetForm();
		loginWithEmail(email, password).then(response => console.log(response.isLogged, response.user)).catch(error => console.log(error.message));
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
					<h1>Zaloguj się</h1>
					<h2>Wypełnij formularz logowania</h2>
					<form onSubmit={submitHandler} className={classes.form}>
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
								minLength={3}
								onInput={passwordInputHandler}
								validateInput={(value) => isEmpty(value)}
								setIsFormInvalid={setIsFormInvalid}
								required
							/>
						</label>
						<Button type="submit">Zaloguj się</Button>
						<p>Nie masz jeszcze konta? <Link to="/rejestracja">Zapisz się</Link></p>
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

export default Login;
