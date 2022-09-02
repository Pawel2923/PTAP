import { useState, useEffect } from "react";

import WidthContext from "./width-context";

const WidthProvider = (props) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <WidthContext.Provider value={{ width }}>
      {props.children}
    </WidthContext.Provider>
  );
};

export default WidthProvider;
