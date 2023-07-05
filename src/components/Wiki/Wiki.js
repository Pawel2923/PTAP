import { Fragment } from "react";
import { Outlet, useLocation } from "react-router-dom";

import BackArrow from "../UI/BackArrow";
import classes from "./Wiki.module.css";

const Wiki = () => {
  const location = useLocation();

  const locationCheck = /\/wiki\/.*/i.test(location.pathname);

  return (
    <Fragment>
      {locationCheck ? <BackArrow className={classes.back} /> : ""}
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default Wiki;
