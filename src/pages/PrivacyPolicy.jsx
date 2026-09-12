import Footer from "../components/Footer/Footer";
import { Button } from "../components/UI/Button/Button";
import useCookieConsent from "../hooks/use-cookie-consent";
import classes from "./policy.module.css";

const PrivacyPolicy = () => {
  const { openPreferences } = useCookieConsent();

  return (
    <>
      <main className={classes.main} id="main-content" tabIndex="-1">
        <header>
          <h1>Polityka prywatności</h1>
          <p>
            <strong>Ostatnia aktualizacja:</strong> 2026-09-12
          </p>
        </header>

        <section>
          <h2>1. Informacje ogólne</h2>
          <p>
            Administratorem danych osobowych jest <strong>Zespół PTAP</strong>,
            kontakt e-mail:{" "}
            <strong>
              <a href="mailto:kontakt.ptap@gmail.com">kontakt.ptap@gmail.com</a>
            </strong>
            .
          </p>
          <p>
            Administrator przetwarza dane osobowe zgodnie z obowiązującymi
            przepisami prawa, w szczególności Rozporządzeniem Parlamentu
            Europejskiego i Rady (UE) 2016/679 (RODO).
          </p>
        </section>

        <section>
          <h2>2. Zakres przetwarzanych danych</h2>
          <p>
            W ramach korzystania z serwisu mogą być przetwarzane następujące
            dane:
          </p>
          <ul>
            <li>adres e-mail (w przypadku rejestracji lub kontaktu),</li>
            <li>dane identyfikacyjne użytkownika podane dobrowolnie,</li>
            <li>
              dane techniczne związane z korzystaniem z aplikacji (np.
              identyfikator sesji).
            </li>
          </ul>
          <p>
            Podanie danych jest dobrowolne, ale może być niezbędne do
            korzystania z wybranych funkcjonalności serwisu.
          </p>
        </section>

        <section>
          <h2>3. Cele przetwarzania danych</h2>
          <ul>
            <li>świadczenie usług drogą elektroniczną,</li>
            <li>obsługa kont użytkowników,</li>
            <li>
              zapewnienie prawidłowego i bezpiecznego działania aplikacji,
            </li>
            <li>
              kontakt z użytkownikiem w sprawach związanych z funkcjonowaniem
              serwisu.
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Podstawa prawna przetwarzania</h2>
          <ul>
            <li>
              art. 6 ust. 1 lit. b RODO – wykonanie umowy lub podjęcie działań
              przed jej zawarciem,
            </li>
            <li>
              art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes
              administratora (zapewnienie bezpieczeństwa i stabilności systemu).
            </li>
          </ul>
        </section>

        <section>
          <h2>5. Pliki cookies i technologie pokrewne</h2>
          <p>
            Serwis PTAP wykorzystuje pliki cookies (ciasteczka) oraz pokrewne
            technologie pamięci przeglądarki. Pliki cookies dzielą się na
            następujące kategorie:
          </p>
          <ul>
            <li>
              <strong>Niezbędne pliki cookies:</strong> technicznie konieczne do
              prawidłowego i bezpiecznego funkcjonowania aplikacji, utrzymania
              sesji, logowania oraz zapamiętania Twoich decyzji w zakresie
              prywatności. Zgodnie z art. 173 ust. 3 Prawa telekomunikacyjnego
              oraz art. 6 ust. 1 lit. f RODO, stosowanie tych plików{" "}
              <strong>nie wymaga zgody użytkownika</strong>.
            </li>
            <li>
              <strong>Funkcjonalne pliki cookies:</strong> umożliwiają
              zapamiętanie wybranych preferencji interfejsu użytkownika w celu
              zwiększenia wygody korzystania z serwisu.
            </li>
            <li>
              <strong>Analityczne pliki cookies:</strong> pozwalają na zbieranie
              zagregowanych, anonimowych statystyk dotyczących ruchu i
              czytelnictwa artykułów, pomagając w optymalizacji i rozwoju bazy
              wiedzy.
            </li>
            <li>
              <strong>Marketingowe pliki cookies:</strong> służą do ewentualnej
              personalizacji treści. Serwis PTAP nie prowadzi komercyjnych
              kampanii reklamowych stron trzecich ani profilowania.
            </li>
          </ul>
          <p>
            Stosowanie plików cookies opcjonalnych (funkcjonalnych,
            analitycznych i marketingowych) odbywa się wyłącznie na podstawie
            Twojej <strong>dobrowolnej zgody</strong> (art. 6 ust. 1 lit. a
            RODO). Zgoda ta może być w dowolnym momencie zmieniona lub wycofana
            bez wpływu na zgodność z prawem dotychczasowego przetwarzania.
          </p>
          <p>
            Możesz w każdej chwili zmienić swoje ustawienia za pomocą linku
            &bdquo;Ustawienia cookies&rdquo; w stopce serwisu lub klikając
            poniższy przycisk:
          </p>
          <Button onClick={openPreferences} type="button">
            Zarządzaj ustawieniami cookies
          </Button>
        </section>

        <section>
          <h2>6. Okres przechowywania danych</h2>
          <p>
            Dane osobowe przechowywane są przez okres niezbędny do realizacji
            celów, dla których zostały zebrane, lub do momentu usunięcia konta
            użytkownika.
          </p>
        </section>

        <section>
          <h2>7. Prawa użytkownika</h2>
          <ul>
            <li>dostępu do swoich danych,</li>
            <li>ich sprostowania,</li>
            <li>usunięcia,</li>
            <li>ograniczenia przetwarzania,</li>
            <li>wniesienia sprzeciwu,</li>
            <li>złożenia skargi do Prezesa UODO.</li>
          </ul>
        </section>

        <section>
          <h2>8. Zmiany polityki prywatności</h2>
          <p>
            Administrator zastrzega sobie prawo do wprowadzania zmian w
            niniejszej polityce prywatności. Aktualna wersja dokumentu jest
            zawsze dostępna w serwisie.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
