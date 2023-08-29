import { Outlet, useLocation } from "react-router-dom";

import Footer from "../components/Footer/Footer"
import BackArrow from "../components/UI/BackArrow";

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
            <Footer />
        </>
    );
};

export default Wiki;
