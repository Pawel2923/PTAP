import classes from "./Menu.module.css";
import Option from "./Option";

const Menu = () => {
    return (
        <nav className={classes.menu}>
            <Option title="Główna" />
            <Option title="Edytor" />
            <Option title="Wróć" />
        </nav>
    );
};

export default Menu;