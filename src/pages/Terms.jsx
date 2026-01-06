import classes from "./policy.module.css";

const Terms = () => {
  return (
    <main className={classes.main}>
      <header>
        <h1>Regulamin serwisu</h1>
        <p>
          <strong>Ostatnia aktualizacja:</strong> 2026-01-06
        </p>
      </header>

      <section>
        <h2>1. Postanowienia ogólne</h2>
        <ol>
          <li>
            Regulamin określa zasady korzystania z serwisu{" "}
            <strong>PTAP</strong>.
          </li>
          <li>
            Serwis ma charakter informacyjno-użytkowy i jest udostępniany
            bezpłatnie.
          </li>
          <li>
            Korzystanie z serwisu oznacza akceptację niniejszego regulaminu.
          </li>
        </ol>
      </section>

      <section>
        <h2>2. Zakres usług</h2>
        <ul>
          <li>korzystanie z funkcjonalności aplikacji webowej,</li>
          <li>zakładanie i obsługa kont użytkowników,</li>
          <li>zarządzanie danymi w ramach udostępnionych funkcji systemu.</li>
        </ul>
      </section>

      <section>
        <h2>3. Obowiązki użytkownika</h2>
        <ul>
          <li>korzystania z serwisu zgodnie z prawem,</li>
          <li>niepodejmowania działań zakłócających działanie systemu,</li>
          <li>podawania prawdziwych danych w przypadku rejestracji.</li>
        </ul>
      </section>

      <section>
        <h2>4. Odpowiedzialność</h2>
        <ol>
          <li>
            Administrator dokłada należytej staranności w celu zapewnienia
            poprawnego działania serwisu.
          </li>
          <li>
            Administrator nie ponosi odpowiedzialności za:
            <ul>
              <li>przerwy techniczne,</li>
              <li>utratę danych wynikającą z przyczyn niezależnych,</li>
              <li>sposób wykorzystania serwisu przez użytkownika.</li>
            </ul>
          </li>
        </ol>
      </section>

      <section>
        <h2>5. Dane osobowe</h2>
        <p>
          Zasady przetwarzania danych osobowych określa{" "}
          <strong>Polityka prywatności</strong>, stanowiąca integralną część
          niniejszego regulaminu.
        </p>
      </section>

      <section>
        <h2>6. Zmiany regulaminu</h2>
        <p>
          Administrator zastrzega sobie prawo do zmiany regulaminu. Zmiany
          wchodzą w życie z chwilą ich opublikowania w serwisie.
        </p>
      </section>

      <section>
        <h2>7. Postanowienia końcowe</h2>
        <p>
          W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają
          przepisy prawa polskiego.
        </p>
      </section>
    </main>
  );
};

export default Terms;
