import { Fragment } from "react";
import { Outlet, useLocation } from "react-router-dom";

import BackArrow from "../UI/BackArrow";

const Wiki = () => {
  const location = useLocation();

  const locationCheck = /\/wiki\/.*/i.test(location.pathname);

  return (
    <Fragment>
      {locationCheck ? <BackArrow /> : ""}
      <main>
        <section className="section">
          <Outlet />
        </section>
      </main>
    </Fragment>
  );
};

export default Wiki;
