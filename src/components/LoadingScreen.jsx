import { useLayoutEffect, useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import classes from "./LoadingScreen.module.css";

const LoadingScreen = ({ isLoading, setIsLoading }) => {
	const [loadingDots, setLoadingDots] = useState("");

	useLayoutEffect(() => {
		let addDotInterval;
		let removeDotsInterval;

		const onPageLoad = () => {
			setIsLoading(false);
		};

		if (isLoading === true) {
			addDotInterval = setInterval(() => {
				setLoadingDots((prevDots) => {
					return (prevDots += ".");
				});
			}, 1000);
			removeDotsInterval = setInterval(() => {
				setLoadingDots("");
			}, 4000);
			if (document.readyState === "complete") {
				onPageLoad();
			} else {
				window.addEventListener("load", onPageLoad);
				clearInterval(addDotInterval);
				clearInterval(removeDotsInterval);
				return () => window.removeEventListener("load", onPageLoad);
			}
		}

		return () => {
			clearInterval(addDotInterval);
			clearInterval(removeDotsInterval);
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
