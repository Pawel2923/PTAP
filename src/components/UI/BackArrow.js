import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import WidthContext from "../../store/width-context";
import classes from "./BackArrow.module.css";

const BackArrow = (props) => {
  const navigate = useNavigate();
  const { width } = useContext(WidthContext);

  const backClickHandler = () => {
    navigate(-1);
  };

  return (
    <div
      className={
        props.className ? `${classes.back} ${props.className}` : classes.back
      }
      onClick={backClickHandler}
    >
      <i className="fa-solid fa-arrow-left"></i>
      {width > 480 ? <span>Wróć</span> : ""}
    </div>
  );
};

export default BackArrow;
