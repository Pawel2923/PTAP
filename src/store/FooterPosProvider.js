import { useState, useCallback } from "react";

import FooterPosContext from "./footerpos-context";

const FooterPosProvider = (props) => {
  const [footerPosAbsolute, setFooterPosAbsolute] = useState(false);
  const footerPosHandler = useCallback((value) => {
    setFooterPosAbsolute(value);
  }, []);

  return (
    <FooterPosContext.Provider
      value={{
        footerPosAbsolute,
        setFooterPosAbsolute: footerPosHandler,
      }}
    >
      {props.children}
    </FooterPosContext.Provider>
  );
};

export default FooterPosProvider;
