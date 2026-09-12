import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookieBite } from "@fortawesome/free-solid-svg-icons";
import useCookieConsent from "../../hooks/use-cookie-consent";
import CookiePreferencesModal from "./CookiePreferencesModal";
import { Button } from "../UI/Button/Button";
import classes from "./CookieConsent.module.css";

const CookieConsent = () => {
  const {
    isBannerVisible,
    isPreferencesOpen,
    openPreferences,
    acceptAll,
    rejectOptional,
  } = useCookieConsent();

  return (
    <>
      {isBannerVisible && (
        <aside
          className={classes.banner}
          role="region"
          aria-label="Zgoda na pliki cookies"
        >
          <div className={classes.container}>
            <div className={classes.content}>
              <div className={classes.header}>
                <FontAwesomeIcon
                  icon={faCookieBite}
                  className={classes.icon}
                  aria-hidden="true"
                />
                <h2 className={classes.title}>Szanujemy Twoją prywatność</h2>
              </div>
              <p className={classes.description}>
                Serwis PTAP wykorzystuje niezbędne pliki cookies do prawidłowego
                funkcjonowania strony. Za Twoją zgodą możemy również używać
                opcjonalnych plików cookies do celów funkcjonalnych i
                analitycznych. Możesz zaakceptować wszystkie pliki, odrzucić
                opcjonalne lub dostosować swoje wybory. Szczegóły znajdziesz w
                naszej{" "}
                <Link to="/polityka-prywatnosci" className={classes.policyLink}>
                  Polityce prywatności
                </Link>
                .
              </p>
            </div>
            <div className={classes.actions}>
              <Button onClick={acceptAll}>Zaakceptuj wszystkie</Button>
              <Button highlighted={false} onClick={rejectOptional}>
                Odrzuć opcjonalne
              </Button>
              <Button highlighted={false} onClick={openPreferences}>
                Dostosuj
              </Button>
            </div>
          </div>
        </aside>
      )}

      {isPreferencesOpen && <CookiePreferencesModal />}
    </>
  );
};

export default CookieConsent;
