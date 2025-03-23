import { ref, set, onValue, off } from "firebase/database";
import { realtimeDbInstance } from "/src/data/firebase.js";
import { useCallback } from "react";

export const useArticle = () => {
  /**
   * @callback onValueCallback
   * @param {Object} data
   */
  /**
   * Listen to all articles in database
   * @type {function(onValueCallback): function(): void}
   */
  const GetAll = useCallback((callback) => {
    const articlesRef = ref(realtimeDbInstance, "/articles/");

    const unsubscribe = onValue(articlesRef, (snapshot) => {
      const data = snapshot.val();

      callback(data);
    });

    return () => off(articlesRef, "value", unsubscribe);
  }, []);

  /**
   * Listen to article changes in database
   * @type {function(string, onValueCallback): function(): void}
   */
  const Open = useCallback((articleAddress, callback) => {
    const articleRef = ref(realtimeDbInstance, `/articles/${articleAddress}`);

    const unsubscribe = onValue(articleRef, (snapshot) => {
      const data = snapshot.val();

      callback(data);
    });

    return () => off(articleRef, "value", unsubscribe);
  }, []);

  /**
   * Save article in database
   * @param {string} article.address article address in wiki
   * @param {string[]} article.authors authors of the article
   * @param {string} article.content article content
   * @param {string} article.title article title
   * @param {string[]} article.keywords article keywords used for search
   */
  const Save = async (article) => {
    await set(ref(realtimeDbInstance, `/articles/${article.address}`), {
      authors: article.authors,
      title: article.title,
      content: article.content,
      keywords: article.keywords,
    });
  };

  return {
    GetAll,
    Open,
    Save,
  };
};
