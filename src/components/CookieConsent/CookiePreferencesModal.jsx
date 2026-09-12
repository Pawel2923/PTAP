import { useState, useEffect, useRef, useId } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved, faXmark } from "@fortawesome/free-solid-svg-icons";
import useCookieConsent from "../../hooks/use-cookie-consent";
import useScrollLock from "../../hooks/use-scroll-lock";
import classes from "./CookiePreferencesModal.module.css";

const CookiePreferencesModal = () => {
  useScrollLock();
  const dialogRef = useRef(null);
  const titleId = useId();
  const descId = useId();

  const {
    consent,
    closePreferences,
    acceptAll,
    rejectOptional,
    savePreferences,
  } = useCookieConsent();

  const [functional, setFunctional] = useState(Boolean(consent?.functional));
  const [analytics, setAnalytics] = useState(Boolean(consent?.analytics));
  const [marketing, setMarketing] = useState(Boolean(consent?.marketing));

  useEffect(() => {
    setFunctional(Boolean(consent?.functional));
    setAnalytics(Boolean(consent?.analytics));
    setMarketing(Boolean(consent?.marketing));
  }, [consent]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const previouslyFocused = document.activeElement;

    if (typeof dialog.showModal === "function" && !dialog.open) {
      dialog.showModal();
    }

    const handleClick = (event) => {
      if (event.target === dialog) {
        closePreferences();
      }
    };

    dialog.addEventListener("click", handleClick);

    return () => {
      dialog.removeEventListener("click", handleClick);
      if (typeof dialog.close === "function" && dialog.open) {
        dialog.close();
      }
      if (previouslyFocused && typeof previouslyFocused.focus === "function") {
        previouslyFocused.focus();
      }
    };
  }, [closePreferences]);

  const handleCancel = (event) => {
    event.preventDefault();
    closePreferences();
  };

  const handleSaveSelected = () => {
    savePreferences({
      functional,
      analytics,
      marketing,
    });
  };

  const overlaysRoot =
    typeof document !== "undefined"
      ? document.getElementById("overlays") || document.body
      : null;

  if (!overlaysRoot) {
    return null;
  }

  const modalContent = (
    <dialog
      ref={dialogRef}
      className={classes.dialog}
      aria-labelledby={titleId}
      aria-describedby={descId}
      onCancel={handleCancel}
    >
      <div className={classes.dialogInner}>
        <header className={classes.header}>
          <div className={classes.headerTitle}>
            <FontAwesomeIcon
              icon={faShieldHalved}
              className={classes.headerIcon}
              aria-hidden="true"
            />
            <h2 id={titleId} className={classes.title}>
              Ustawienia plików cookies
            </h2>
          </div>
          <button
            type="button"
            className={classes.closeButton}
            onClick={closePreferences}
            aria-label="Zamknij okno preferencji cookies"
          >
            <FontAwesomeIcon icon={faXmark} aria-hidden="true" />
          </button>
        </header>

        <div className={classes.body}>
          <p id={descId} className={classes.intro}>
            Dostosuj swoje preferencje dotyczące plików cookies. Pliki niezbędne
            są technicznie wymagane do prawidłowego działania serwisu i nie mogą
            zostać wyłączone. Pozostałe kategorie są opcjonalne i zostaną
            uruchomione wyłącznie za Twoją zgodą.
          </p>

          <ul className={classes.categoryList}>
            {/* 1. Niezbędne */}
            <li className={classes.categoryCard}>
              <div className={classes.categoryHeader}>
                <span className={classes.categoryName}>
                  Niezbędne pliki cookies
                </span>
                <span className={classes.badgeRequired}>Zawsze aktywne</span>
              </div>
              <p id="desc-cookie-necessary" className={classes.categoryDesc}>
                Konieczne do bezpiecznego działania strony, logowania, nawigacji
                oraz zapisania Twoich preferencji prywatności. Zgodnie z prawem
                stosowanie tych plików nie wymaga uprzedniej zgody.
              </p>
            </li>

            {/* 2. Funkcjonalne */}
            <li className={classes.categoryCard}>
              <label
                htmlFor="cookie-functional"
                className={classes.categoryHeader}
              >
                <span className={classes.categoryName}>
                  Funkcjonalne pliki cookies
                </span>
                <span className={classes.switchContainer}>
                  <input
                    type="checkbox"
                    id="cookie-functional"
                    role="switch"
                    aria-checked={functional}
                    aria-describedby="desc-cookie-functional"
                    className={classes.switchInput}
                    checked={functional}
                    onChange={(e) => setFunctional(e.target.checked)}
                  />
                  <span className={classes.switchTrack} aria-hidden="true">
                    <span className={classes.switchThumb} />
                  </span>
                </span>
              </label>
              <p id="desc-cookie-functional" className={classes.categoryDesc}>
                Umożliwiają zapamiętanie wybranych przez Ciebie ustawień
                interfejsu (np. preferowane stany widoku), aby ułatwić i
                usprawnić korzystanie z serwisu przy kolejnych wizytach.
              </p>
            </li>

            {/* 3. Analityczne */}
            <li className={classes.categoryCard}>
              <label
                htmlFor="cookie-analytics"
                className={classes.categoryHeader}
              >
                <span className={classes.categoryName}>
                  Analityczne pliki cookies
                </span>
                <span className={classes.switchContainer}>
                  <input
                    type="checkbox"
                    id="cookie-analytics"
                    role="switch"
                    aria-checked={analytics}
                    aria-describedby="desc-cookie-analytics"
                    className={classes.switchInput}
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                  />
                  <span className={classes.switchTrack} aria-hidden="true">
                    <span className={classes.switchThumb} />
                  </span>
                </span>
              </label>
              <p id="desc-cookie-analytics" className={classes.categoryDesc}>
                Pozwalają nam zbierać anonimowe dane statystyczne o ruchu na
                stronie, czytelnictwie poszczególnych artykułów i poradników, co
                umożliwia ciągły rozwój i optymalizację platformy PTAP.
              </p>
            </li>

            {/* 4. Marketingowe */}
            <li className={classes.categoryCard}>
              <label
                htmlFor="cookie-marketing"
                className={classes.categoryHeader}
              >
                <span className={classes.categoryName}>
                  Marketingowe pliki cookies
                </span>
                <span className={classes.switchContainer}>
                  <input
                    type="checkbox"
                    id="cookie-marketing"
                    role="switch"
                    aria-checked={marketing}
                    aria-describedby="desc-cookie-marketing"
                    className={classes.switchInput}
                    checked={marketing}
                    onChange={(e) => setMarketing(e.target.checked)}
                  />
                  <span className={classes.switchTrack} aria-hidden="true">
                    <span className={classes.switchThumb} />
                  </span>
                </span>
              </label>
              <p id="desc-cookie-marketing" className={classes.categoryDesc}>
                Służą do ewentualnego dopasowywania treści do zainteresowań
                użytkownika. PTAP nie prowadzi komercyjnych kampanii reklamowych
                ani profilowania marketingowego stron trzecich.
              </p>
            </li>
          </ul>
        </div>

        <footer className={classes.footer}>
          <button
            type="button"
            className={`${classes.button} ${classes.buttonSecondary}`}
            onClick={rejectOptional}
          >
            Odrzuć opcjonalne
          </button>
          <button
            type="button"
            className={`${classes.button} ${classes.buttonSecondary}`}
            onClick={acceptAll}
          >
            Zaakceptuj wszystkie
          </button>
          <button
            type="button"
            className={`${classes.button} ${classes.buttonPrimary}`}
            onClick={handleSaveSelected}
          >
            Zapisz preferencje
          </button>
        </footer>
      </div>
    </dialog>
  );

  return ReactDOM.createPortal(modalContent, overlaysRoot);
};

export default CookiePreferencesModal;
