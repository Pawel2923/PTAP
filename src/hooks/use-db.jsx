import { useEffect, useState } from "react";
import { app } from "../data/firebase";
import { getDatabase, ref, onValue, set } from "firebase/database";

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

	const pushData = async (newData) => {
		let pushResponse = { isSuccess: false, message: "" };

		return new Promise((resolve, reject) => {
			if (newData) {
				let newList = [...data].concat(newData);
				const database = getDatabase(app);
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
				reject(
					"Invalid newData passed to the function. Passed newData: ",
					newData
				);
			}
		});
	};

	return { data, response, pushData };
};

export default useDatabase;
