import { useEffect, useState } from "react";
import { app } from "../data/firebase";
import { getDatabase, ref, onValue, set } from "firebase/database";

const defaultResponse = {
	isSuccess: false,
	error: { code: "", message: "" },
	message: "",
};

const useDatabase = () => {
	const [data, setData] = useState(null);
	const [response, setResponse] = useState(defaultResponse);

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
				console.error(error);
				setResponse((response) => {
					response.isSuccess = false;
					return response;
				});
				throw new Error(error.code);
			}
		);
	}, []);

	const pushData = async (newData) => {
		let pushResponse = defaultResponse;

		if (newData) {
			let newList = [...data].concat(newData);
			const database = getDatabase(app);
			await set(ref(database, "/articles"), newList)
				.then(() => {
					pushResponse.isSuccess = true;
					pushResponse.message = "Zapisano artykuł do bazy.";
				})
				.catch((error) => {
					pushResponse.isSuccess = false;
					throw new Error(error.code);
				});
		} else {
			pushResponse.isSuccess = false;
			throw new Error(
				"Invalid newData passed to the function. Passed newData: ",
				newData
			);
		}

		return pushResponse;
	};

	return { data, response, pushData };
};

export default useDatabase;
