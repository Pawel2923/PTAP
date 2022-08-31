import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.top}>
                <ul>
                    <li>Zapisz się do projektu</li>
                    <li>Skontaktuj się z nami</li>
                    <li>Wykryłeś błąd na stronie? Skontaktuj się z naszym zespołem</li>
                </ul>
            </div>
            PTAP 2018-2022 &copy; Wszelkie prawa zastrzeżone
        </footer>
    );
};

export default Footer;