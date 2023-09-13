import { useEffect, useLayoutEffect, useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import classes from "./LoadingScreen.module.css";

const LoadingScreen = ({ isLoading, setIsLoading }) => {
	const [loadingDots, setLoadingDots] = useState("");

	useEffect(() => {
		const onPageLoad = () => {
			setIsLoading(false);
		};

		if (document.readyState === "complete") {
			onPageLoad();
		} else {
			window.addEventListener("load", onPageLoad);
			return () => window.removeEventListener("load", onPageLoad);
		}
	}, []);

	useLayoutEffect(() => {
		let addDotInterval;
		let removeDotsInterval;

		if (isLoading === true) {
			addDotInterval = setInterval(() => {
				setLoadingDots((prevDots) => {
					let newDots = prevDots;
					newDots += ".";
					return newDots;
				});
			}, 800);
			removeDotsInterval = setInterval(() => {
				setLoadingDots("");
			}, 3200);
		}

		return () => {
			clearInterval(addDotInterval);
			clearInterval(removeDotsInterval);
		};
	}, [isLoading]);

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
