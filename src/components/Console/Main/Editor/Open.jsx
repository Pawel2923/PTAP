import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { useGetData } from "../../../../hooks/use-db";
import Modal from "../../../UI/Modal";
import { Button } from "../../../UI/Button";
import Input from "../../../UI/Input";
import ConsoleContext from "../../../../store/console-context";
import toolbarClasses from "./Toolbar.module.css";

const Open = ({ setShowOpen }) => {
	const { data, isSuccess } = useGetData();
    const [targetAddress, setTargetAddress] = useState(null);
	const { editorContent, setArticleCode, setEditorContent } = useContext(ConsoleContext);

	const closeModal = () => {
		setShowOpen(false);
	};

	const openArticle = (ev) => {
		ev.preventDefault();

        if (isSuccess) {
            data.forEach(article => {
                if (article.address === targetAddress) {
                    setArticleCode(article.content);
                }
            })
        } else {
            console.error("Can't fetch article data from the database.");
        }
		
		closeModal();
        if (editorContent !== "edit") {
            setEditorContent("edit");
        }
	};

    const inputChangeHandler = (ev) => {
        setTargetAddress(ev.target.value);
    };

	return (
		<Modal title="Otwórz artykuł" setShowModal={setShowOpen}>
			<span>Edytuj istniejący artykuł</span>
			<form
				onSubmit={openArticle}
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
				<div className={toolbarClasses["modal-buttons"]}>
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
