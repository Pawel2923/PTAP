import { useContext, useState } from "react";
import PropTypes from "prop-types";
import useDatabase from "/src/hooks/use-db";
import Modal from "../../UI/Modal";
import { Button } from "../../UI/Button";
import EditorContext from "/src/store/editor-context";
import classes from "./Toolbar.module.css";

const Open = ({ setShowOpen }) => {
	const { data, response } = useDatabase();
	const [targetAddress, setTargetAddress] = useState(null);
	const {
		editorContent,
		setArticleContent,
		setArticleAddress,
		setArticleName,
		setEditorContent,
	} = useContext(EditorContext);

	const closeModal = () => {
		setShowOpen(false);
	};

	const openArticle = (ev) => {
		ev.preventDefault();

		if (response.isSuccess) {
			data.forEach((article) => {
				if (article.address === targetAddress) {
					setArticleContent(article.content);
					setArticleAddress(article.address);
					setArticleName(article.name);
				}
			});
		} else {
			console.error("Can't fetch article data from the database.");
		}

		closeModal();
		if (editorContent !== "edit") {
			setEditorContent("edit");
		}
	};

	const selectChangeHandler = (ev) => {
		setTargetAddress(ev.target.value);
	};

	return (
		<Modal title="Otwórz artykuł" setShowModal={setShowOpen}>
			<span>Edytuj istniejący artykuł</span>
			<form
				onSubmit={openArticle}
				onReset={closeModal}
				className={classes.form}
			>
				<select
					className={classes.select}
					name="address"
					onChange={selectChangeHandler}
					required={true}
					defaultValue=""
				>
					<option
						value=""
						aria-selected={true}
						aria-disabled={true}
						disabled={true}
					>
						Wybierz artykuł
					</option>
					{data &&
						data.map((article, key) => (
							<option key={key} value={article.address}>
								{article.name}
							</option>
						))}
				</select>
				<div className={classes["modal-buttons"]}>
					<Button type="submit">Otwórz</Button>
					<Button type="reset" highlighted={false}>
						Anuluj
					</Button>
				</div>
			</form>
		</Modal>
	);
};

Open.propTypes = {
	setShowOpen: PropTypes.func,
};

export default Open;
