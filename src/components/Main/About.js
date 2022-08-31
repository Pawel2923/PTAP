import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.about}>
      <div>
        <h1>Pilot Training Arma Project</h1>
        <p>
          PTAP jest to projekt utworzony przez BowiX'a i ArrowX'a w grupie ARHD,
          którego celem było zapewnienie odpowiednich warunków szkoleniowych do
          nauki pilotażu.
        </p>
        <p>
          Obecnie strona służy do zapoznania z ogólnymi zagadnieniami lotnictwa
          w Armie 3. Na tej stronie dowiesz się jak przygotować się do lotu jak
          i znajdziesz pare bardziej zaawansowanych zagadnień.
        </p>
      </div>
    </div>
  );
};

export default About;
