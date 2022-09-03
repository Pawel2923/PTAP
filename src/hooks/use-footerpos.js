import { useContext, useEffect } from "react";

import FooterPosContext from "../store/footerpos-context";

const useFooterPos = (setToAbsolute) => {
  const { footerPosAbsolute, setFooterPosAbsolute } =
    useContext(FooterPosContext);

  useEffect(() => {
    setFooterPosAbsolute(setToAbsolute);
  }, [setFooterPosAbsolute, setToAbsolute]);

  return footerPosAbsolute;
};

export default useFooterPos;
