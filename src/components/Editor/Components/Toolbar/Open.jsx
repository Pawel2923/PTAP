import {useContext, useState} from "react";
import PropTypes from "prop-types";
import Modal from "../../../UI/Modal.jsx";
import {Button} from "../../../UI/Button.jsx";
import {EditorContext} from "/src/store/Editor/editor-context.js";
import classes from "./Toolbar.module.css";
import {useArticle} from "../../hooks/use-article.jsx";

const Open = ({setShowOpen, articles}) => {
    const [targetAddress, setTargetAddress] = useState("");

    const {Open} = useArticle();
    const {
        page,
        setPage,
        setArticle
    } = useContext(EditorContext);

    const closeModal = () => {
        setShowOpen(false);
    };

    const openArticle = (ev) => {
        ev.preventDefault();

        if (!targetAddress) {
            return;
        }

        Open(targetAddress, (article) => {
            setArticle(article);
        });

        closeModal();
        if (page !== "edit") {
            setPage("edit");
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
                    {articles &&
                        Object.entries(articles).map(([id, article]) => (
                            <option key={id} value={id}>
                                {article.title}
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
    articles: PropTypes.object,
};

export default Open;
