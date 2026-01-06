import classes from "./policy.module.css";

const PrivacyPolicy = () => {
  return (
    <main className={classes.main}>
      <header>
        <h1>Polityka prywatności</h1>
        <p>
          <strong>Ostatnia aktualizacja:</strong> 2026-01-06
        </p>
      </header>

      <section>
        <h2>1. Informacje ogólne</h2>
        <p>
          Administratorem danych osobowych jest{" "}
          <strong>Zespół PTAP</strong>, kontakt e-mail:{" "}
          <strong><a href="mailto:kontakt.ptap@gmail.com">kontakt.ptap@gmail.com</a></strong>.
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
          W ramach korzystania z serwisu mogą być przetwarzane następujące dane:
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
          Podanie danych jest dobrowolne, ale może być niezbędne do korzystania
          z wybranych funkcjonalności serwisu.
        </p>
      </section>

      <section>
        <h2>3. Cele przetwarzania danych</h2>
        <ul>
          <li>świadczenie usług drogą elektroniczną,</li>
          <li>obsługa kont użytkowników,</li>
          <li>zapewnienie prawidłowego i bezpiecznego działania aplikacji,</li>
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
        <h2>5. Pliki cookies</h2>
        <p>
          Serwis wykorzystuje <strong>wyłącznie niezbędne pliki cookies</strong>
          , które:
        </p>
        <ul>
          <li>są konieczne do prawidłowego działania aplikacji,</li>
          <li>umożliwiają zapamiętanie preferencji użytkownika,</li>
          <li>nie służą do celów analitycznych ani marketingowych.</li>
        </ul>
        <p>
          Stosowanie tych plików cookies{" "}
          <strong>nie wymaga zgody użytkownika</strong>.
        </p>
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
          Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej
          polityce prywatności. Aktualna wersja dokumentu jest zawsze dostępna w
          serwisie.
        </p>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
