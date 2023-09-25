import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import useDatabase from "/src/hooks/use-db";
import useAuth from "/src/hooks/use-auth";
import Modal from "/src/components/UI/Modal";
import { Button } from "/src/components/UI/Button";
import Input from "/src/components/UI/Input";
import ConsoleContext from "/src/store/console-context";
import classes from "./Toolbar.module.css";

const isAddress = (value) =>
	/\/wiki\/+[\w-]{2,}/i.test(value.trim().toLowerCase());
const lengthCheck = (value) => value.trim().length >= 3;

const defaultArticleInfo = {
	address: null,
	content: null,
	name: null,
	author: null,
};

const defaultResponseModalInfo = {
	show: false,
	title: "",
	message: "",
};

const Save = ({ setShowSave }) => {
	const { currentUser } = useAuth();
	const { pushData, checkObject } = useDatabase();
	const { articleContent, articleAddress, articleName } =
		useContext(ConsoleContext);
	const [address, setAddress] = useState(
		articleAddress ? articleAddress : ""
	);
	const [name, setName] = useState(articleName ? articleName : "");
	const [responseModalInfo, setResponseModalInfo] = useState(
		defaultResponseModalInfo
	);
	const [saveChanges, setSaveChanges] = useState(false);
	const [articleExists, setArticleExists] = useState(false);
	const changeResponseModalInfo = (info) => {
		setResponseModalInfo({ ...defaultResponseModalInfo, ...info });
	};

	useEffect(() => {
		const executePush = async (articleExists = false) => {
			console.log("wywolanie executePush");
			let articleInfo = defaultArticleInfo;
			articleInfo.address = address;
			articleInfo.name = name;
			articleInfo.content = articleContent;
			if (currentUser.displayName) {
				articleInfo.author = currentUser.displayName;
			} else {
				articleInfo.author = currentUser.email.split("@")[0];
			}

			if (checkObject(articleInfo)) {
				try {
					let pushResponse = await pushData(
						articleInfo,
						articleExists
					);
					if (!checkObject(pushResponse)) {
						throw new Error("Wystąpił niespodziewany błąd.");
					}

					if (pushResponse.found) {
						changeResponseModalInfo({
							show: true,
							cancel: true,
							title: "Potwierdź nadpisanie",
							message:
								"Artykuł pod tym adresem już istnieje. Czy na pewno chcesz zapisać zmiany?",
						});
					} else {
						if (!pushResponse.isSuccess) {
							throw new Error(pushResponse.message);
						}

						changeResponseModalInfo({
							show: true,
							title: "Zapisano zmiany",
							message: pushResponse.message,
						});
					}
				} catch (error) {
					console.error(error.message);
					changeResponseModalInfo({
						show: true,
						title: "Wystąpił błąd",
						message: error.message,
					});
				}
			}
			setSaveChanges(false);
		};

		if (saveChanges) {
			executePush(articleExists);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [saveChanges, articleExists]);

	const addressChangeHandler = (ev) => {
		if (ev.target.value.length < 7) {
			setAddress("/wiki/");
			return;
		}
		setAddress(ev.target.value);
	};

	const nameChangeHandler = (ev) => {
		setName(ev.target.value);
	};

	const closeSaveModal = () => {
		changeResponseModalInfo({show: false})
		setShowSave(false);
	};

	const confirmSave = () => {
		changeResponseModalInfo({show: false})
		setShowSave(false);
		setSaveChanges(true);
		setArticleExists(true);
	};

	const onSubmit = (ev) => {
		ev.preventDefault();
		setSaveChanges(true);
	};

	return (
		<>
			{!responseModalInfo.show && (
				<Modal title="Zapisywanie artykułu" setShowModal={setShowSave}>
					<span>Zapisz wszystkie zmiany lub anuluj</span>
					<form
						onSubmit={onSubmit}
						onReset={closeSaveModal}
						className={classes.form}
					>
						<Input
							type="text"
							id="address"
							placeholder="Adres do artykułu"
							value={address}
							minLength={7}
							onChange={addressChangeHandler}
							validateInput={isAddress}
							required={true}
						/>
						<Input
							type="text"
							id="name"
							placeholder="Nazwa artykułu"
							value={name}
							minLength={3}
							onChange={nameChangeHandler}
							validateInput={lengthCheck}
							required={true}
						/>
						<div className={classes["modal-buttons"]}>
							<Button type="submit">Zapisz</Button>
							<Button type="reset" highlighted={false}>
								Anuluj
							</Button>
						</div>
					</form>
				</Modal>
			)}
			{responseModalInfo.show && (
				<Modal
					title={responseModalInfo.title}
					setShowModal={closeSaveModal}
				>
					<span>{responseModalInfo.message}</span>
					<div className={classes["modal-buttons"]}>
						<Button
							className={classes["modal-button"]}
							onClick={confirmSave}
						>
							{responseModalInfo.cancel ? "Zapisz" : "Ok"}
						</Button>
						{responseModalInfo.cancel && (
							<Button
								className={classes["modal-button"]}
								highlighted={false}
								onClick={closeSaveModal}
							>
								Anuluj
							</Button>
						)}
					</div>
				</Modal>
			)}
		</>
	);
};

Save.propTypes = {
	setShowSave: PropTypes.func,
};

export default Save;
