import { Link, useNavigate as navigate } from "react-router-dom";

import classes from "./Button.module.css";

export const ButtonLink = (props) => {
  return (
    <Link to={props.to} className={classes["button-link"]}>
      {props.children}
    </Link>
  );
};

export const Button = (props) => {
  const clickHandler = () => {
    navigate(props.to);
  };

  return (
    <button
      type={props.type}
      onClick={props.to ? clickHandler : () => {}}
      className={classes.button}
    >
      {props.children}
    </button>
  );
};
