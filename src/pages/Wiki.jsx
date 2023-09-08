import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import Footer from "../components/Footer/Footer"
import BackArrow from "../components/UI/BackArrow";

const Wiki = () => {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true);

    const locationCheck = /\/wiki\/.*/i.test(location.pathname);

    return (
        <>
            {isLoading && <LoadingScreen isLoading={isLoading} setIsLoading={setIsLoading} />}
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
