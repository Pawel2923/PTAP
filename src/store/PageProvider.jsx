import { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

import PageContext from "./page-context";

const WidthProvider = ({ children }) => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [height, setHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 0
  );
  const [currentPage, setCurrentPage] = useState(
    typeof document !== "undefined" ? document.location.pathname : "/"
  );
  const [fullscreen, setFullscreen] = useState(false);

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
    let prevWidth = window.innerWidth;
    let prevHeight = window.innerHeight;

    const handleWindowResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      // On mobile browsers, vertical scrolling dynamically collapses/expands the address bar,
      // changing innerHeight by 1px on every frame and triggering resize events.
      // Only update dimensions if width changed (orientation/viewport resize) or a major height change occurred.
      if (newWidth !== prevWidth) {
        prevWidth = newWidth;
        prevHeight = newHeight;
        setWidth(newWidth);
        setHeight(newHeight);
      } else if (Math.abs(newHeight - prevHeight) > 150) {
        prevHeight = newHeight;
        setHeight(newHeight);
      }
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const value = useMemo(
    () => ({
      width,
      height,
      currentPage,
      setCurrentPage,
      fullscreen,
      setFullscreen,
    }),
    [width, height, currentPage, fullscreen]
  );

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

WidthProvider.propTypes = {
  children: PropTypes.any,
};

export default WidthProvider;
