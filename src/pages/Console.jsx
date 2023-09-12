import { useState, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../components/Console/Menu/Menu";
import ConsoleProvider from "../store/ConsoleProvider";
import Main from "../components/Console/Main/Main";
import PageContext from "../store/page-context";
import LoadingScreen from "../components/LoadingScreen";
import useAuth from "../hooks/use-auth";
import classes from "./Console.module.css";

const Console = () => {
	const { uid } = useAuth();
	const navigate = useNavigate();
	const menuRef = useRef(null);
	const { width } = useContext(PageContext);
	const [spacerStyles, setSpacerStyles] = useState({});
	const [isMenuExpanded, setIsMenuExpanded] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    if (uid === null) {
      setIsLoggedIn(false);
      return;
    } 
    
    setIsLoggedIn(true);
  }, [uid]);

	useEffect(() => {
		if (isLoggedIn) {
      const menuWidth = menuRef.current.clientWidth;
      if (width <= 740 && !isMenuExpanded) {
        setSpacerStyles({ width: menuWidth, height: "100vh" });
      }
    }
	}, [width, isMenuExpanded, isLoggedIn]);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/rejestracja", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return (
    isLoggedIn && <ConsoleProvider>
      {isLoading && (
        <LoadingScreen
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      )}
      <div
        className={`${
          !isMenuExpanded ? classes["shrink-menu"] : ""
        } ${classes.console}`}
      >
        {width <= 740 && <div style={spacerStyles}></div>}
        <Menu ref={menuRef} setIsMenuExpanded={setIsMenuExpanded} />
        <Main />
      </div>
    </ConsoleProvider>
  );
};

export default Console;
