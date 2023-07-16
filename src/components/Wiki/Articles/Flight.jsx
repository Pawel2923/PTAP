import classes from "./Article.module.css";

const Flight = () => {
  return (
    <section className="section">
      <header>
        <h2>Article title</h2>
      </header>
      <div className={classes.content}>
        <p>Example article</p>
      </div>
    </section>
  );
};

export default Flight;
