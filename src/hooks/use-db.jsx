import { useEffect, useState } from "react";
import { app } from "../data/firebase";
import { getDatabase, ref, onValue, set, update } from "firebase/database";

const checkObject = (object, requiredProperties = []) => {
	if (typeof object !== "object") {
		console.error("Object nie jest obiektem! Wartość object ", object);
		return false;
	}

	if (requiredProperties.length > 0) {
		requiredProperties.forEach((property) => {
			if (!Object.hasOwn(object, property)) {
				console.error("Obiekt nie ma właściwości ", property);
				return false;
			}
		});
	}

	for (let key in object) {
		if (object[key] == null) {
			console.error("Niepoprawna wartość!", object[key], "w", key);
			return false;
		}
	}
	return true;
};

const useDatabase = () => {
	const [data, setData] = useState(null);
	const [response, setResponse] = useState({
		isSuccess: false,
		message: "",
	});

	useEffect(() => {
		const database = getDatabase(app);
		const dataRef = ref(database, "/articles");

		onValue(
			dataRef,
			(snapshot) => {
				const data = snapshot.val();
				setData(data);
				setResponse((response) => {
					response.isSuccess = true;
					response.message = "Udało się pobrać listę artykułów.";
					return response;
				});
			},
			(error) => {
				throw new Error(error.code);
			}
		);
	}, []);

	const pushData = async (newData, articleExists) => {
		let pushResponse = { isSuccess: false, message: "" };
		console.log("wywolanie pushData");

		return new Promise((resolve, reject) => {
			if (checkObject(newData)) {
				const database = getDatabase(app);
				let foundArticle = { found: false, article: {}, key: -1 };
				console.log("Artykuł istnieje?: ", articleExists);
				if (!articleExists) {
					// Check if article exists in database
					data.forEach((article, key) => {
						if (article.address === newData.address) {
							foundArticle.article = article;
							foundArticle.key = key;
							foundArticle.found = true;
							return;
						}
					});

					if (foundArticle.found) {
						console.log({ ...pushResponse, ...foundArticle });
						return resolve({ ...pushResponse, ...foundArticle });
					}
				}

				// If article exists update it
				if (articleExists) {
					// Check if it's the same author
					if (foundArticle.article.author !== newData.author) {
						// Add author to newData if not
						newData.author += ", ".concat(
							foundArticle.article.author
						);
					}

					update(
						ref(database, "/articles/" + foundArticle.key),
						newData
					)
						.then(() => {
							pushResponse.isSuccess = true;
							pushResponse.message =
								"Zapisano zmiany w artykule.";
							resolve(pushResponse);
						})
						.catch((error) => {
							reject(error.code);
						});
					return;
				}

				let newList = [...data].concat(newData);
				set(ref(database, "/articles"), newList)
					.then(() => {
						pushResponse.isSuccess = true;
						pushResponse.message = "Zapisano zmiany w artykule.";
						resolve(pushResponse);
					})
					.catch((error) => {
						reject(error.code);
					});
			} else {
				reject("Wprowadzone dane nie są poprawne.");
			}
		});
	};

	return { data, response, pushData, checkObject };
};

export default useDatabase;
