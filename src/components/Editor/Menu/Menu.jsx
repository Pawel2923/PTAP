import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Menu.module.css";
import Option from "./Option/Option";
import ConsoleContext from "../../../store/console-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

const Menu = () => {
    const navigate = useNavigate();
    const { currentPage, setCurrentPage } = useContext(ConsoleContext);

    const optionClickHandler = (ev) => {
        if (currentPage !== ev.currentTarget.id) {
            setCurrentPage(ev.currentTarget.id);
        }
    };

    const exitClickHandler = () => {
        setCurrentPage("home");
        navigate("/");
    };

    return (
        <nav className={classes.menu}>
            <Option id="home" onClick={optionClickHandler}>
                <FontAwesomeIcon icon={icon({ name: "house", style: "solid" })} />
                <span> Główna</span>
            </Option>
            <Option id="editor" onClick={optionClickHandler}>
                <FontAwesomeIcon
                    icon={icon({ name: "pencil", style: "solid" })}
                />
                <span> Edytor</span>
            </Option>
            <Option id="exit" onClick={exitClickHandler}>
                <FontAwesomeIcon
                    icon={icon({ name: "right-from-bracket", style: "solid" })}
                />
                <span> Wyjdź</span>
            </Option>
        </nav>
    );
};

export default Menu;
