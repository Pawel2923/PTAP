import { useState, useEffect } from "react";
import { app } from "../data/firebase";
import { getDatabase, ref, onValue, set } from "firebase/database";

export const useGetData = () => {
    const [data, setData] = useState([]);
    const [isSuccess, setIsSuccess] = useState(null);
    useEffect(() => {
        const database = getDatabase(app);
        const dataRef = ref(database, "/articles");
        onValue(
            dataRef,
            (snapshot) => {
                const data = snapshot.val();
                setData(data);
                setIsSuccess(true);
            },
            (error) => {
                console.log(error);
                setIsSuccess(false);
            }
        );
    }, []);

    return { data, isSuccess };
};

export const setData = (newData, prevData) => {
    if (newData) {
        let newList = [...prevData].concat(newData);
        const database = getDatabase(app);
        set(ref(database, "/articles"), newList);
    }
};
