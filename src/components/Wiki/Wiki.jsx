import { Outlet, useLocation } from "react-router-dom";

import BackArrow from "../UI/BackArrow";

const Wiki = () => {
  const location = useLocation();

  const locationCheck = /\/wiki\/.*/i.test(location.pathname);

  return (
    <>
      {locationCheck ? <BackArrow /> : ""}
      <main>
        <section className="section">
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default Wiki;
