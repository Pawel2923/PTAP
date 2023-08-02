import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import PageContext from "./page-context";

const WidthProvider = ({ children }) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [currentPage, setCurrentPage] = useState(document.location.pathname);
    const [fullscreen, setFullscreen] = useState(false);

    const value = {
        width,
        height,
        currentPage,
        setCurrentPage,
        fullscreen,
        setFullscreen,
    };

    useEffect(() => {
        const openFullscreen = () => {
            const elem = document.documentElement;

            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) {
                /* Safari */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) {
                /* IE11 */
                elem.msRequestFullscreen();
            }
        };

        const closeFullscreen = () => {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                /* Safari */
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                /* IE11 */
                document.msExitFullscreen();
            }
        };

        if (fullscreen) {
            openFullscreen();
        } else {
            if (document.fullscreenElement) {
                closeFullscreen();
            }
        }
    }, [fullscreen]);

    useEffect(() => {
        const handleWindowResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <PageContext.Provider value={value}>{children}</PageContext.Provider>
    );
};

WidthProvider.propTypes = {
    children: PropTypes.any,
};

export default WidthProvider;
