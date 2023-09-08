import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import classes from "./LoadingScreen.module.css";

const LoadingScreen = ({ isLoading, setIsLoading }) => {
	const [loadingDots, setLoadingDots] = useState("");

	useEffect(() => {
		let addDotInterval;
		let removeDotsInterval;
		let closeLoadingTimeout;
		
		if (isLoading === true) {
			addDotInterval = setInterval(() => {
				setLoadingDots((prevDots) => {
					return (prevDots += ".");
				});
			}, 1000);
			removeDotsInterval = setInterval(() => {
				setLoadingDots("");
			}, 4000);
			closeLoadingTimeout = setTimeout(() => {
				setIsLoading(false);
			}, 20000);
		}

		return () => {
			clearInterval(addDotInterval);
			clearInterval(removeDotsInterval);
			clearTimeout(closeLoadingTimeout);
		};
	}, [isLoading, setIsLoading]);

    return (
        <div className={classes.loading}>
            <div className={classes.icon}>
                <FontAwesomeIcon icon={solid("circle-notch")} spin />
            </div>
            <h2>Ładowanie{loadingDots}</h2>
        </div>
    );
};

LoadingScreen.propTypes = {
    isLoading: PropTypes.bool,
    setIsLoading: PropTypes.func,
};

export default LoadingScreen;