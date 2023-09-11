import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetData } from "../../hooks/use-db";
import classes from "./Article.module.css";

const Intro = () => {
	const ArticleList = useGetData().data;
	const [latest, setLatest] = useState("");
	const [articles, setArticles] = useState("");

	useEffect(() => {
		if (!ArticleList) {
			return;
		}

		let length = ArticleList.length;
		setLatest(
			ArticleList.slice(length - 3, length)
				.reverse()
				.map((item, key) => (
					<div key={key}>
						<Link to={item.address}>{item.name}</Link>
					</div>
				))
		);

		setArticles(
			ArticleList.slice(1, length - 3).map((item, key) => (
				<div key={key}>
					<Link to={item.address}>{item.name}</Link>
				</div>
			))
		);
	}, [ArticleList]);

	return (
		<React.Fragment>
			<header>
				<h2>Wiki</h2>
			</header>
			<div className={classes.content}>
				<h3>Zobacz najnowsze artykuły</h3>
				{latest}
				<h3>Lista wszystkich artykułów</h3>
				{articles}
			</div>
		</React.Fragment>
	);
};

export default Intro;
