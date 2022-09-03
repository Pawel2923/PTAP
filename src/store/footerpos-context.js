import { createContext } from "react";

const FooterPosContext = createContext({
    footerPosAbsolute: false,
    setFooterPosAbsolute: (value) => {}
});

export default FooterPosContext;