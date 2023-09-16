import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import useDatabase from "../../../../hooks/use-db";
import useAuth from "../../../../hooks/use-auth";
import Modal from "../../../UI/Modal";
import { Button } from "../../../UI/Button";
import Input from "../../../UI/Input";
import ConsoleContext from "../../../../store/console-context";
import toolbarClasses from "./Toolbar.module.css";

const checkObject = (object, requiredProperties = []) => {
	if (typeof object !== "object") {
		console.error("Object nie jest obiektem! Wartość object ", object);
		return false;
	}

	if (requiredProperties.length > 0) {
		requiredProperties.forEach((property) => {
			if (!Object.hasOwn(object, property)) {
				console.error("Obiekt nie ma właściwości ", property);
				return false;
			}
		});
	}

	for (let key in object) {
		if (object[key] == null) {
			console.error("Niepoprawna wartość!", object[key], "w", key);
			return false;
		}
	}
	return true;
};

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
	const { pushData } = useDatabase();
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

	useEffect(() => {
		const changeResponseModalInfo = (newInfo) => {
			setResponseModalInfo((modalInfo) => {
				if (newInfo.show) {
					modalInfo.show = newInfo.show;
				}
				if (newInfo.title) {
					modalInfo.title = newInfo.title;
				}
				if (newInfo.message) {
					modalInfo.message = newInfo.message;
				}
				return modalInfo;
			});
		};

		const executePush = async () => {
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
					const pushResponse = await pushData(articleInfo);
					if (typeof pushResponse !== "object") {
						throw new Error("Wystąpił niespodziewany błąd.");
					}

					if (!pushResponse.isSuccess) {
						throw new Error(pushResponse.message);
					}

					changeResponseModalInfo({
						show: true,
						title: "Zapisano zmiany",
						message: pushResponse.message,
					});
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
			executePush();
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [saveChanges]);

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
		setShowSave(false);
	};

	const changeShowResponseModal = (state) => {
		setResponseModalInfo((info) => {
			info.show = state;
			return info;
		});

		if (state === false) {
			closeSaveModal();
		}
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
						className={toolbarClasses.form}
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
						<div className={toolbarClasses["modal-buttons"]}>
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
					setShowModal={changeShowResponseModal}
				>
					<span>{responseModalInfo.message}</span>
					<Button
						className={toolbarClasses["modal-button"]}
						onClick={changeShowResponseModal.bind(this, false)}
					>
						Ok
					</Button>
				</Modal>
			)}
		</>
	);
};

Save.propTypes = {
	setShowSave: PropTypes.func,
};

export default Save;
