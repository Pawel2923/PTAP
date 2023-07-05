import { useNavigate } from "react-router-dom";

import classes from "./BackArrow.module.css";

const BackArrow = (props) => {
  const navigate = useNavigate();

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
    </div>
  );
};

export default BackArrow;
