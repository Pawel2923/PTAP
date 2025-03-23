import { useCallback, useEffect, useState } from "react";
import { realtimeDbInstance } from "../data/firebase";
import { ref, onValue, set, update } from "firebase/database";

const useDatabase = () => {
  const [data, setData] = useState(null);
  const [response, setResponse] = useState({
    isSuccess: false,
    message: "",
  });

  const fetchData = useCallback(() => {
    const articlesRef = ref(realtimeDbInstance, "/articles");

    onValue(
      articlesRef,
      (snapshot) => {
        const data = snapshot.val();
        const dataArray = [];

        for (const key in data) {
          data[key].address = key;
          dataArray.push(data[key]);
        }

        setData(dataArray);
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

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const pushData = async (newData, articleExists) => {
    let pushResponse = { isSuccess: false, message: "" };

    return new Promise((resolve, reject) => {
      if (!checkObject(newData)) {
        reject("Wprowadzone dane są niepoprawne");
      }

      let foundArticle = { found: false, article: {}, key: -1 };
      // Check if article exists in database
      data.forEach((article, key) => {
        if (article.address === newData.address) {
          foundArticle.article = article;
          foundArticle.key = key;
          foundArticle.found = true;
        }
      });

      if (!articleExists) {
        if (foundArticle.found) {
          return resolve({ ...pushResponse, ...foundArticle });
        }
      }

      // If article exists update it
      if (articleExists) {
        // Check if it's the same author
        if (foundArticle.article.author !== newData.author) {
          // Add author to newData if not
          newData.author += ", ".concat(foundArticle.article.author);
        }

        update(
          ref(realtimeDbInstance, "/articles/" + foundArticle.key),
          newData
        )
          .then(() => {
            pushResponse.isSuccess = true;
            pushResponse.message = "Zapisano zmiany w artykule.";
            resolve(pushResponse);
          })
          .catch((error) => {
            reject(error.code);
          });
        return;
      }

      let newList = [...data].concat(newData);
      set(ref(realtimeDbInstance, "/articles"), newList)
        .then(() => {
          pushResponse.isSuccess = true;
          pushResponse.message = "Zapisano zmiany w artykule.";
          resolve(pushResponse);
        })
        .catch((error) => {
          reject(error.code);
        });
    });
  };

  return { data, response, pushData, checkObject };
};

/**
 * Check object's properties
 * @param {object} object
 * @param {[]} requiredProperties
 * @returns {boolean}
 */
function checkObject(object, requiredProperties = []) {
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
}

export default useDatabase;
