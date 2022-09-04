import classes from "./Search.module.css";

const SearchInput = (props) => {
  return (
    <div className={classes.search} onClick={props.onClick} style={{ gridTemplateColumns: "1fr" }}>
      <form>
        <input type="search" />
        <div className={classes.placeholder}>
          <i className="fa-solid fa-magnifying-glass"></i> Przeszukaj wiki
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
