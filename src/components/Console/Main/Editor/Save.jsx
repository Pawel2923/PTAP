import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { useGetData, setData } from "../../../../hooks/use-db";
import Modal from "../../../UI/Modal";
import { Button } from "../../../UI/Button";
import Input from "../../../UI/Input";
import ConsoleContext from "../../../../store/console-context";
import toolbarClasses from "./Toolbar.module.css";

const defaultArticleInfo = { address: null, content: null, name: null };

const Save = ({ setShowSave }) => {
	const { data } = useGetData();
	const { articleCode } = useContext(ConsoleContext);
	const [articleInfo, setArticleInfo] = useState(defaultArticleInfo);

	const closeModal = () => {
		setShowSave(false);
	};

	const inputChangeHandler = ev => {
		if (ev.currentTarget.name) {
			setArticleInfo(info => {
				info[ev.currentTarget.name] = ev.currentTarget.value;
				info.content = articleCode;
				return info;
			});
		}
	};

	const saveChanges = ev => {
		ev.preventDefault();

		if (articleInfo) {
			setData(articleInfo, data);
		}
		closeModal();
	};

	return (
		<Modal title="Zapisywanie artykułu" setShowModal={setShowSave}>
			<span>Zapisz wszystkie zmiany lub anuluj</span>
			<form
				onSubmit={saveChanges}
				onReset={closeModal}
				className={toolbarClasses.form}
			>
				<Input
					type="text"
					name="address"
					placeholder="Adres do artykułu"
					onChange={inputChangeHandler}
					required={true}
				/>
				<Input
					type="text"
					name="name"
					placeholder="Nazwa artykułu"
					onChange={inputChangeHandler}
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
	);
};

Save.propTypes = {
	setShowSave: PropTypes.func,
};

export default Save;
