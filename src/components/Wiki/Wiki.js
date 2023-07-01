import { useEffect, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import WidthContext from "../../store/width-context";
import SearchInput from "../Search/SearchInput";

const Wiki = () => {
  const navigate = useNavigate();
  const { width } = useContext(WidthContext);

  useEffect(() => {
    const footer = document.querySelector("footer");

    footer.style.position = "static";
    footer.style.bottom = "initial";
  }, []);

  const searchInputClickHandler = () => {
    navigate("/szukaj");
  };

  return (
    <main>
      {width <= 480 && <SearchInput onClick={searchInputClickHandler} />}
      <Outlet />
    </main>
  );
};

export default Wiki;
