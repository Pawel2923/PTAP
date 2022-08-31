import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.about}>
      <div>
        <h2>Pilot Training Arma Project</h2>
        <p>
          PTAP jest to projekt utworzony przez BowiX'a i ArrowX'a w grupie ARHD
        </p>
        <p>
          Na tej stronie dowiesz się jak przygotować się do lotu jak
          i znajdziesz pare bardziej zaawansowanych zagadnień.
        </p>
      </div>
    </div>
  );
};

export default About;
