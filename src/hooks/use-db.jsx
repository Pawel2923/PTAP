import { useState, useEffect } from "react";
import { app } from "../components/data/firebase";
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

export const useSetData = async (articleData) => {
  const [isSuccess, setIsSuccess] = useState(null);
  useEffect(() => {
    const database = getDatabase(app);
    set(ref(database, "/articles"), articleData)
      .then(setIsSuccess(true))
      .catch(setIsSuccess(false));
  }, [articleData]);

  return isSuccess;
};
