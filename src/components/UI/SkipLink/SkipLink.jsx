import classes from "./SkipLink.module.css";

const SkipLink = () => {
  const handleClick = () => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.focus();
    }
  };

  return (
    <a href="#main-content" className={classes.skipLink} onClick={handleClick}>
      Przejdź do treści
    </a>
  );
};

export default SkipLink;
