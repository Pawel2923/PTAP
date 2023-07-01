import { useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import WidthContext from "../../store/width-context";
import SearchInput from "../Search/SearchInput";
import Article from "./Article";

const Wiki = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { width } = useContext(WidthContext);

  useEffect(() => {
    if (params.contentId) {
      const block = document.getElementById(params.contentId);

      if (!block) {
        console.error("Nieprawidłowy parametr. Nie wykryto elementu");
        return;
      }

      const blockPosY = block.offsetTop - 50;

        window.scrollTo({ top: blockPosY });
    }
  }, [params]);

  useEffect(() => {
    const footer = document.querySelector("footer");

    footer.style.position = "static";
    footer.style.bottom = "initial";
  }, []);

  const searchInputClickHandler = () => {
    navigate("/search");
  };

  return (
    <main>
      {width <= 480 && <SearchInput onClick={searchInputClickHandler} />}
      <Article />
    </main>
  );
};

export default Wiki;
